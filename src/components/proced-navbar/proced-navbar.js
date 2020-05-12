import React, {useEffect} from "react";
import './proced-navbar.css';
import {Link, withRouter,} from 'react-router-dom';
import {bindActionCreators} from "redux";
import {compose} from "../../utils";
import {withClassroomstoreService} from "../../hoc";
import {connect} from "react-redux";
import {getList} from "../../actions/default";

const ProcedNavBar = ({location: {pathname, state: {afterSubmit} = {}}, match, subjectId, subjects: {objects = []}, getList}) => {
    useEffect(() => {
        getList('Subjects', match)
    }, [])

    const subjectsLink = objects.map(({id, title}) => {
        const active = subjectId === id ? 'active' : ''
        return (
            <li className={active} key={id}>
                <Link to={{pathname: `/Subjects/${id}/`, state: {prevPath: pathname}}}>
                    <span className="pcoded-mtext">{title}</span>
                </Link>
            </li>
        );
    });

    return (
        <nav className="pcoded-navbar">
            <div className="pcoded-inner-navbar main-menu">
                <div className="pcoded-navigatio-lavel">Navigation</div>
                <ul className="pcoded-item pcoded-left-item">
                    <li className="">
                        <Link to={{pathname: "/", state: {prevPath: pathname}}}>
                            <span className="pcoded-micon"><i className="feather icon-home"></i></span>
                            <span className="pcoded-mtext">Dashboard</span>
                        </Link>
                    </li>
                    <li className="pcoded-hasmenu">
                        <Link className='pcoded-hasmenu-a' to={{}}>
                            <span className="pcoded-micon"><i className="feather icon-layers"></i></span>
                            <span className="pcoded-mtext">Сабактар</span>
                        </Link>
                        <ul className="pcoded-submenu">
                            <li className={pathname === '/Subjects/edit' ? 'active' : ''}>
                                <Link to={{
                                    pathname: `/Subjects/`,
                                    state: {
                                        afterSubmit: pathname !== `/Subjects/` ? pathname : afterSubmit,
                                        prevPath: pathname
                                    }
                                }}>
                                    <span className="pcoded-mtext"><i className='fa fa-plus'/></span>
                                </Link>
                            </li>
                            {subjectsLink}
                        </ul>
                    </li>

                </ul>

            </div>
        </nav>
    )
};

const mapStateToProps = ({subjects: {subjectsList, subjectsDetail: {subject: {id}}}}) => {
    return {...subjectsList, subjectId: id};
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
)(ProcedNavBar);

