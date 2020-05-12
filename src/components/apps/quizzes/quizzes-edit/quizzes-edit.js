import React, {useEffect} from "react";
import {compose} from "../../../../utils";
import './quizzes-edit.css';
import {withClassroomstoreService} from "../../../../hoc";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getDefaultOptions} from "../../../../actions/default";
import {withRouter} from "react-router-dom";
import QuizzesEditRender from "./quizzes-edit-render/quizzes-edit-render";
import AfterLoading from "../../../../hooks/after-loading";
import ErrorDefaultIndicator from "../../../../hooks/error-defult-indicator/error-default-indicator";


const QuizzesEditPage = ({match: {params: {quizId}}, options, error, model, loading, getDefaultOptions}) => {
    const moduleName = 'Quizzes';
    useEffect(() => {
        getDefaultOptions(moduleName);
    }, []);
    return (
        <ErrorDefaultIndicator error={error}>
            <AfterLoading loading={loading || model !== moduleName}>
                <QuizzesEditRender options={options} quizId={quizId}/>
            </AfterLoading>
        </ErrorDefaultIndicator>
    )
};

const mapStateToProps = ({defaults: {defaultOptions: {loading, options, model, error}}}) => {
    return {loading, error, model,options};
};
const mapDispatchToProps = (dispatch, {swapistoreService}) => {
    return bindActionCreators({
        getDefaultOptions: getDefaultOptions(swapistoreService)
    }, dispatch);
};
export default compose(
    withClassroomstoreService(),
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(QuizzesEditPage);


