import React from "react";

const ErrorField = ({meta:{touched, error, warning}}) => {
    const out = (touched && ((error && <span className='MuiFormHelperText-root Mui-error'>{error}</span>) ||
            (warning && <span>{warning}</span>)));
    return out?out:null;

};

export default ErrorField;