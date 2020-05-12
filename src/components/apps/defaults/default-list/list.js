import deleteNotification from "../../../../hooks/notifications/delete-notification";
import ResponsibleTable from "../../../responsible-table";
import React from "react";
import ListItem from "./hooks/list-item/list-item";
import TableHeader from "./hooks/table-header";
import {bindActionCreators} from "redux";
import {deleteObjectListAction} from "../../../../actions/default";
import {compose} from "../../../../utils";
import {withClassroomstoreService} from "../../../../hoc";
import {connect} from "react-redux";

const List = ({results = {}, count, page,pageName, size, deleteObjectListAction, ...listItemProps}) => {
    const deleteObject = (...params) => {
        deleteNotification(deleteObjectListAction, ...params)
    }
    const {objects = [], titles = []} = results;
    listItemProps['deleteObject'] = deleteObject;
    listItemProps['objects'] = objects;
    listItemProps['titles'] = titles;
    const props = {
        count, page, size,
        itemCount: objects.length,
        items: ListItem(listItemProps),
        title: TableHeader({titles}),
        pageName
    }
    return (
        <ResponsibleTable {...props}/>
    )
};

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch, {swapistoreService}) => {

    return bindActionCreators({
        deleteObjectListAction: deleteObjectListAction(swapistoreService),
    }, dispatch);
};

export default compose(
    withClassroomstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(List);

