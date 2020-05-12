import React from "react";
import {connect} from "react-redux";
import {compose} from "../../../../../utils";
import {bindActionCreators} from "redux";
import {MODEL_PARAMS} from "../../../../../settings/setting";
import QuestionsList from "../../../questions/questions-list";
import {withClassroomstoreService} from "../../../../../hoc";
import {withRouter} from "react-router-dom";
import QuizzesFormRedux from "../form/quizzes-form";
import QuestionsCategoryForm from "../../../questions/questions-edit/questions-category-form";
import {defaultEditSubmit} from "../../../../../actions/default";


const QuizzesEditRender = ({defaultEditSubmit, match, object, options, history, quizId}) => {
    const moduleName = 'Quizzes'
    const submit = (value) => {
        return defaultEditSubmit(moduleName, quizId, value, history, match)
    };

    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="card quiz-edit-card">
                    <div className="card-header">
                        <h5>{MODEL_PARAMS[moduleName].label}</h5>
                    </div>
                    <div className="card-block">
                        <div className="j-wrapper">
                            <QuizzesFormRedux id={quizId} onSubmit={submit} options={options}/>
                        </div>
                    </div>
                    {quizId && <QuestionsList object={object}/>}
                    {quizId && <QuestionsCategoryForm quizzesId={quizId}/>}
                </div>
            </div>
        </div>
    )
};
const mapStateToProps = ({ quizzes: {quizzesDetail: {object}},}) => {
    return {object};
};
const mapDispatchToProps = (dispatch, {swapistoreService}) => {
    return bindActionCreators({
        defaultEditSubmit: defaultEditSubmit(swapistoreService),
    }, dispatch);
};

export default compose(
    withClassroomstoreService(),
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(QuizzesEditRender);
