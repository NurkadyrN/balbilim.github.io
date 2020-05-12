import React from "react";
import './select-custom.css'
import DropdownList from 'react-widgets/lib/DropdownList'
import {Field} from "redux-form";
import FieldContainer from "../field-container";
import ErrorField from "../error-field/error-field";

const renderDropdownList = ({input, data,filter='contains', valueField, textField, meta}) => {
    const {touched, error, warning} = meta;
    const out = (touched && (error || warning));
    const className = out ? 'error-custom' : 'normal-custom';
    const empty = {}
    empty[valueField] = ""
    empty[textField] = "---------"
    return (
        <div>
            <DropdownList {...input}
                          data={[empty,...data]}
                          valueField={valueField}
                          textField={textField}
                          onChange={input.onChange}
                          className={className}
                          filter={filter}
                          defaultValue={""}
            />
            <ErrorField meta={meta}/></div>)
}

const SelectCustom = ({label = 'add label', name, helpText,model, ...props}) => {
    return (
        <FieldContainer name={name} model={model} helpText={helpText} label={label}>
            <Field {...props} name={name} component={renderDropdownList}/>
        </FieldContainer>
    )
};

export {renderDropdownList}
export default SelectCustom;
