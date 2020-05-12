import React, {useEffect} from "react";
import {bindActionCreators} from "redux";
import {compose} from "../../../../utils";
import {withClassroomstoreService} from "../../../../hoc";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getObject} from "../../../../actions/default";
import AfterLoading from "../../../../hooks/after-loading";
import ErrorDefaultIndicator from "../../../../hooks/error-defult-indicator/error-default-indicator";
import QuizzesEditPage from "../quizzes-edit";

const QuizzesUpdate = ({match: {params: {quizId}}, getObject, loading, error}) => {
    const moduleName = 'Quizzes'
    useEffect(() => {
        getObject(moduleName, quizId)
    }, [moduleName, quizId]);

    return (
        <ErrorDefaultIndicator error={error}>
            <AfterLoading loading={loading}>
                <QuizzesEditPage/>
            </AfterLoading>
        </ErrorDefaultIndicator>
    );
};


const mapStateToProps = ({quizzes: {quizzesDetail: {loading, error}}}) => {
    return {loading, error};
};


const mapDispatchToProps = (dispatch, {swapistoreService}) => {

    return bindActionCreators({
        getObject: getObject(swapistoreService)
    }, dispatch);
};
export default compose(
    withClassroomstoreService(),
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(QuizzesUpdate);
