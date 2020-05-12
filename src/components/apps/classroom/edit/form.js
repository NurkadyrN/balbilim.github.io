import React, {useEffect} from "react";
import {Field, reduxForm} from "redux-form";
import {compose} from "../../../../utils";
import {connect} from "react-redux";
import setInitialValueRedux from "../../../../utils/set-initial-value-redux";
import {withRouter} from "react-router-dom";
import FieldContainerQuizzes from "../../quizzes/quizzes-edit/hooks/field-container-quizzes";
import {renderTextField} from "../../../fields/input-custom/input-custom";



const ClassroomForm = ({handleSubmit, id, location: {state: {value} = {}}, object, change}) => {
    useEffect(() => {
        if (value) {
            setInitialValueRedux(value, change)
        } else if (id) {
            setInitialValueRedux(object, change)
        }
    }, []);
    return (
        <form onSubmit={handleSubmit} method="post" className="j-pro">
            <div className="j-content">
                <FieldContainerQuizzes label='Аталышы'>
                    <Field type='text' name='title' component={renderTextField}/>
                </FieldContainerQuizzes>

            </div>
            <div className="j-footer">
                <button type="submit" className="btn btn-primary">Сактоо
                </button>
            </div>
        </form>
    )
};


const validate = (values) => {
    const errors = {}
    if (!values['title']) {
        errors['title'] = 'Required'
    }
    return errors
};
const ClassroomFormRedux = reduxForm({
    validate,
    form: 'ClassRoom',
})(ClassroomForm);

const mapStateToProps = ({defaults: {defaultDetail: {object}}}) => {
    return {object};
};
export default compose(
    connect(mapStateToProps),
    withRouter,
)(ClassroomFormRedux);


