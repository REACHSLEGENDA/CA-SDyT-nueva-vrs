import styles from './HexGridBackground.module.css';

export function HexGridBackground() {
    return (
        <div className={styles.background} aria-hidden="true" data-background="hex-grid">
            <div className={styles.ambient} />

            <svg
                className={styles.mesh}
                viewBox="0 0 1600 900"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
            >
                <defs>
                    <pattern
                        id="hex-grid-lattice"
                        width="180"
                        height="104"
                        patternUnits="userSpaceOnUse"
                    >
                        <path className={styles.latticeCell} d="M0 52L30 0H90L120 52L90 104H30Z" />
                        <path className={styles.latticeCell} d="M90 0L120-52H180L210 0L180 52H120Z" />
                        <path className={styles.latticeCell} d="M90 104L120 52H180L210 104L180 156H120Z" />
                    </pattern>

                    <linearGradient id="hex-grid-active-cyan" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#00d9ff" stopOpacity="0.2" />
                        <stop offset="0.58" stopColor="#247ef5" stopOpacity="0.07" />
                        <stop offset="1" stopColor="#020713" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="hex-grid-active-violet" x1="1" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#b260ff" stopOpacity="0.18" />
                        <stop offset="0.62" stopColor="#6635c5" stopOpacity="0.06" />
                        <stop offset="1" stopColor="#020713" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="hex-grid-route" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="#00d9ff" stopOpacity="0" />
                        <stop offset="0.45" stopColor="#00d9ff" stopOpacity="0.75" />
                        <stop offset="0.7" stopColor="#8b5cf6" stopOpacity="0.62" />
                        <stop offset="1" stopColor="#8b5cf6" stopOpacity="0" />
                    </linearGradient>
                    <radialGradient id="hex-grid-core" cx="50%" cy="50%" r="50%">
                        <stop offset="0" stopColor="#b9f6ff" />
                        <stop offset="0.3" stopColor="#00d9ff" />
                        <stop offset="1" stopColor="#00d9ff" stopOpacity="0" />
                    </radialGradient>
                </defs>

                <rect className={styles.lattice} width="1600" height="900" fill="url(#hex-grid-lattice)" />

                <g className={styles.largeCells}>
                    <path d="M1120 52L1192 10H1276L1348 52V136L1276 178H1192L1120 136Z" />
                    <path d="M1155 572L1235 526H1327L1407 572V664L1327 710H1235L1155 664Z" />
                    <path d="M123 615L203 569H295L375 615V707L295 753H203L123 707Z" />
                </g>

                <g className={styles.dataRoutes}>
                    <path d="M-80 676H178L238 624H508L598 520H870L960 416H1248L1368 312H1680" />
                    <path d="M-50 208H300L390 312H660L750 416H960L1050 520H1320L1410 624H1650" />
                    <path d="M420-40V156L510 208V416L600 468V728L690 780V940" />
                </g>

                <g className={styles.activeCells}>
                    <g>
                        <path
                            className={styles.activeCyan}
                            d="M178 260L208 208H268L298 260L268 312H208Z"
                        />
                        <circle cx="238" cy="260" r="17" />
                        <circle className={styles.core} cx="238" cy="260" r="5" />
                        <path className={styles.glyph} d="M221 260H231M245 260H255M238 243V253M238 267V277" />
                    </g>
                    <g>
                        <path
                            className={styles.activeViolet}
                            d="M598 520L628 468H688L718 520L688 572H628Z"
                        />
                        <circle cx="658" cy="520" r="17" />
                        <rect className={styles.violetCore} x="653" y="515" width="10" height="10" rx="2" />
                        <path className={styles.glyph} d="M641 520H651M665 520H675M658 503V513M658 527V537" />
                    </g>
                    <g>
                        <path
                            className={styles.activeCyan}
                            d="M928 416L958 364H1018L1048 416L1018 468H958Z"
                        />
                        <circle cx="988" cy="416" r="17" />
                        <circle className={styles.core} cx="988" cy="416" r="5" />
                        <path className={styles.glyph} d="M971 416H981M995 416H1005M988 399V409M988 423V433" />
                    </g>
                    <g>
                        <path
                            className={styles.activeViolet}
                            d="M1258 624L1288 572H1348L1378 624L1348 676H1288Z"
                        />
                        <circle cx="1318" cy="624" r="17" />
                        <rect className={styles.violetCore} x="1313" y="619" width="10" height="10" rx="2" />
                        <path className={styles.glyph} d="M1301 624H1311M1325 624H1335M1318 607V617M1318 631V641" />
                    </g>
                    <g>
                        <path
                            className={styles.activeCyan}
                            d="M1243 260L1273 208H1333L1363 260L1333 312H1273Z"
                        />
                        <circle cx="1303" cy="260" r="17" />
                        <circle className={styles.core} cx="1303" cy="260" r="5" />
                        <path className={styles.glyph} d="M1286 260H1296M1310 260H1320M1303 243V253M1303 267V277" />
                    </g>
                </g>

                <g className={styles.waveHub} transform="translate(988 416)">
                    <path className={styles.waveOne} d="M-92 0L-46-80H46L92 0L46 80H-46Z" />
                    <path className={styles.waveTwo} d="M-92 0L-46-80H46L92 0L46 80H-46Z" />
                </g>
                <g className={styles.waveHubViolet} transform="translate(1318 624)">
                    <path className={styles.waveOne} d="M-92 0L-46-80H46L92 0L46 80H-46Z" />
                    <path className={styles.waveTwo} d="M-92 0L-46-80H46L92 0L46 80H-46Z" />
                </g>

                <g className={styles.telemetry}>
                    <path d="M98 128H240L264 152H360" />
                    <path d="M1240 780H1395L1420 756H1515" />
                    <circle cx="82" cy="128" r="4" />
                    <circle cx="1531" cy="756" r="4" />
                    <path d="M98 144H198M1418 772H1515" />
                </g>
            </svg>

            <div className={styles.scanBand} />
            <div className={styles.vignette} />
            <div className={styles.grain} />
        </div>
    );
}
