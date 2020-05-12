import React from "react";
import './subject-detail-render.css';
import {compose} from "../../../../../utils";
import {withClassroomstoreService} from "../../../../../hoc";
import {connect} from "react-redux";
import {Link, Route, Switch, withRouter} from "react-router-dom";
import UnitsList from "../../../units/list";
import QuizzesList from "../../../quizzes/quizzes-list/quizzes-list";
import DefaultUpdate from "../../../defaults/default-update/default-update";
import urlAddSubUrl from "../../../../../hooks/url-add-sub-url";

const SubjectDetailRender = ({subject, location: {pathname}, match: {url, path}}) => {
    console.log(pathname)
    return (
        <div>
            <div className='row button-header'>
                <ul className="nav nav-tabs md-tabs subject-header">
                    <li className="nav-item">
                        <Link to={urlAddSubUrl(url,'')}
                              className={'nav-link' + (urlAddSubUrl(url,'') === pathname ? 'active' : '')}
                              aria-expanded="true">Сабак</Link>
                        <div className="slide"/>
                    </li>
                    <li className="nav-item">
                        <Link to={urlAddSubUrl(url,'/unit')}
                              className={'nav-link' + (urlAddSubUrl(url,'unit') === pathname ? 'active' : '')}
                              aria-expanded="true">Темалар</Link>
                        <div className="slide"/>
                    </li>
                    <li className="nav-item">
                        <Link to={urlAddSubUrl(url,'/quiz')}
                              className={'nav-link' + (urlAddSubUrl(url,'quiz') === pathname ? 'active' : '')}
                              aria-expanded="true">Тесттер</Link>
                        <div className="slide"/>
                    </li>
                </ul>
            </div>
            <Switch>
                <Route path={urlAddSubUrl(path, '')} exact>
                    <DefaultUpdate customModuleName='Subjects' idKey='subjectId'/>
                </Route>
                <Route path={urlAddSubUrl(path, '/unit')} exact>
                    <UnitsList url={url}/>
                </Route>
                <Route path={urlAddSubUrl(path, '/quiz')} exact>
                    <QuizzesList url={url}/>
                </Route>
            </Switch>
        </div>
    )
}

const mapStateToProps = ({subjects: {subjectsDetail: {subject}}}) => {
    return {subject};
};
export default compose(
    withClassroomstoreService(),
    connect(mapStateToProps),
    withRouter,
)(SubjectDetailRender);

