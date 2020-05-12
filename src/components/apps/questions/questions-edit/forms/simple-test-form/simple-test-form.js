import React from "react";
import {compose} from "../../../../../../utils";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import SimpleTestAnswersFormRedux from "./simple-test-answers-form";
import {bindActionCreators} from "redux";
import {answersEditSubmit} from "../../../../../../actions/questions";
import {withClassroomstoreService} from "../../../../../../hoc";
import AnswerInEdit from "../../hooks/answer-in-edit";
import SimpleTestAnswers from "../../hooks/answer-in-edit/simple-test-answers";


const SimpleTestForm = ({answersEditSubmit, answer}) => {
    const answersSubmit = (value) => {
        return answersEditSubmit('AnswerSimpleTest', answer.id, value)
    }
    return (
        <div>
            <AnswerInEdit AnswersWrapped={SimpleTestAnswers}/>
            <SimpleTestAnswersFormRedux onSubmit={answersSubmit}/>
        </div>
    )
};


const mapStateToProps = ({questions: {answers: {answer}}}) => {
    return {answer};
};

const mapDispatchToProps = (dispatch, {swapistoreService}) => {
    return bindActionCreators({
        answersEditSubmit: answersEditSubmit(swapistoreService)
    }, dispatch);
};

export default compose(
    withClassroomstoreService(),
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(SimpleTestForm);
