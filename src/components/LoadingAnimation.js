import React from 'react';

function LoadingAnimation() {

    const radius = "6";
    const circleColor = "#fd0054";

    const styles = {
        loading: {
            "width": "100%",
            "height": "250px",
        },
        svg: {
            "backgroundColor": "transparent",
            "height": "250px",
            "width": "auto",
            "display": "block",
            "margin": "40px auto"
            // "border": "1px solid black"
        },
        // loadingTextDiv: {
            
        // },
        loadingText: {
            "display": "inline-flex"
        }
    }

    return (
        <div className="loading" style={styles.loading}>
            <svg style={styles.svg} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" 
                    d="M100,200 S50 120, 150 100 S210 190, 200 200 S150 250, 100 200" />

                <circle r={radius} fill={circleColor}>
                    <animateMotion dur="2s" repeatCount="indefinite" rotate="auto-reverse"
                        path="M100,200 S50 120, 150 100 S210 190, 200 200 S150 250, 100 200" />
                </circle>
                <circle r={radius} fill={circleColor}>
                    <animateMotion dur="1s" repeatCount="indefinite"
                        path="M100,200 S50 120, 150 100 S210 190, 200 200 S150 250, 100 200" />
                </circle>
                <circle r={radius} fill={circleColor}>
                    <animateMotion dur="1.5s" repeatCount="indefinite"
                        path="M100,200 S50 120, 150 100 S210 190, 200 200 S150 250, 100 200" />
                </circle>
            </svg>
            {/* <div className="loading-text" style={styles.loadingTextDiv}>
                <h2 style={styles.loadingText}>Loading...</h2>
            </div> */}
        </div>
    )
}

export default LoadingAnimation;