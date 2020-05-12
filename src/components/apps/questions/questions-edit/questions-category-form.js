import React, {useEffect, useRef} from "react";
import './style.css'
import {bindActionCreators} from "redux";
import {addModelNameOfQuestions, questionsEditSubmit} from "../../../../actions/questions/detail";
import {compose} from "../../../../utils";
import {withClassroomstoreService} from "../../../../hoc";
import {connect} from "react-redux";
import MatchingFormRedux from "./forms/matching-form";
import SimpleTestFormRedux from "./forms/simple-test-form";
import DropdownList from "react-widgets/lib/DropdownList";
import {MODEL_NAME_FORMS} from "../../../../settings/setting";
import {answersListLoaded} from "../../../../actions/questions/answers";
import QuestionsFormRedux from "./forms/questions-form/questions-form";
import scrollToRef from "../../../../utils/scroll-to-ref";


const Forms = ({modelName = ''}) => {
    switch (modelName) {
        case 'SimpleTest': {
            return <SimpleTestFormRedux/>
        }
        case 'Matching': {
            return <MatchingFormRedux/>
        }
        default: {
            return null
        }
    }
}

const QuestionsCategoryForm = ({questionsEditSubmit,id,addModelNameOfQuestions, modelName, listAnswers = [], content = {}, quizzesId}) => {
    const questionsSubmit = (value) => {
        value.quizzes = quizzesId;
        if (listAnswers.length > 0) {
            value.answers = [...listAnswers.map(({id}) => id)]
        }
        return questionsEditSubmit(modelName, content.id, value)
    }
    const questionForm = useRef(null)
    useEffect(()=>{
        if (id){
            scrollToRef(questionForm)
        }
    },[id])
    const setModelNameForm = (value) => {
        addModelNameOfQuestions(value.modelName)
    }
    return (
        <div className="card-block">
            <div className="j-wrapper">
                <div ref={questionForm} className="j-pro questions-form">
                    <div className='module-name-select j-content'>
                        <DropdownList
                            data={MODEL_NAME_FORMS}
                            valueField={'modelName'}
                            textField={'label'}
                            onChange={setModelNameForm}
                            defaultValue={modelName}
                        />
                    </div>
                    <QuestionsFormRedux onSubmit={questionsSubmit} />
                    <Forms modelName={modelName}/>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = ({questions: {questionsDetail: {object: {content,id}, modelName}, answers: {listAnswers}}}) => {
    return {content, modelName, listAnswers,id};
};
const mapDispatchToProps = (dispatch, {swapistoreService}) => {
    return bindActionCreators({
        questionsEditSubmit: questionsEditSubmit(swapistoreService),
        addModelNameOfQuestions,
        answersListLoaded
    }, dispatch);
};

export default compose(
    withClassroomstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(QuestionsCategoryForm);
