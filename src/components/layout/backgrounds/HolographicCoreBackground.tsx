import styles from './HolographicCoreBackground.module.css';

const chipPins = [
    { x1: 1120, y1: 355, x2: 1120, y2: 326 },
    { x1: 1160, y1: 355, x2: 1160, y2: 318 },
    { x1: 1200, y1: 355, x2: 1200, y2: 326 },
    { x1: 1240, y1: 355, x2: 1240, y2: 318 },
    { x1: 1280, y1: 355, x2: 1280, y2: 326 },
    { x1: 1120, y1: 555, x2: 1120, y2: 584 },
    { x1: 1160, y1: 555, x2: 1160, y2: 592 },
    { x1: 1200, y1: 555, x2: 1200, y2: 584 },
    { x1: 1240, y1: 555, x2: 1240, y2: 592 },
    { x1: 1280, y1: 555, x2: 1280, y2: 584 },
    { x1: 1100, y1: 375, x2: 1071, y2: 375 },
    { x1: 1100, y1: 415, x2: 1063, y2: 415 },
    { x1: 1100, y1: 455, x2: 1071, y2: 455 },
    { x1: 1100, y1: 495, x2: 1063, y2: 495 },
    { x1: 1100, y1: 535, x2: 1071, y2: 535 },
    { x1: 1300, y1: 375, x2: 1329, y2: 375 },
    { x1: 1300, y1: 415, x2: 1337, y2: 415 },
    { x1: 1300, y1: 455, x2: 1329, y2: 455 },
    { x1: 1300, y1: 495, x2: 1337, y2: 495 },
    { x1: 1300, y1: 535, x2: 1329, y2: 535 },
];

export function HolographicCoreBackground() {
    return (
        <div className={styles.background} aria-hidden="true" data-background="holographic-core">
            <div className={styles.ambient} />

            <svg
                className={styles.interface}
                viewBox="0 0 1600 900"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
            >
                <defs>
                    <linearGradient id="holo-core-edge" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#55ecff" />
                        <stop offset="0.48" stopColor="#268cff" />
                        <stop offset="1" stopColor="#bd68ff" />
                    </linearGradient>
                    <linearGradient id="holo-core-scan" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="#19dfff" stopOpacity="0" />
                        <stop offset="0.5" stopColor="#8eefff" stopOpacity="0.9" />
                        <stop offset="1" stopColor="#19dfff" stopOpacity="0" />
                    </linearGradient>
                    <radialGradient id="holo-core-energy" cx="50%" cy="50%" r="50%">
                        <stop offset="0" stopColor="#a8f5ff" stopOpacity="0.92" />
                        <stop offset="0.18" stopColor="#19dfff" stopOpacity="0.42" />
                        <stop offset="0.62" stopColor="#713bce" stopOpacity="0.1" />
                        <stop offset="1" stopColor="#713bce" stopOpacity="0" />
                    </radialGradient>
                    <pattern id="holo-core-grid" width="46" height="46" patternUnits="userSpaceOnUse">
                        <path d="M46 0H0V46" fill="none" stroke="#6da3cf" strokeOpacity="0.08" strokeWidth="1" />
                        <circle cx="0" cy="0" r="1.3" fill="#6dddf5" fillOpacity="0.13" />
                    </pattern>
                </defs>

                <rect className={styles.grid} x="0" y="0" width="1600" height="900" fill="url(#holo-core-grid)" />

                <g className={styles.infrastructure}>
                    <path d="M0 230H334L408 304H630" />
                    <path d="M0 684H248L326 606H556" />
                    <path d="M356 0V102L430 176V256" />
                    <path d="M712 900V780L638 706V620" />
                    <path d="M1600 168H1476L1418 226" />
                    <path d="M1600 735H1468L1404 671" />
                </g>

                <g className={styles.infrastructureNodes}>
                    <circle cx="408" cy="304" r="4" />
                    <circle cx="326" cy="606" r="4" />
                    <rect x="422" y="168" width="16" height="16" rx="3" />
                    <rect x="630" y="698" width="16" height="16" rx="3" />
                    <circle cx="1418" cy="226" r="4" />
                    <circle cx="1404" cy="671" r="4" />
                </g>

                <g className={styles.hologramDeck}>
                    <ellipse className={styles.deckOuter} cx="1200" cy="455" rx="390" ry="164" />
                    <ellipse className={styles.deckMiddle} cx="1200" cy="455" rx="312" ry="128" />
                    <ellipse className={styles.deckInner} cx="1200" cy="455" rx="230" ry="92" />
                    <path className={styles.deckArcCyan} d="M830 508A390 164 0 0 1 1548 380" />
                    <path className={styles.deckArcViolet} d="M918 384A312 128 0 0 1 1476 514" />
                </g>

                <g className={styles.energyPulse}>
                    <circle cx="1200" cy="455" r="74" fill="url(#holo-core-energy)" />
                    <circle cx="1200" cy="455" r="102" />
                    <circle cx="1200" cy="455" r="102" />
                </g>

                <g className={styles.chipAssembly}>
                    <rect className={styles.chipShadow} x="1090" y="345" width="220" height="220" rx="30" />
                    <rect className={styles.chipFrame} x="1100" y="355" width="200" height="200" rx="24" />
                    <path className={styles.chipCorners} d="M1120 405V383H1142M1258 383H1280V405M1280 505V527H1258M1142 527H1120V505" />
                    <rect className={styles.chipDie} x="1140" y="395" width="120" height="120" rx="18" />
                    <path className={styles.dieTracks} d="M1160 425H1240M1160 455H1240M1160 485H1216M1175 410V500M1200 410V500M1225 410V475" />
                    <rect className={styles.coreWindow} x="1181" y="436" width="38" height="38" rx="7" />
                    <path className={styles.coreMark} d="M1190 455H1210M1200 445V465" />
                    <g className={styles.chipPins}>
                        {chipPins.map((pin) => (
                            <line key={`${pin.x1}-${pin.y1}-${pin.x2}-${pin.y2}`} {...pin} />
                        ))}
                    </g>
                    <path className={styles.chipScan} d="M1124 377H1276" />
                </g>

                <g className={styles.rotatingTicks}>
                    <circle cx="1200" cy="455" r="142" />
                    <circle cx="1200" cy="455" r="157" />
                </g>

                <g className={styles.leftTelemetry}>
                    <path d="M140 136H460" />
                    <path d="M140 152H378" />
                    <path d="M140 168H424" />
                    <path d="M140 184H312" />
                    <circle cx="124" cy="136" r="4" />
                    <rect x="140" y="208" width="134" height="7" rx="3.5" />
                    <rect x="140" y="226" width="86" height="7" rx="3.5" />
                    <rect x="140" y="244" width="112" height="7" rx="3.5" />
                </g>

                <g className={styles.rightTelemetry}>
                    <path d="M1392 286H1512" />
                    <path d="M1418 302H1512" />
                    <path d="M1370 620H1512" />
                    <path d="M1404 636H1512" />
                    <circle cx="1528" cy="286" r="4" />
                    <circle cx="1354" cy="620" r="4" />
                </g>

                <g className={styles.statusMarkers}>
                    <g transform="translate(840 455)">
                        <path d="M-18 0H18M0-18V18" />
                        <circle r="8" />
                    </g>
                    <g transform="translate(1460 455)">
                        <path d="M-18 0H18M0-18V18" />
                        <circle r="8" />
                    </g>
                    <g transform="translate(1200 264)">
                        <path d="M-14 0H14" />
                        <rect x="-6" y="-6" width="12" height="12" rx="2" />
                    </g>
                    <g transform="translate(1200 646)">
                        <path d="M-14 0H14" />
                        <rect x="-6" y="-6" width="12" height="12" rx="2" />
                    </g>
                </g>
            </svg>

            <div className={styles.scanBand} />
            <div className={styles.vignette} />
            <div className={styles.texture} />
        </div>
    );
}
