import styles from './OrbitalCircuitBackground.module.css';

export function OrbitalCircuitBackground() {
    return (
        <div className={styles.background} aria-hidden="true" data-background="orbital-circuit">
            <div className={styles.ambient} />

            <svg
                className={styles.blueprint}
                viewBox="0 0 1600 900"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
            >
                <defs>
                    <linearGradient id="orbital-cyan-violet" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#00d9ff" />
                        <stop offset="0.5" stopColor="#4a6cf7" />
                        <stop offset="1" stopColor="#a855f7" />
                    </linearGradient>
                    <linearGradient id="orbital-fade-cyan" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="#00d9ff" stopOpacity="0" />
                        <stop offset="0.5" stopColor="#00d9ff" />
                        <stop offset="1" stopColor="#00d9ff" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="orbital-fade-violet" x1="0" y1="1" x2="1" y2="0">
                        <stop offset="0" stopColor="#7b2fbe" stopOpacity="0" />
                        <stop offset="0.52" stopColor="#a855f7" />
                        <stop offset="1" stopColor="#7b2fbe" stopOpacity="0" />
                    </linearGradient>
                    <radialGradient id="orbital-radar-sweep" cx="0" cy="1" r="1">
                        <stop offset="0" stopColor="#00d9ff" stopOpacity="0.22" />
                        <stop offset="0.76" stopColor="#00d9ff" stopOpacity="0.05" />
                        <stop offset="1" stopColor="#00d9ff" stopOpacity="0" />
                    </radialGradient>
                </defs>

                <g className={styles.microGrid}>
                    <path d="M0 176H1600M0 450H1600M0 724H1600" />
                    <path d="M235 0V900M800 0V900M1365 0V900" />
                    <path d="M0 178H1600M0 452H1600M0 726H1600" />
                </g>

                <g className={styles.leftCircuit}>
                    <path className={styles.circuitRail} d="M-80 260H125L202 337H385L456 408H600" />
                    <path className={styles.circuitRail} d="M-40 630H192L262 560H432L522 470H676" />
                    <path className={styles.circuitRailMuted} d="M45 122H240L300 182H432L502 252" />
                    <path className={styles.circuitRailMuted} d="M80 778H276L344 710H505" />

                    <path className={styles.signalCyan} d="M-80 260H125L202 337H385L456 408H600" />
                    <path className={styles.signalViolet} d="M-40 630H192L262 560H432L522 470H676" />

                    <g className={styles.terminalNodes}>
                        <circle cx="202" cy="337" r="4" />
                        <circle cx="456" cy="408" r="4" />
                        <circle cx="262" cy="560" r="4" />
                        <circle cx="522" cy="470" r="4" />
                        <rect x="292" y="174" width="16" height="16" rx="3" />
                        <rect x="336" y="702" width="16" height="16" rx="3" />
                    </g>
                </g>

                <g className={styles.orbitalSystem}>
                    <ellipse className={styles.orbitGhost} cx="1130" cy="442" rx="430" ry="192" transform="rotate(-17 1130 442)" />
                    <ellipse className={styles.orbitGhost} cx="1130" cy="442" rx="338" ry="310" transform="rotate(28 1130 442)" />
                    <ellipse className={styles.orbitGhostFine} cx="1130" cy="442" rx="245" ry="378" transform="rotate(56 1130 442)" />

                    <path
                        className={styles.orbitArcCyan}
                        d="M715 558A430 192 -17 0 1 1505 318"
                    />
                    <path
                        className={styles.orbitArcViolet}
                        d="M842 250A338 310 28 0 1 1418 634"
                    />
                    <path
                        className={styles.orbitArcFine}
                        d="M982 84A245 378 56 0 1 1278 800"
                    />

                    <g className={styles.satelliteOne}>
                        <circle cx="0" cy="0" r="11" className={styles.satelliteHalo} />
                        <circle cx="0" cy="0" r="3" className={styles.satelliteCore} />
                    </g>
                    <g className={styles.satelliteTwo}>
                        <circle cx="0" cy="0" r="9" className={styles.satelliteHaloViolet} />
                        <rect x="-2.5" y="-2.5" width="5" height="5" rx="1" className={styles.satelliteCoreViolet} />
                    </g>
                </g>

                <g className={styles.radar}>
                    <circle cx="1130" cy="442" r="214" />
                    <circle cx="1130" cy="442" r="142" />
                    <circle cx="1130" cy="442" r="71" />
                    <path d="M916 442H1344M1130 228V656" />
                    <path d="M979 291L1281 593M1281 291L979 593" />
                </g>

                <g className={styles.radarSweep}>
                    <path d="M1130 442L1130 228A214 214 0 0 1 1344 442Z" fill="url(#orbital-radar-sweep)" />
                    <path d="M1130 442V228" />
                </g>

                <g className={styles.coreAssembly}>
                    <circle className={styles.coreOuter} cx="1130" cy="442" r="38" />
                    <circle className={styles.coreTicks} cx="1130" cy="442" r="28" />
                    <rect className={styles.coreChip} x="1117" y="429" width="26" height="26" rx="5" />
                    <circle className={styles.coreLight} cx="1130" cy="442" r="5" />
                    <path className={styles.corePins} d="M1130 397V414M1130 470V487M1085 442H1102M1158 442H1175" />
                </g>

                <g className={styles.dataMarkers}>
                    <g transform="translate(1455 245)">
                        <circle r="17" /><circle r="3" /><path d="M-27 0H-20M20 0H27M0-27V-20M0 20V27" />
                    </g>
                    <g transform="translate(1370 708)">
                        <circle r="11" /><circle r="2.5" /><path d="M-22 0H-16M16 0H22" />
                    </g>
                    <g transform="translate(745 215)">
                        <circle r="8" /><circle r="2" />
                    </g>
                    <g transform="translate(760 700)">
                        <rect x="-7" y="-7" width="14" height="14" rx="2" /><circle r="2" />
                    </g>
                </g>

                <g className={styles.telemetry}>
                    <path d="M1285 126H1490" />
                    <path d="M1285 137H1418" />
                    <path d="M1285 148H1452" />
                    <path d="M650 787H854" />
                    <path d="M718 798H854" />
                    <circle cx="1268" cy="126" r="4" />
                    <circle cx="871" cy="787" r="4" />
                </g>
            </svg>

            <div className={styles.scanline} />
            <div className={styles.vignette} />
            <div className={styles.grain} />
        </div>
    );
}
