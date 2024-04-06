

const DotsIcon = () => {
    return (
        <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_109_325"  maskUnits="userSpaceOnUse" x="0" y="0" width="4" height="4">
            <circle cx="2" cy="2" r="2" fill="white"/>
            </mask>
            <g mask="url(#mask0_109_325)">
            <rect width="2" height="4" fill="#00AAA1"/>
            </g>
            <mask id="mask1_109_325"  maskUnits="userSpaceOnUse" x="0" y="0" width="4" height="4">
            <circle cx="2" cy="2" r="2" transform="rotate(-180 2 2)" fill="#222222"/>
            </mask>
            <g mask="url(#mask1_109_325)">
            <rect x="4" y="4" width="2" height="4" transform="rotate(-180 4 4)" fill="#00AAA1"/>
            </g>
        </svg>
    )
}