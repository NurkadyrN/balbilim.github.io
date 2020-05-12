import React from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import QuizzesUpdate from "./quizzes-update/quizzes-update";
import QuizzesEditPage from "./quizzes-edit/quizzes-edit";
import urlAddSubUrl from "../../../hooks/url-add-sub-url";

const QuizzesRouter = ({match: {path}}) => {
    return (
        <Switch>
            <Route path={urlAddSubUrl(path, '/:quizId(\\d+)')} exact>
                <QuizzesUpdate/>
            </Route>
            <Route path={urlAddSubUrl(path, '/')} exact>
                <QuizzesEditPage/>
            </Route>
        </Switch>
    )
}

export default withRouter(QuizzesRouter);
