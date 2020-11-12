import React from 'react';

function AlertBox(props) {

    const styles = {
        alertBox: {
            border: "1px solid rgba(158, 1, 1, 0.77)",
            borderRadius: "5px",
            color: "rgba(158, 1, 1, 0.77)",
            backgroundColor: "rgb(255, 231, 231)",
            marginLeft: "20px",
            marginRight: "20px",
            display: props.display
        },
        alertMessage: {
            padding: "10px 30px",
            display: "block"
        }
    }

    return (
        <div className="alert-box" style={styles.alertBox}>
            <span style={styles.alertMessage}>{props.message}</span>
        </div>
    )
}

export default AlertBox;