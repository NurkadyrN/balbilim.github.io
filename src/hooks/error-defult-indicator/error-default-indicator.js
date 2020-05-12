import React from 'react';
import ErrorRender from "./error-render";

const ErrorDefaultIndicator = ({error, children}) => {
    if (error) {
        return <ErrorRender {...error}/>;
    }
    return children
};

export default ErrorDefaultIndicator;
