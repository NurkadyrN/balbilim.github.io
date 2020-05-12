import React, {useEffect} from "react";
import './default-form.css';
import {
    InputCustom,
    MultiSelectCustom,
    SelectCustom,
    DateTimeCustom,
    BooleanCustom,
    FileInputCustom, CKEditorCustom
} from "../../fields";
import 'react-widgets/dist/css/react-widgets.css'
import {MODEL_PARAMS} from "../../../settings/setting";
import moment from 'moment'
import momentLocalizer from 'react-widgets-moment'
import {getFormValues, reduxForm} from "redux-form";
import {compose} from "../../../utils";
import {connect} from "react-redux";
import setInitialValueRedux from "../../../utils/set-initial-value-redux";
import {withRouter} from "react-router-dom";
import FieldContainerQuizzes from "../../apps/quizzes/quizzes-edit/hooks/field-container-quizzes";


momentLocalizer(moment);


const DefaultForm = ({options, handleSubmit, id, location: {state: {value} = {}}, object, change, formValues = {}}) => {
    useEffect(() => {
        if (value) {
            setInitialValueRedux(value, change)
        } else if (id) {
            setInitialValueRedux(object, change)
        }
    }, []);
    const items = Object.keys(options).map((key, index) => {
        const field = options[key];
        if (field['read_only']) {
            return null;
        }

        if (key === 'explanation') {
            return (
                <FieldContainerQuizzes key={key} label={field.label}>
                    <CKEditorCustom change={change} data={formValues['explanation']} name='explanation'/>
                </FieldContainerQuizzes>
            )
        }

        switch (field.type) {
            case 'string':
                return (
                    <div key={key}>
                        <InputCustom name={key} label={field.label} helpText={field.help_text}/>
                        <hr/>
                    </div>
                );
            case 'integer':
                return (
                    <div key={key}>
                        <InputCustom helpText={field.help_text} type='number' name={key} label={field.label}/>
                        <hr/>
                    </div>
                );
            case 'email':
                return (
                    <div key={key}>
                        <InputCustom helpText={field.help_text} type='email' name={key} label={field.label}/>
                        <hr/>
                    </div>
                );
            case 'many_related': {
                const model = MODEL_PARAMS[field.model] ? field.model : undefined
                return (
                    <div key={key}>
                        <MultiSelectCustom model={model} formValues={formValues} helpText={field.help_text}
                                           valueField="value"
                                           textField="display_name" data={field.choices} name={key}
                                           label={field.label}/>
                        <hr/>
                    </div>
                );
            }
            case 'related': {
                const model = MODEL_PARAMS[field.model] ? field.model : undefined
                return (
                    <div key={key}>
                        <SelectCustom model={model} formValues={formValues} helpText={field.help_text}
                                      valueField="value"
                                      textField="display_name" data={field.choices} name={key}
                                      label={field.label}/>
                        <hr/>
                    </div>
                );
            }
            case 'datetime':
                return (
                    <div key={key}>
                        <DateTimeCustom helpText={field.help_text} name={key} label={field.label}/>
                        <hr/>
                    </div>
                );
            case 'boolean':
                return (
                    <div key={key}>
                        <BooleanCustom color="primary" helpText={field.help_text} type='checkbox' name={key}
                                       label={field.label}/>
                        <hr/>
                    </div>
                );
            case 'image upload':
                return (
                    <div key={key}>
                        <FileInputCustom change={change} helpText={field.help_text} name={key} label={field.label}/>
                        <hr/>
                    </div>
                );
            default:
                return (
                    <div key={key}>
                        <InputCustom helpText={field.help_text} name={key} label={field.label}/>
                        <hr/>
                    </div>
                );
        }

    });
    return (
        <form onSubmit={handleSubmit} method="post" className="j-pro">
            <div className="j-content">
                {items.map((item) => {
                    return item
                })}

            </div>
            <div className="j-footer">
                <button type="submit" className="btn btn-primary">Сактоо
                </button>
            </div>
        </form>
    )
};


const defaultFormRedux = (nameForm, options, validateFunction = (values) => ({})) => {
    const validate = (values) => {
        const errors = validateFunction(values);
        Object.keys(options).map((key) => {
                const field = options[key];
                if (!field.read_only) {
                    if (field.required) {
                        if (!values[key]) {
                            errors[key] = 'Required';
                        }
                    }
                }
            }
        );
        return errors
    };
    const FormRedux = reduxForm({
        validate,
        form: nameForm,
    })(DefaultForm);

    const mapStateToProps = (state) => {
        const formValues = getFormValues(nameForm)(state);
        const {defaults: {defaultDetail: {object}}} = state;
        return {formValues, object};
    };
    return compose(
        connect(mapStateToProps),
        withRouter,
    )(FormRedux);
};

export default defaultFormRedux;
