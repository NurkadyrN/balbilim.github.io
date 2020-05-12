import {defaultFormRedux} from "../../../../forms-redux";
import React from "react";
import {MODEL_PARAMS} from "../../../../../settings/setting";
import {withRouter} from "react-router-dom";
import {bindActionCreators} from "redux";
import {defaultEditSubmit} from "../../../../../actions/default";
import {compose} from "../../../../../utils";
import {withClassroomstoreService} from "../../../../../hoc";
import {connect} from "react-redux";
import {deleteObjectDetail} from "../../../../../actions/default/detail";
import deleteNotification from "../../../../../hooks/notifications/delete-notification";


const EditPageRender = ({id, moduleName, editSubmit, deleteObjectDetail, defaultEditSubmit, options, match, history}) => {
    const submit = (value) => {
        const currentEditSubmit = editSubmit || defaultEditSubmit
        return currentEditSubmit(moduleName, id, value, history, match)
    };
    const deleteObject = (...params) => {
        deleteNotification(deleteObjectDetail, ...params)
    }
    const {location: {state: {afterSubmit} = {}}} = history
    const DefaultFormRedux = defaultFormRedux(moduleName, options);
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="card">
                    <div className="card-header edit-card-header">
                        <h5>{MODEL_PARAMS[moduleName].label}</h5>
                        {id && <span className="icofont icofont-ui-delete"
                                     onClick={() => deleteObject(moduleName, id, history.push, afterSubmit)}/>}
                    </div>
                    <div className="card-block">
                        <div className="j-wrapper j-wrapper-640">
                            <DefaultFormRedux id={id} onSubmit={submit} options={options}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = ({defaults: {defaultOptions: {options}}}) => {
    return {options};
};
const mapDispatchToProps = (dispatch, {swapistoreService}) => {
    return bindActionCreators({
        defaultEditSubmit: defaultEditSubmit(swapistoreService),
        deleteObjectDetail: deleteObjectDetail(swapistoreService)
    }, dispatch);
};
export default compose(
    withClassroomstoreService(),
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(EditPageRender);
