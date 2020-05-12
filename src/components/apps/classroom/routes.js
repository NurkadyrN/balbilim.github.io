import React from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import {ClassroomEdit, ClassroomList, ClassroomUpdate} from "./index";
import IsAuth from "../../../hooks/is-auth/is-auth";
import urlAddSubUrl from "../../../hooks/url-add-sub-url";

const ClassroomRouter = ({match: {path}}) => {
    return (
        <Switch>
            <Route path={urlAddSubUrl(path, '/edit/:id')} component={ClassroomUpdate} exact/>
            <Route path={urlAddSubUrl(path, '/edit')} exact><IsAuth><ClassroomEdit/></IsAuth></Route>
            <Route path={urlAddSubUrl(path, '/')} exact><IsAuth><ClassroomList/></IsAuth></Route>
        </Switch>
    )
}

export default withRouter(ClassroomRouter);
