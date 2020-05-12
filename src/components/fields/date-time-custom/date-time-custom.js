import React from "react";
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import {Field} from "redux-form";
import FieldContainer from "../field-container";
import ErrorField from "../error-field/error-field";

const renderDateTimePicker = ({input: {onChange, value}, showTime, meta}) => {
    const {touched, error, warning} = meta;
    const out = (touched && (error || warning));
    const className = out ? 'error-custom' : 'normal-custom';
    return (<div>
        <DateTimePicker
            onChange={onChange}
            format="DD-MM-YYYY HH:mm:ss"
            time={showTime}
            value={!value ? null : new Date(value)}
            className={className}
        />
        <ErrorField meta={meta}/>
    </div>)
};

const DateTimeCustom = ({label = 'add label', helpText, ...props}) => {
    return (
        <FieldContainer helpText={helpText} label={label}>
            <Field {...props} component={renderDateTimePicker}/>
        </FieldContainer>

    )
};

export {renderDateTimePicker}
export default DateTimeCustom;
