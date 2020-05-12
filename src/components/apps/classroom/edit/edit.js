import React, {useEffect} from "react";
import {compose} from "../../../../utils";
import {withClassroomstoreService} from "../../../../hoc";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {defaultEditSubmit, getDefaultOptions} from "../../../../actions/default";
import ErrorDefaultIndicator from "../../../../hooks/error-defult-indicator/error-default-indicator";
import AfterLoading from "../../../../hooks/after-loading";

import ClassroomFormRedux from "./form";
import {withRouter} from "react-router-dom";


const ClassroomEdit = ({defaultEditSubmit, objectLoading, id, error, history, options, loading, getDefaultOptions}) => {
    const moduleName = 'ClassRoom';
    useEffect(() => {
        getDefaultOptions(moduleName);
    }, [moduleName]);
    const submit = (value) => {
        return defaultEditSubmit(moduleName, id, value, history)
    };
    return (
        <ErrorDefaultIndicator error={error}>
            <div className='login-block list-classroom-container'>
                <div className="card list-classroom">
                    <AfterLoading loading={loading || objectLoading}>
                        <ClassroomFormRedux id={id} onSubmit={submit} options={options}/>
                    </AfterLoading>
                </div>
            </div>
        </ErrorDefaultIndicator>
    )
};

const mapStateToProps = ({defaults: {defaultOptions: {options, loading, error}}}) => {
    return {loading, error, options};
};
const mapDispatchToProps = (dispatch, {swapistoreService}) => {
    return bindActionCreators({
        getDefaultOptions: getDefaultOptions(swapistoreService),
        defaultEditSubmit: defaultEditSubmit(swapistoreService)
    }, dispatch);
};
export default compose(
    withClassroomstoreService(),
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(ClassroomEdit);


