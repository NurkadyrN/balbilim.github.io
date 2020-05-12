import React from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import SubjectsDetail from "./subjects-detail";
import DefaultUpdate from "../defaults/default-update/default-update";
import EditPage from "../defaults/default-edit/edit-page";
import UnitsRouter from "../units/router";
import QuizzesRouter from "../quizzes/router";
import urlAddSubUrl from "../../../hooks/url-add-sub-url";

const SubjectsRouter = ({match: {path}}) => {
    return (
        <Switch>
            <Route path={urlAddSubUrl(path)} exact>
                <EditPage customModuleName='Subjects'/>
            </Route>
            <Route path={urlAddSubUrl(path, '/:subjectId(\\d+)/Units')} component={UnitsRouter}/>
            <Route path={urlAddSubUrl(path, '/:subjectId(\\d+)/Quizzes')} component={QuizzesRouter}/>
            <Route path={urlAddSubUrl(path, '/:subjectId(\\d+)')} component={SubjectsDetail}/>
        </Switch>
    )
}


export default withRouter(SubjectsRouter);
