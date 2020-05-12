import React from "react";
import {Field} from "redux-form";
import Multiselect from 'react-widgets/lib/Multiselect'
import FieldContainer from "../field-container";
import ErrorField from "../error-field/error-field";

const renderMultiselect = ({input, data, valueField, textField, meta}) => {
    const {touched, error, warning} = meta;
    const out = (touched && (error || warning));
    const className = out?'error-custom':'normal-custom';
    return (
        <div>
            <Multiselect {...input}
                         onBlur={() => input.onBlur()}
                         value={input.value || []} // requires value to be an array
                         data={data}
                         valueField={valueField}
                         textField={textField}
                         className={className}
            />
            <ErrorField meta={meta}/>
        </div>);
}
const MultiSelectCustom = ({label = 'add label', name, helpText,formValues,model, ...props}) => {
    return (
        <FieldContainer name={name} model={model} formValues={formValues} helpText={helpText} label={label}>
            <Field {...props} name={name}  component={renderMultiselect}/>
        </FieldContainer>
    )
};

export default MultiSelectCustom;
