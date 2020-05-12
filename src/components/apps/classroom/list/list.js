import React, {useEffect} from "react";
import './list.css';
import {compose} from "../../../../utils";
import {withClassroomstoreService} from "../../../../hoc";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import AfterLoading from "../../../../hooks/after-loading";
import List from "../../defaults/default-list/list";
import {withRouter} from "react-router-dom";
import ListHeader from "../../defaults/default-list/hooks/list-header";
import ListSearch from "../../defaults/default-list/hooks/list-search";
import {setLocalStorage} from "../../../../hooks";
import {classroomRequested} from "../../../../actions/classroom/classroom-detail";
import {getList} from "../../../../actions/default";
import urlAddSubUrl from "../../../../hooks/url-add-sub-url";

const ClassroomList = ({getList, match, classroomRequested, history: {push, location: {search, pathname}}, classrooms, loading}) => {
    const moduleName = 'ClassRoom'

    useEffect(() => {
        getList(moduleName, match, search)
    }, [search])

    const itemClick = (object) => {
        setLocalStorage('classroomId', object.id)
        classroomRequested()
        push('/')
    }
    const editUrl = urlAddSubUrl(match.url,'/edit/');
    const props = {
        itemClick,
        editUrl,
        moduleName,
        ...classrooms,
        search,
        afterSubmit:  {pathname, search}
    }

    return (
        <div className='login-block list-classroom-container'>
            <div className="card list-classroom">
                <ListHeader {...{moduleName, path: editUrl}} />
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
        </div>
    )
}

const mapStateToProps = ({classroom: {classroomsList}}) => {
    return classroomsList;
};

const mapDispatchToProps = (dispatch, {swapistoreService}) => {

    return bindActionCreators({
        getList: getList(swapistoreService),
        classroomRequested
    }, dispatch);
};

export default compose(
    withClassroomstoreService(),
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ClassroomList);

