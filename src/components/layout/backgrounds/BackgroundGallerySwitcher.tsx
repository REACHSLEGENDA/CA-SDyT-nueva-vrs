'use client';

import { useState } from "react";
import { CyberScannerBackground } from "./CyberScannerBackground";
import { DataHighwaysBackground } from "./DataHighwaysBackground";
import { DataPortalBackground } from "./DataPortalBackground";
import { HexGridBackground } from "./HexGridBackground";
import { HolographicCoreBackground } from "./HolographicCoreBackground";

const backgrounds = {
    holographic: HolographicCoreBackground,
    highways: DataHighwaysBackground,
    hex: HexGridBackground,
    scanner: CyberScannerBackground,
    portal: DataPortalBackground,
} as const;

type BackgroundId = keyof typeof backgrounds;

const options: Array<{ id: BackgroundId; number: string; label: string }> = [
    { id: "holographic", number: "6", label: "Nucleo" },
    { id: "highways", number: "7", label: "Datos" },
    { id: "hex", number: "8", label: "Hex" },
    { id: "scanner", number: "9", label: "Escaner" },
    { id: "portal", number: "10", label: "Portal" },
];

export function BackgroundGallerySwitcher() {
    const [activeId, setActiveId] = useState<BackgroundId>("holographic");
    const ActiveBackground = backgrounds[activeId];

    return (
        <>
            <ActiveBackground />

            <div
                className="fixed bottom-4 left-1/2 z-[120] flex max-w-[calc(100vw-2rem)] -translate-x-1/2 gap-1 overflow-x-auto rounded-full border border-white/10 bg-ca-dark/90 p-1.5 shadow-2xl backdrop-blur-xl"
                role="group"
                aria-label="Comparar fondos animados"
            >
                {options.map((option) => {
                    const isActive = option.id === activeId;

                    return (
                        <button
                            key={option.id}
                            type="button"
                            aria-pressed={isActive}
                            title={`Fondo ${option.number}: ${option.label}`}
                            onClick={() => setActiveId(option.id)}
                            className={
                                isActive
                                    ? "shrink-0 rounded-full bg-ca-gradient px-3 py-2 font-mono text-xs font-semibold text-white shadow-lg"
                                    : "shrink-0 rounded-full px-3 py-2 font-mono text-xs text-ca-muted transition-colors hover:bg-white/5 hover:text-ca-text"
                            }
                        >
                            <span className="md:hidden">{option.number}</span>
                            <span className="hidden md:inline">{option.number}. {option.label}</span>
                        </button>
                    );
                })}
            </div>
        </>
    );
}
