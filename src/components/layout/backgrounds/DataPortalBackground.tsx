import styles from './DataPortalBackground.module.css';

export function DataPortalBackground() {
    return (
        <div className={styles.background} aria-hidden="true" data-background="data-portal">
            <div className={styles.ambient} />

            <svg
                className={styles.portal}
                viewBox="0 0 1600 900"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
            >
                <defs>
                    <linearGradient id="data-portal-cyan" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="#00d9ff" stopOpacity="0" />
                        <stop offset="0.5" stopColor="#79edff" />
                        <stop offset="1" stopColor="#00d9ff" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="data-portal-violet" x1="0" y1="1" x2="1" y2="0">
                        <stop offset="0" stopColor="#7441d7" stopOpacity="0" />
                        <stop offset="0.54" stopColor="#b36cff" />
                        <stop offset="1" stopColor="#7441d7" stopOpacity="0" />
                    </linearGradient>
                    <radialGradient id="data-portal-aperture" cx="50%" cy="50%" r="50%">
                        <stop offset="0" stopColor="#b8f7ff" stopOpacity="0.58" />
                        <stop offset="0.2" stopColor="#28c9ee" stopOpacity="0.2" />
                        <stop offset="0.58" stopColor="#5736a5" stopOpacity="0.1" />
                        <stop offset="1" stopColor="#02050c" stopOpacity="0" />
                    </radialGradient>
                </defs>

                <g className={styles.depthRails}>
                    <path d="M1130 440L-80 -80" />
                    <path d="M1130 440L360 -80" />
                    <path d="M1130 440L780 -80" />
                    <path d="M1130 440L1225 -80" />
                    <path d="M1130 440L1710 -20" />
                    <path d="M1130 440L1710 245" />
                    <path d="M1130 440L1710 675" />
                    <path d="M1130 440L1640 980" />
                    <path d="M1130 440L1195 980" />
                    <path d="M1130 440L735 980" />
                    <path d="M1130 440L270 980" />
                    <path d="M1130 440L-80 840" />
                </g>

                <g className={styles.secondaryRails}>
                    <path d="M1130 440L-80 142" />
                    <path d="M1130 440L525 -80" />
                    <path d="M1130 440L1480 -80" />
                    <path d="M1130 440L1710 438" />
                    <path d="M1130 440L1450 980" />
                    <path d="M1130 440L500 980" />
                    <path d="M1130 440L-80 610" />
                </g>

                <g className={styles.portalFrames}>
                    <path d="M910 290H1300L1400 440L1300 590H910L860 440Z" />
                    <path d="M910 290H1300L1400 440L1300 590H910L860 440Z" />
                    <path d="M910 290H1300L1400 440L1300 590H910L860 440Z" />
                    <path d="M910 290H1300L1400 440L1300 590H910L860 440Z" />
                    <path d="M910 290H1300L1400 440L1300 590H910L860 440Z" />
                    <path d="M910 290H1300L1400 440L1300 590H910L860 440Z" />
                </g>

                <g className={styles.dataLanes}>
                    <path d="M1130 440C905 423 600 350 -80 78" />
                    <path d="M1130 440C946 475 644 650 42 980" />
                    <path d="M1130 440C1265 415 1460 280 1710 82" />
                    <path d="M1130 440C1290 492 1460 672 1658 980" />
                </g>

                <g className={styles.dataSignals}>
                    <path className={styles.signalCyan} d="M1130 440C905 423 600 350 -80 78" />
                    <path className={styles.signalViolet} d="M1130 440C946 475 644 650 42 980" />
                    <path className={styles.signalCyan} d="M1130 440C1265 415 1460 280 1710 82" />
                    <path className={styles.signalViolet} d="M1130 440C1290 492 1460 672 1658 980" />
                </g>

                <g className={styles.aperture}>
                    <ellipse cx="1130" cy="440" rx="172" ry="122" fill="url(#data-portal-aperture)" />
                    <path className={styles.gateOuter} d="M1046 372H1212L1256 440L1212 508H1046L1018 440Z" />
                    <path className={styles.gateInner} d="M1076 397H1188L1217 440L1188 483H1076L1058 440Z" />
                    <path className={styles.gateTicks} d="M1130 356V374M1130 506V524M998 440H1018M1256 440H1276" />
                    <circle className={styles.horizonDot} cx="1130" cy="440" r="4" />
                </g>

                <g className={styles.depthMarkers}>
                    <circle cx="830" cy="311" r="3" />
                    <circle cx="620" cy="543" r="2.5" />
                    <circle cx="1392" cy="267" r="2.5" />
                    <circle cx="1478" cy="686" r="3" />
                    <rect x="392" y="168" width="7" height="7" rx="1" />
                    <rect x="856" y="758" width="6" height="6" rx="1" />
                </g>

                <g className={styles.telemetry}>
                    <path d="M1338 184H1502" />
                    <path d="M1374 196H1502" />
                    <path d="M1338 208H1446" />
                    <circle cx="1322" cy="184" r="3" />
                    <path d="M226 724H394" />
                    <path d="M226 736H338" />
                    <circle cx="410" cy="724" r="3" />
                </g>
            </svg>

            <div className={styles.centerShade} />
            <div className={styles.vignette} />
        </div>
    );
}
