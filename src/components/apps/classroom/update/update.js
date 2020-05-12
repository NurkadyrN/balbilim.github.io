import React, {useEffect} from "react";
import {bindActionCreators} from "redux";
import {compose} from "../../../../utils";
import {withClassroomstoreService} from "../../../../hoc";
import {connect} from "react-redux";
import {getObject} from "../../../../actions/default";
import ErrorDefaultIndicator from "../../../../hooks/error-defult-indicator/error-default-indicator";
import ClassroomEdit from "../edit/edit";

const ClassroomUpdate = ({match, getObject, loading, error}) => {
    const {params: {id}} = match
    const moduleName = 'ClassRoom'
    useEffect(() => {
        getObject(moduleName, id, match)
    }, [id]);

    return (
        <ErrorDefaultIndicator error={error}>
            <ClassroomEdit objectLoading={loading} id={id}/>
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
)(ClassroomUpdate);
