import React from "react";

const renderField = ({input, meta: {touched, error, warning},...attr}) => (
    <div className="input-group">
        <input {...attr} {...input}/>
            {touched &&
            ((error &&<span>{error}</span>))}
    </div>


)

export default renderField;