import React, {useEffect} from "react";
import {bindActionCreators} from "redux";
import {compose} from "../../../../utils";
import {withClassroomstoreService} from "../../../../hoc";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import AfterLoading from "../../../../hooks/after-loading";
import ErrorDefaultIndicator from "../../../../hooks/error-defult-indicator/error-default-indicator";
import {getSubjects} from "../../../../actions/subjects/subjects-detail";
import UnitsDetailRender from "./detail-render";

const UnitsDetail = ({match, getSubjects, loading, error}) => {
    useEffect(() => {
        getSubjects(match)
    }, [match.params.subjectId]);
    return (
        <ErrorDefaultIndicator error={error}>
            <AfterLoading loading={loading}>
                <UnitsDetailRender/>
            </AfterLoading>
        </ErrorDefaultIndicator>
    );
};


const mapStateToProps = ({subjects: {subjectsDetail: {loading, error}}}) => {
    return {loading, error};
};
const mapDispatchToProps = (dispatch, {swapistoreService}) => {

    return bindActionCreators({
        getSubjects: getSubjects(swapistoreService)
    }, dispatch);
};
export default compose(
    withClassroomstoreService(),
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(UnitsDetail);
