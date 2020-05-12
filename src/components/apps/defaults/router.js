import React from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import DefaultUpdate from "../defaults/default-update/default-update";
import EditPage from "../defaults/default-edit/edit-page";
import DefaultList from "./default-list/default-list";
import urlAddSubUrl from "../../../hooks/url-add-sub-url";

const DefaultsRouter = ({match:{path}}) => {
    return (
        <Switch>
            <Route path={urlAddSubUrl(path, '/')} component={EditPage} exact/>
            <Route path={urlAddSubUrl(path, '/:id')} component={DefaultUpdate} exact/>
            <Route path={urlAddSubUrl(path, '/list')} component={DefaultList} exact/>
        </Switch>
    )
}

export default withRouter(DefaultsRouter);
