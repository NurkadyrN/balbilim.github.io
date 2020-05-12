import React from "react";
import {compose} from "../../utils";
import {withClassroomstoreService} from "../../hoc";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getDefaultModalOptions} from "../../actions/default";

const ModalEdit = ({url,}) => {

};

const mapStateToProps = ({defaults: {defaultModalOptions: {options, loading, error}}}) => {
    return {options, loading, error};
};
const mapDispatchToProps = (dispatch, {swapistoreService}) => {

    return bindActionCreators({
        getDefaultOptions: getDefaultModalOptions(swapistoreService)
    }, dispatch);
};

export default compose(
    withClassroomstoreService(),
    connect(mapStateToProps, mapDispatchToProps),
)(ModalEdit);
