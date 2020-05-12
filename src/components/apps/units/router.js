import React from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import EditPage from "../defaults/default-edit/edit-page";
import urlAddSubUrl from "../../../hooks/url-add-sub-url";
import UnitsDetail from "./detail/detail";
import QuizzesRouter from "../quizzes/router";

const UnitsRouter = ({match: {path}}) => {
    return (
        <Switch>
            <Route path={urlAddSubUrl(path, '/')} exact>
                <EditPage customModuleName='Units'/>
            </Route>
            <Route path={urlAddSubUrl(path, '/:unitId(\\d+)/Quizzes')} component={QuizzesRouter}/>
            <Route path={urlAddSubUrl(path, '/:unitId(\\d+)')}
                   component={UnitsDetail}/>
        </Switch>
    )
}

export default withRouter(UnitsRouter);
