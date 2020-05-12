import React from "react";
import {bindActionCreators} from "redux";
import {answersDetailSelect, deleteAnswers} from "../../../../../../actions/questions";
import {compose} from "../../../../../../utils";
import {withClassroomstoreService} from "../../../../../../hoc";
import {connect} from "react-redux";
import deleteNotification from "../../../../../../hooks/notifications/delete-notification";

const AnswerInEdit = ({listAnswers, deleteAnswers, answersDetailSelect, AnswersWrapped}) => {
    const deleteAnswer = (id) => {
        deleteNotification(deleteAnswers, id)
    }
    return (
        <div className='j-content'>
            <p className='margin-bottom-0'>Ответы</p>
            {listAnswers.map((answer,index) => {
                return <AnswersWrapped answer={answer} key={answer.id} index={index} answersDetailSelect={answersDetailSelect}
                                       deleteAnswer={deleteAnswer}/>
            })}
        </div>
    )
}
const mapStateToProps = ({questions: {answers: {listAnswers}}}) => {
    return {listAnswers};
};

const mapDispatchToProps = (dispatch, {swapistoreService}) => {
    return bindActionCreators({
        deleteAnswers: deleteAnswers(swapistoreService),
        answersDetailSelect,
    }, dispatch);
};

export default compose(
    withClassroomstoreService(),
    connect(mapStateToProps, mapDispatchToProps),
)(AnswerInEdit);
