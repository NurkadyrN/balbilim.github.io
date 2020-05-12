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
import {getList} from "../../../../actions/default";
import getSearchParams from "../../../../utils/get-saerch-params";
import setSearchParams from "../../../../utils/set-search-params";

const QuizzesList = ({getList,url, match, history: {location: {search, pathname}}, quizzes, loading}) => {
    const moduleName = 'Quizzes';
    const nameSearch = 'quiz-search';
    const pageName = 'quiz-page';
    const getParams = getSearchParams(search, [nameSearch, pageName])
    const newSearch = setSearchParams('', getParams)
    useEffect(() => {
        getList(moduleName, match, newSearch)
    }, [newSearch])

    const editUrl = `${url}/Quizzes/`;

    const props = {
        editUrl,
        moduleName,
        ...quizzes,
        search,
        pageName,
        afterSubmit: {pathname, search}
    }

    return (

        <div className="card ">
            <ListHeader {...{moduleName, path: editUrl}} />
            <div className="card-block">
                <div className="dt-responsive table-responsive">
                    <div>
                        <ListSearch name={nameSearch} pageName={pageName}/>
                        <AfterLoading loading={loading}>
                            <List {...props}/>
                        </AfterLoading>
                    </div>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = ({quizzes: {quizzesList}}) => {
    return quizzesList;
};

const mapDispatchToProps = (dispatch, {swapistoreService}) => {

    return bindActionCreators({
        getList: getList(swapistoreService),
    }, dispatch);
};

export default compose(
    withClassroomstoreService(),
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(QuizzesList);

