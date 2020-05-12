import React from "react";
import {Field} from "redux-form";
import './boolen-custom.css';
import {Checkbox} from '@material-ui/core';
import FieldContainer from "../field-container";
import ErrorField from "../error-field/error-field";

const renderCheckbox = ({input,className='', label, color = "primary",meta}) => {
    meta.touched = meta.dirty;
    return (<div className={className}>
        <Checkbox label={label}
                  checked={input.value ? true : false}
                  color={color}
                  onChange={input.onChange}
        />
        <ErrorField meta={meta}/>
    </div>)

};

const BooleanCustom = ({label = 'add label', helpText, component = 'input', type = "checkbox", ...props}) => {
    return (
        <FieldContainer helpText={helpText} label={label}>
            <Field {...props} component={renderCheckbox} label="Employed"/>
        </FieldContainer>
    )
};
export {renderCheckbox}
export default BooleanCustom;
