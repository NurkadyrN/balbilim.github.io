import React from "react";

const FieldContainerQuizzes = ({label = 'add label', children,helpText}) => {
    return (
        <div className="form-group row row-field">
            <label className="col-lg-12 col-form-label"><b>{label}</b></label>
            <div className="col-lg-12">
                {children}
                {helpText && <span className='help-text'>{helpText}</span>}
            </div>
        </div>
    )
};

export default FieldContainerQuizzes;