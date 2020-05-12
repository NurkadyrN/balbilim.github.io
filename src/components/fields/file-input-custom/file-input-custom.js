import React, {useEffect} from "react";
import {Field} from "redux-form";
import FieldContainer from "../field-container";


const FileInputCustom = ({name, change, label = 'add label', helpText, type = "file", ...props}) => {
    const fileSelect = (e) => {
        change(name, e.currentTarget.files[0])
    };
    return (
        <FieldContainer helpText={helpText} label={label}>
            <Field type='hidden' name={name} component='input'/>
            <input type={type} {...props} onChange={fileSelect}/>
        </FieldContainer>

    )
};

export default FileInputCustom;