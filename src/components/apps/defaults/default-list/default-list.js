import React, {useEffect} from "react";
import './default-list.css'
import {bindActionCreators} from "redux";
import {getList} from "../../../../actions";
import {compose} from "../../../../utils";
import {withClassroomstoreService} from "../../../../hoc";
import {connect} from "react-redux";
import AfterLoading from "../../../../hooks/after-loading";
import {withRouter} from "react-router-dom";
import List from "./list";
import ListHeader from "./hooks/list-header";
import ListSearch from "./hooks/list-search";
import ErrorDefaultIndicator from "../../../../hooks/error-defult-indicator/error-default-indicator";

const DefaultList = ({data, match, location: {search, pathname}, getList, error, loading}) => {
    const {params: {moduleName}} = match;
    useEffect(() => {
        getList(moduleName, match, search)
    }, [moduleName, search]);
    const props = {search, afterSubmit:  {pathname, search}, moduleName, ...data}
    return (
        <AfterLoading loading={loading}>
            <ErrorDefaultIndicator error={error}>
                <div className="card">
                    <ListHeader {...{moduleName, pathname}} />
                    <div className="card-block">
                        <div className="dt-responsive table-responsive">
                            <div>
                                <ListSearch/>
                                <AfterLoading loading={loading}>
                                    <List {...props}/>
                                </AfterLoading>
                            </div>
                        </div>
                    </div>
                </div>
            </ErrorDefaultIndicator>
        </AfterLoading>
    )
};

const mapStateToProps = ({defaults: {defaultList: {data, error, loading}}}) => {
    return {data, error, loading};
};

const mapDispatchToProps = (dispatch, {swapistoreService}) => {

    return bindActionCreators({
        getList: getList(swapistoreService),
    }, dispatch);
};

export default compose(
    withClassroomstoreService(),
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(DefaultList);

