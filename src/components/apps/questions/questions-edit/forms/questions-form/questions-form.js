import {CKEditorCustom} from "../../../../../fields";
import React, {useEffect} from "react";
import {getFormValues, reduxForm} from "redux-form";
import {answersListLoaded} from "../../../../../../actions/questions/answers";
import {compose} from "../../../../../../utils";
import {withClassroomstoreService} from "../../../../../../hoc";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import setInitialValueRedux from "../../../../../../utils/set-initial-value-redux";

const QuestionsForm = ({change, id, handleSubmit, explanation, answersListLoaded, helpText, content = {}, formValues = {}}) => {
    useEffect(() => {
        const {answers = [], ...values} = content;
        answersListLoaded(answers)
        values['explanation'] = explanation||' '
        setInitialValueRedux(values, change)
    }, [id]);
    return (
        <form onSubmit={handleSubmit}>
            <div className="j-content">
                {helpText && <span className='help-text'>{helpText}</span>}
                <CKEditorCustom change={change} data={formValues['body']} name='body'/>
                <button type="button" className="btn btn-primary" data-toggle="collapse" data-target="#explanation">
                    Тушундуруу
                </button>
                <div id="explanation" className="collapse show">
                    <br/>
                    <CKEditorCustom change={change} data={formValues['explanation']} name='explanation'/>
                </div>
                <button type="submit" className="btn questions-submit btn-primary">Сактоо
                </button>
            </div>
        </form>
    )
}
const QuestionsFormRedux = reduxForm({
    form: 'QuestionsForm',
})(QuestionsForm);

const mapStateToProps = ({questions: {questionsDetail: {object: {content, explanation, id}}}, ...state}) => {
    const formValues = getFormValues('QuestionsForm')(state);
    return {formValues, explanation, content, id};
};


export default compose(
    withClassroomstoreService(),
    connect(mapStateToProps, {answersListLoaded}),
    withRouter,
)(QuestionsFormRedux);
