import styles from './CyberScannerBackground.module.css';

export function CyberScannerBackground() {
    return (
        <div className={styles.background} aria-hidden="true" data-background="cyber-scanner">
            <div className={styles.grid} />

            <svg
                className={styles.interface}
                viewBox="0 0 1600 900"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
            >
                <defs>
                    <linearGradient id="cyber-scanner-spectrum" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#65eeff" />
                        <stop offset="0.55" stopColor="#00bfe8" />
                        <stop offset="1" stopColor="#a56cff" />
                    </linearGradient>
                    <linearGradient id="cyber-scanner-fade" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="#20dfff" stopOpacity="0" />
                        <stop offset="0.5" stopColor="#20dfff" stopOpacity="0.75" />
                        <stop offset="1" stopColor="#20dfff" stopOpacity="0" />
                    </linearGradient>
                    <radialGradient id="cyber-scanner-sweep" cx="0" cy="1" r="1">
                        <stop offset="0" stopColor="#2ee8ff" stopOpacity="0.2" />
                        <stop offset="0.68" stopColor="#20dfff" stopOpacity="0.08" />
                        <stop offset="1" stopColor="#20dfff" stopOpacity="0" />
                    </radialGradient>
                </defs>

                <g className={styles.frameCorners}>
                    <path d="M118 192V108H202M1398 108H1482V192M118 708V792H202M1398 792H1482V708" />
                    <path d="M96 274V374M96 526V626M1504 274V374M1504 526V626" />
                </g>

                <g className={styles.analysisZones}>
                    <path d="M190 246H474L534 306V488L474 548H190L142 500V294Z" />
                    <path d="M1120 174H1372L1430 232V354L1372 412H1120L1070 362V224Z" />
                    <path d="M1050 590H1324L1384 650V756H1050L994 700V646Z" />
                </g>

                <g className={styles.zoneDetails}>
                    <path d="M170 273H328M170 292H274M1098 202H1260M1098 221H1190M1022 674H1162M1022 695H1222" />
                    <path className={styles.zoneBars} d="M170 510H250M260 510H292M1098 376H1168M1178 376H1246M1030 725H1128M1138 725H1170" />
                </g>

                <g className={styles.radarBase}>
                    <circle cx="788" cy="453" r="310" />
                    <circle cx="788" cy="453" r="232" />
                    <circle cx="788" cy="453" r="154" />
                    <circle cx="788" cy="453" r="77" />
                    <path d="M478 453H1098M788 143V763" />
                    <path d="M569 234L1007 672M1007 234L569 672" />
                    <path className={styles.radarTicks} d="M788 127V151M788 755V779M462 453H486M1090 453H1114M552 217L570 235M1006 671L1024 689M552 689L570 671M1006 235L1024 217" />
                </g>

                <g className={styles.sweep}>
                    <path d="M788 453L788 143A310 310 0 0 1 1098 453Z" fill="url(#cyber-scanner-sweep)" />
                    <path className={styles.sweepEdge} d="M788 453V143" />
                </g>

                <g className={styles.crosshair}>
                    <circle cx="788" cy="453" r="24" />
                    <path d="M788 413V432M788 474V493M748 453H767M809 453H828" />
                    <rect x="779" y="444" width="18" height="18" rx="3" />
                </g>

                <g className={styles.detectedNodes}>
                    <g transform="translate(662 325)">
                        <circle className={styles.nodeRing} r="19" />
                        <circle className={styles.nodeCore} r="4" />
                        <path d="M-31 0H-23M23 0H31M0-31V-23M0 23V31" />
                    </g>
                    <g transform="translate(938 375)">
                        <circle className={styles.nodeRing} r="14" />
                        <circle className={styles.nodeCore} r="3.5" />
                        <path d="M-25 0H-19M19 0H25" />
                    </g>
                    <g transform="translate(882 603)">
                        <rect className={styles.nodeRing} x="-14" y="-14" width="28" height="28" rx="5" />
                        <circle className={styles.nodeCoreViolet} r="4" />
                        <path d="M-25 0H-18M18 0H25M0-25V-18M0 18V25" />
                    </g>
                    <g transform="translate(585 540)">
                        <circle className={styles.nodeRingMuted} r="10" />
                        <circle className={styles.nodeCore} r="3" />
                    </g>
                </g>

                <g className={styles.connections}>
                    <path d="M662 325L788 453L938 375" />
                    <path d="M788 453L882 603M788 453L585 540" />
                    <path className={styles.packet} d="M662 325L788 453L938 375" />
                    <path className={styles.packetViolet} d="M788 453L882 603" />
                </g>

                <g className={styles.telemetry}>
                    <g transform="translate(154 655)">
                        <circle cx="5" cy="5" r="5" />
                        <path d="M22 5H192M22 19H148M22 33H174" />
                    </g>
                    <g transform="translate(1254 474)">
                        <rect width="10" height="10" rx="2" />
                        <path d="M28 5H174M28 19H132M28 33H158" />
                    </g>
                </g>

                <path className={styles.statusLine} d="M308 108H612M964 108H1268" />
                <path className={styles.dataTrace} d="M308 108H612" />
                <path className={styles.dataTraceViolet} d="M964 108H1268" />
            </svg>

            <div className={styles.verticalScan} />
            <div className={styles.vignette} />
        </div>
    );
}
