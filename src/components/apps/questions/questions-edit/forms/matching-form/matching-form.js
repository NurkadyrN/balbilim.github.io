import React from "react";
import {compose} from "../../../../../../utils";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {answersEditSubmit} from "../../../../../../actions/questions";
import {withClassroomstoreService} from "../../../../../../hoc";
import MatchingAnswersFormRedux from "./matching-answers-form";
import AnswerInEdit from "../../hooks/answer-in-edit";
import MatchingAnswers from "../../hooks/answer-in-edit/matching-answers";


const MatchingForm = ({answersEditSubmit, answer}) => {
    const answersSubmit = (value) => {
        return answersEditSubmit('AnswerMatching', answer.id, value)
    }
    return (
        <div>
            <AnswerInEdit AnswersWrapped={MatchingAnswers}/>
            <MatchingAnswersFormRedux onSubmit={answersSubmit}/>
        </div>
    )
};


const mapStateToProps = ({questions: {answers: {answer}}}) => {
    return {answer};
};

const mapDispatchToProps = (dispatch, {swapistoreService}) => {
    return bindActionCreators({
        answersEditSubmit: answersEditSubmit(swapistoreService),
    }, dispatch);
};
export default compose(
    withClassroomstoreService(),
    connect(mapStateToProps, mapDispatchToProps),
)(MatchingForm);
