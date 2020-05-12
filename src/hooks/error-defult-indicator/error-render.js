import React from "react";

const ErrorRender = ({status, message}) => {
    return (
        <div className="error-indicator">
            <span className="boom">BOOM!</span>
            <span>{status} - {message}</span>
            <span>уходи отсюда</span>
        </div>
    );
}

export default ErrorRender;
