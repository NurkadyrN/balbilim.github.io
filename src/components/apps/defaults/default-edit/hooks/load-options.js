import React, {useEffect} from "react";
import {compose} from "../../../../../utils";
import {withClassroomstoreService} from "../../../../../hoc";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getDefaultOptions} from "../../../../../actions/default";
import ErrorDefaultIndicator from "../../../../../hooks/error-defult-indicator/error-default-indicator";
import {withRouter} from "react-router-dom";
import AfterLoading from "../../../../../hooks/after-loading";


const LoadOptions = ({moduleName, error, loading,children, getDefaultOptions}) => {
    useEffect(() => {
        getDefaultOptions(moduleName);
    }, [moduleName]);
    return (
        <ErrorDefaultIndicator error={error}>
            <AfterLoading loading={loading}>
                {children}
            </AfterLoading>
        </ErrorDefaultIndicator>
    )
};

const mapStateToProps = ({defaults: {defaultOptions: {loading, options, error}}}) => {
    return {loading, error, options};
};
const mapDispatchToProps = (dispatch, {swapistoreService}) => {
    return bindActionCreators({
        getDefaultOptions: getDefaultOptions(swapistoreService),
    }, dispatch);
};
export default compose(
    withClassroomstoreService(),
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(LoadOptions);


