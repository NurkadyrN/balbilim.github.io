import React from "react";
import {bindActionCreators} from "redux";
import {deleteQuestions, questionsDetailLoaded} from "../../../../../actions/questions/detail";
import {compose} from "../../../../../utils";
import {withClassroomstoreService} from "../../../../../hoc";
import {connect} from "react-redux";
import deleteNotification from "../../../../../hooks/notifications/delete-notification";


const QuestionsActions = ({deleteQuestions, questionsDetailLoaded, question}) => {
    const deleteQuestion = (id) => {
        deleteNotification(deleteQuestions, id)
    }
    return (
        <div className='questions-actions'>
                        <span className="icofont icofont-ui-edit" onClick={() => {
                            questionsDetailLoaded(question)
                        }}/>
            <span className="icofont icofont-ui-delete" onClick={() => {
                deleteQuestion(question.id)
            }}/>
        </div>
    )
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch, {swapistoreService}) => {
    return bindActionCreators({
        deleteQuestions: deleteQuestions(swapistoreService),
        questionsDetailLoaded,
    }, dispatch);
};


export default compose(
    withClassroomstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(QuestionsActions);
