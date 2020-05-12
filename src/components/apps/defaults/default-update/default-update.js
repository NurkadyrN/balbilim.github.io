import React, {useEffect} from "react";
import {bindActionCreators} from "redux";
import {compose} from "../../../../utils";
import {withClassroomstoreService} from "../../../../hoc";
import {connect} from "react-redux";
import {getObject} from "../../../../actions/default";
import EditPage from "../default-edit/edit-page";
import AfterLoading from "../../../../hooks/after-loading";
import ErrorDefaultIndicator from "../../../../hooks/error-defult-indicator/error-default-indicator";
import {withRouter} from "react-router-dom";

const DefaultUpdate = ({match: {params},idKey='id',editSubmit, customModuleName, getObject, loading, error}) => {
    const {moduleName} = params
    const id = params[idKey];
    const currentModuleName = customModuleName || moduleName
    useEffect(() => {
        getObject(currentModuleName, id)
    }, [currentModuleName,id]);

    return (
        <ErrorDefaultIndicator error={error}>
            <AfterLoading loading={loading}>
                <EditPage {...{id, editSubmit,customModuleName}} />
            </AfterLoading>
        </ErrorDefaultIndicator>
    );
};


const mapStateToProps = ({defaults: {defaultDetail: {loading, error}}}) => {
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
)(DefaultUpdate);
