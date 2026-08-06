'use client';

import { useEffect, useRef } from "react";
import styles from "./ProfessionalHexBackground.module.css";

type BrandColor = readonly [number, number, number];

type HexCell = {
    x: number;
    y: number;
    color: BrandColor;
};

const CYAN = [0, 207, 255] as const;
const BLUE = [74, 108, 247] as const;
const PURPLE = [123, 47, 190] as const;

function drawHexagon(
    context: CanvasRenderingContext2D,
    centerX: number,
    centerY: number,
    radius: number,
) {
    context.beginPath();

    for (let point = 0; point < 6; point += 1) {
        const angle = (Math.PI / 3) * point;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        if (point === 0) {
            context.moveTo(x, y);
        } else {
            context.lineTo(x, y);
        }
    }

    context.closePath();
}

function mixColor(
    start: BrandColor,
    end: BrandColor,
    amount: number,
): BrandColor {
    return start.map((channel, index) =>
        Math.round(channel + (end[index] - channel) * amount),
    ) as [number, number, number];
}

function getBrandColor(position: number): BrandColor {
    if (position < 0.5) {
        return mixColor(CYAN, BLUE, position * 2);
    }

    return mixColor(BLUE, PURPLE, (position - 0.5) * 2);
}

export function ProfessionalHexBackground() {
    const rootRef = useRef<HTMLDivElement>(null);
    const baseCanvasRef = useRef<HTMLCanvasElement>(null);
    const interactionCanvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const root = rootRef.current;
        const baseCanvas = baseCanvasRef.current;
        const interactionCanvas = interactionCanvasRef.current;

        if (!root || !baseCanvas || !interactionCanvas) {
            return;
        }

        const baseContext = baseCanvas.getContext("2d");
        const interactionContext = interactionCanvas.getContext("2d");

        if (!baseContext || !interactionContext) {
            return;
        }

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

        let viewportWidth = window.innerWidth;
        let viewportHeight = window.innerHeight;
        let hexRadius = viewportWidth < 640 ? 44 : 54;
        let influenceRadius = 190;
        let cells: HexCell[] = [];
        let pointerX = viewportWidth / 2;
        let pointerY = viewportHeight / 2;
        let pointerActive = false;
        let lastDrawX: number | null = null;
        let lastDrawY: number | null = null;
        let interactionFrame: number | null = null;
        let resizeFrame: number | null = null;

        const configureCanvas = (
            canvas: HTMLCanvasElement,
            context: CanvasRenderingContext2D,
        ) => {
            canvas.width = viewportWidth;
            canvas.height = viewportHeight;
            canvas.style.width = `${viewportWidth}px`;
            canvas.style.height = `${viewportHeight}px`;
            context.setTransform(1, 0, 0, 1, 0, 0);
        };

        const createCells = () => {
            const hexHeight = Math.sqrt(3) * hexRadius;
            const columnWidth = hexRadius * 1.5;
            const columns = Math.ceil(viewportWidth / columnWidth) + 3;
            const rows = Math.ceil(viewportHeight / hexHeight) + 3;
            const nextCells: HexCell[] = [];

            for (let column = -2; column < columns; column += 1) {
                const offsetY = Math.abs(column % 2) * (hexHeight / 2);

                for (let row = -2; row < rows; row += 1) {
                    const x = column * columnWidth;
                    const y = row * hexHeight + offsetY;
                    const position = Math.min(
                        1,
                        Math.max(0, (x / viewportWidth + y / viewportHeight) / 2),
                    );

                    nextCells.push({
                        x,
                        y,
                        color: getBrandColor(position),
                    });
                }
            }

            cells = nextCells;
        };

        const drawBaseGrid = () => {
            baseContext.clearRect(0, 0, viewportWidth, viewportHeight);
            baseContext.lineWidth = 1;
            baseContext.strokeStyle = "rgba(138, 148, 168, 0.12)";

            for (const cell of cells) {
                drawHexagon(baseContext, cell.x, cell.y, hexRadius - 3);
                baseContext.stroke();
            }
        };

        const clearLastInteraction = () => {
            if (lastDrawX === null || lastDrawY === null) {
                return;
            }

            const padding = hexRadius + 6;
            interactionContext.clearRect(
                lastDrawX - influenceRadius - padding,
                lastDrawY - influenceRadius - padding,
                (influenceRadius + padding) * 2,
                (influenceRadius + padding) * 2,
            );
            lastDrawX = null;
            lastDrawY = null;
        };

        const drawInteraction = () => {
            clearLastInteraction();

            if (!pointerActive) {
                return;
            }

            const influenceRadiusSquared = influenceRadius * influenceRadius;
            const spotlight = interactionContext.createRadialGradient(
                pointerX,
                pointerY,
                0,
                pointerX,
                pointerY,
                influenceRadius,
            );
            spotlight.addColorStop(0, "rgba(0, 207, 255, 0.05)");
            spotlight.addColorStop(0.48, "rgba(74, 108, 247, 0.022)");
            spotlight.addColorStop(1, "rgba(123, 47, 190, 0)");

            interactionContext.fillStyle = spotlight;
            interactionContext.fillRect(
                pointerX - influenceRadius,
                pointerY - influenceRadius,
                influenceRadius * 2,
                influenceRadius * 2,
            );

            let nearestCell: HexCell | null = null;
            let nearestDistanceSquared = Number.POSITIVE_INFINITY;

            for (const cell of cells) {
                const deltaX = cell.x - pointerX;
                const deltaY = cell.y - pointerY;
                const distanceSquared = deltaX * deltaX + deltaY * deltaY;

                if (distanceSquared < nearestDistanceSquared) {
                    nearestDistanceSquared = distanceSquared;
                    nearestCell = cell;
                }

                if (distanceSquared > influenceRadiusSquared) {
                    continue;
                }

                const distance = Math.sqrt(distanceSquared);
                const influence = 1 - distance / influenceRadius;
                const [red, green, blue] = cell.color;

                drawHexagon(interactionContext, cell.x, cell.y, hexRadius - 3);
                interactionContext.lineWidth = 0.9 + influence * 0.7;
                interactionContext.strokeStyle = `rgba(${red}, ${green}, ${blue}, ${0.08 + influence * 0.46})`;
                interactionContext.stroke();
            }

            if (nearestCell && nearestDistanceSquared < hexRadius * hexRadius * 1.3) {
                const activeFill = interactionContext.createLinearGradient(
                    nearestCell.x - hexRadius,
                    nearestCell.y - hexRadius,
                    nearestCell.x + hexRadius,
                    nearestCell.y + hexRadius,
                );
                activeFill.addColorStop(0, "rgba(0, 207, 255, 0.085)");
                activeFill.addColorStop(0.55, "rgba(74, 108, 247, 0.07)");
                activeFill.addColorStop(1, "rgba(123, 47, 190, 0.08)");

                drawHexagon(
                    interactionContext,
                    nearestCell.x,
                    nearestCell.y,
                    hexRadius - 3,
                );
                interactionContext.fillStyle = activeFill;
                interactionContext.fill();
                interactionContext.lineWidth = 1.4;
                interactionContext.strokeStyle = "rgba(184, 238, 255, 0.66)";
                interactionContext.stroke();
            }

            lastDrawX = pointerX;
            lastDrawY = pointerY;
        };

        const resizeCanvases = () => {
            viewportWidth = window.innerWidth;
            viewportHeight = window.innerHeight;
            hexRadius = viewportWidth < 640 ? 44 : 54;
            influenceRadius = Math.min(
                210,
                Math.max(150, viewportWidth * 0.22),
            );

            configureCanvas(baseCanvas, baseContext);
            configureCanvas(interactionCanvas, interactionContext);
            createCells();
            drawBaseGrid();
            lastDrawX = null;
            lastDrawY = null;
            drawInteraction();
        };

        const requestInteractionFrame = () => {
            if (interactionFrame !== null) {
                return;
            }

            interactionFrame = window.requestAnimationFrame(() => {
                interactionFrame = null;
                drawInteraction();
            });
        };

        const handlePointerMove = (event: PointerEvent) => {
            pointerX = event.clientX;
            pointerY = event.clientY;
            pointerActive = true;
            requestInteractionFrame();
        };

        const handlePointerLeave = () => {
            pointerActive = false;
            requestInteractionFrame();
        };

        const handleResize = () => {
            if (resizeFrame !== null) {
                return;
            }

            resizeFrame = window.requestAnimationFrame(() => {
                resizeFrame = null;
                resizeCanvases();
            });
        };

        resizeCanvases();

        if (!reducedMotion && !coarsePointer) {
            window.addEventListener("pointermove", handlePointerMove, { passive: true });
            document.documentElement.addEventListener("pointerleave", handlePointerLeave);
        }

        window.addEventListener("resize", handleResize, { passive: true });

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
            window.removeEventListener("resize", handleResize);

            if (interactionFrame !== null) {
                window.cancelAnimationFrame(interactionFrame);
            }

            if (resizeFrame !== null) {
                window.cancelAnimationFrame(resizeFrame);
            }
        };
    }, []);

    return (
        <div
            ref={rootRef}
            className={styles.background}
            aria-hidden="true"
            data-background="professional-hex"
        >
            <div className={styles.ambient} />
            <canvas ref={baseCanvasRef} className={`${styles.canvas} ${styles.baseGrid}`} />
            <canvas
                ref={interactionCanvasRef}
                className={`${styles.canvas} ${styles.interactionGrid}`}
            />
            <div className={styles.vignette} />
        </div>
    );
}
