'use client';

import { useEffect, useRef } from "react";
import styles from "./ReactiveCursorBackground.module.css";

export function ReactiveCursorBackground() {
    const backgroundRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const background = backgroundRef.current;
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

        if (!background || reducedMotion || coarsePointer) {
            return;
        }

        let targetX = window.innerWidth / 2;
        let targetY = window.innerHeight / 2;
        let currentX = targetX;
        let currentY = targetY;
        let frame: number | null = null;

        const renderPosition = () => {
            currentX += (targetX - currentX) * 0.13;
            currentY += (targetY - currentY) * 0.13;

            const offsetX = (currentX - window.innerWidth / 2) * 0.075;
            const offsetY = (currentY - window.innerHeight / 2) * 0.075;

            background.style.setProperty("--cursor-x", `${currentX}px`);
            background.style.setProperty("--cursor-y", `${currentY}px`);
            background.style.setProperty("--parallax-x", `${offsetX}px`);
            background.style.setProperty("--parallax-y", `${offsetY}px`);
            background.style.setProperty("--parallax-x-reverse", `${-offsetX}px`);
            background.style.setProperty("--parallax-y-reverse", `${-offsetY}px`);

            if (Math.abs(targetX - currentX) > 0.25 || Math.abs(targetY - currentY) > 0.25) {
                frame = window.requestAnimationFrame(renderPosition);
            } else {
                frame = null;
            }
        };

        const requestPositionUpdate = () => {
            if (frame === null) {
                frame = window.requestAnimationFrame(renderPosition);
            }
        };

        const handlePointerMove = (event: PointerEvent) => {
            targetX = event.clientX;
            targetY = event.clientY;
            requestPositionUpdate();
        };

        const handlePointerLeave = () => {
            targetX = window.innerWidth / 2;
            targetY = window.innerHeight / 2;
            requestPositionUpdate();
        };

        window.addEventListener("pointermove", handlePointerMove, { passive: true });
        document.documentElement.addEventListener("pointerleave", handlePointerLeave);

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            document.documentElement.removeEventListener("pointerleave", handlePointerLeave);

            if (frame !== null) {
                window.cancelAnimationFrame(frame);
            }
        };
    }, []);

    return (
        <div
            ref={backgroundRef}
            className={styles.background}
            aria-hidden="true"
            data-background="reactive-cursor"
        >
            <div className={styles.depth} />

            <div className={`${styles.parallaxField} ${styles.parallaxFieldCyan}`}>
                <div className={`${styles.colorField} ${styles.colorFieldCyan}`} />
            </div>
            <div className={`${styles.parallaxField} ${styles.parallaxFieldPurple}`}>
                <div className={`${styles.colorField} ${styles.colorFieldPurple}`} />
            </div>

            <svg
                className={styles.fluxLines}
                viewBox="0 0 1600 900"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
            >
                <defs>
                    <linearGradient id="reactive-flux-cyan" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#00CFFF" stopOpacity="0" />
                        <stop offset="0.44" stopColor="#00CFFF" stopOpacity="0.52" />
                        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="reactive-flux-purple" x1="1" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#7B2FBE" stopOpacity="0" />
                        <stop offset="0.52" stopColor="#9A55E8" stopOpacity="0.48" />
                        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                    </linearGradient>
                </defs>

                <g className={styles.fluxCyan}>
                    <path d="M-180 690C190 420 390 780 730 520S1270 180 1780 390" />
                    <path d="M-120 756C220 520 430 824 770 584S1280 270 1700 450" />
                </g>
                <g className={styles.fluxPurple}>
                    <path d="M-160 250C230 540 480 110 820 370S1340 710 1750 470" />
                    <path d="M-90 176C260 430 500 60 850 306S1350 620 1690 410" />
                </g>
            </svg>

            <div className={styles.cursorEcho}>
                <div className={styles.echoRing} />
            </div>

            <div className={styles.cursorField}>
                <div className={styles.cursorAura} />
                <div className={styles.cursorLens} />
                <div className={`${styles.orbitRing} ${styles.orbitRingOuter}`} />
                <div className={`${styles.orbitRing} ${styles.orbitRingInner}`} />
                <div className={styles.cursorCore}>
                    <span />
                </div>
            </div>

            <div className={styles.vignette} />
            <div className={styles.grain} />
        </div>
    );
}
