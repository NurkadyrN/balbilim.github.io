import React from "react";
import {Field} from "redux-form";
import TextField from '@material-ui/core/TextField'
import FieldContainer from "../field-container";

const renderTextField = ({
                             label,
                             input,
                             meta: { touched, invalid, error },
                             ...custom
                         }) => (
    <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
);

const InputCustom = ({label='add label',helpText, type = "text", ...props}) => {
    return (
        <FieldContainer helpText={helpText} label={label}>
                <Field type={type} {...props}  component={renderTextField}/>
        </FieldContainer>
    )
};
export {renderTextField}
export default InputCustom;