import React from "react";
import './detail-render.css';
import {compose} from "../../../../../utils";
import {withClassroomstoreService} from "../../../../../hoc";
import {connect} from "react-redux";
import { withRouter} from "react-router-dom";
import QuizzesList from "../../../quizzes/quizzes-list/quizzes-list";
import DefaultUpdate from "../../../defaults/default-update/default-update";
import getSearchParams from "../../../../../utils/get-saerch-params";
import setSearchParams from "../../../../../utils/set-search-params";

const UnitsDetailRender = ({unit, history: {push, location: {search = ''}}, match: {url}}) => {
    const element = getSearchParams(search, ['element'])|| '';
    const onClickTabs = (element = '') => {
        push({search: setSearchParams(search, {element})})
    }
    return (
        <div>
            <div className='row button-header'>
                <ul className="nav nav-tabs md-tabs subject-header">
                    <li className="nav-item">
                        <span onClick={() => {
                            onClickTabs()
                        }} className={'nav-link'+(element === ''?'active':'')}>
                            Тема
                        </span>
                        <div className="slide"/>
                    </li>
                    <li className="nav-item">
                        <span onClick={() => {
                            onClickTabs('quiz')
                        }} className={'nav-link'+(element === 'quiz'?'active':'')}>
                            Тесттер
                        </span>
                        <div className="slide"/>
                    </li>
                </ul>
            </div>
            {element === '' && <DefaultUpdate customModuleName='Units' idKey='unitId'/>}
            {element === 'quiz' && <QuizzesList url={url}/>}
        </div>
    )
}

const mapStateToProps = ({units: {unitsDetail: {unit}}}) => {
    return {unit};
};
export default compose(
    withClassroomstoreService(),
    connect(mapStateToProps),
    withRouter,
)(UnitsDetailRender);

