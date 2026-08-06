import styles from "./DataHighwaysBackground.module.css";

export function DataHighwaysBackground() {
    return (
        <div className={styles.background} aria-hidden="true" data-background="data-highways">
            <div className={styles.ambient} />

            <svg
                className={styles.blueprint}
                viewBox="0 0 1600 900"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
            >
                <defs>
                    <linearGradient id="data-highway-gradient" x1="0" y1="1" x2="1" y2="0">
                        <stop offset="0" stopColor="#00CFFF" stopOpacity="0.1" />
                        <stop offset="0.34" stopColor="#00CFFF" stopOpacity="0.72" />
                        <stop offset="0.68" stopColor="#4A6CF7" stopOpacity="0.68" />
                        <stop offset="1" stopColor="#9A55E8" stopOpacity="0.14" />
                    </linearGradient>
                </defs>

                <g className={styles.laneBeds}>
                    <path d="M-120 760H120L260 620H520L680 460H980L1190 250H1720" />
                    <path d="M-100 230H240L380 370H690L820 500H1120L1390 770H1700" />
                    <path d="M260 620L380 740H720L900 560H1250L1420 390H1700" />
                    <path d="M240 230L430 40H790L970 220H1340L1510 50" />
                    <path d="M680 460L810 330H1050L1190 250" />
                    <path d="M820 500L700 620H520" />
                </g>

                <g className={styles.lanes} stroke="url(#data-highway-gradient)">
                    <path d="M-120 760H120L260 620H520L680 460H980L1190 250H1720" />
                    <path d="M-100 230H240L380 370H690L820 500H1120L1390 770H1700" />
                    <path d="M260 620L380 740H720L900 560H1250L1420 390H1700" />
                    <path d="M240 230L430 40H790L970 220H1340L1510 50" />
                    <path d="M680 460L810 330H1050L1190 250" />
                    <path d="M820 500L700 620H520" />
                </g>

                <g className={styles.laneMarkers}>
                    <path d="M-60 746H112L252 606H512" />
                    <path d="M390 384H682L812 514H1108" />
                    <path d="M392 726H712L892 546H1242" />
                    <path d="M442 54H782L962 234H1328" />
                </g>

                <g className={styles.signals}>
                    <path d="M-120 760H120L260 620H520L680 460H980L1190 250H1720" />
                    <path d="M-100 230H240L380 370H690L820 500H1120L1390 770H1700" />
                    <path d="M260 620L380 740H720L900 560H1250L1420 390H1700" />
                    <path d="M240 230L430 40H790L970 220H1340L1510 50" />
                </g>

                <g className={styles.junctions}>
                    <g transform="translate(260 620)">
                        <rect className={styles.junctionFrame} x="-15" y="-15" width="30" height="30" rx="5" />
                        <rect className={styles.junctionCore} x="-4" y="-4" width="8" height="8" rx="2" />
                    </g>
                    <g transform="translate(680 460)">
                        <rect className={styles.junctionFrame} x="-20" y="-20" width="40" height="40" rx="7" />
                        <circle className={styles.junctionCore} r="6" />
                    </g>
                    <g transform="translate(820 500)">
                        <rect className={styles.junctionFramePurple} x="-18" y="-18" width="36" height="36" rx="7" />
                        <rect className={styles.junctionCorePurple} x="-5" y="-5" width="10" height="10" rx="2" />
                    </g>
                    <g transform="translate(900 560)">
                        <circle className={styles.junctionFrame} r="17" />
                        <circle className={styles.junctionCore} r="5" />
                    </g>
                    <g transform="translate(1190 250)">
                        <rect className={styles.junctionFramePurple} x="-21" y="-21" width="42" height="42" rx="8" />
                        <circle className={styles.junctionCorePurple} r="6" />
                    </g>
                    <g transform="translate(1390 770)">
                        <circle className={styles.junctionFrame} r="14" />
                        <circle className={styles.junctionCore} r="4" />
                    </g>
                </g>

                <g className={styles.terminals}>
                    <path d="M165 665h72M165 676h46M1010 293h104M1038 304h76M1264 648h118M1264 659h72" />
                    <circle cx="151" cy="665" r="4" />
                    <circle cx="1128" cy="293" r="4" />
                    <circle cx="1396" cy="648" r="4" />
                </g>

                <g className={styles.dataBlocks}>
                    <rect x="470" y="598" width="38" height="10" rx="3" />
                    <rect x="1010" y="444" width="54" height="10" rx="3" />
                    <rect x="1260" y="748" width="42" height="10" rx="3" />
                    <rect x="865" y="198" width="46" height="10" rx="3" />
                </g>
            </svg>

            <div className={styles.flowGlow} />
            <div className={styles.vignette} />
        </div>
    );
}
