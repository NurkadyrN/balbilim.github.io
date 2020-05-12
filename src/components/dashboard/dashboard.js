import React, {useEffect} from 'react';
import './dashboard.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Spinner from "../../hooks/spinner";
import PcodedOverlayBox from "../pcoced-overlay-box";
import Navbar from "../navbar";
import Sidebar from "../navbar/sidebar";
import ShowChatInner from "../navbar/show-chat-inner";
import Proced from "../proced";
import Scripts from "./parts/scipts";
import IsAuth from "../../hooks/is-auth";
import {Route, Switch} from "react-router-dom";
import IsClassroomExist from "../../hooks/is-classroom-exist/is-classroom-exist";
import {bindActionCreators} from "redux";
import {getClassroom} from "../../actions/classroom/classroom-detail";
import {compose} from "../../utils";
import {withClassroomstoreService} from "../../hoc";
import {connect} from "react-redux";
import AfterLoading from "../../hooks/after-loading";
import ErrorRender from "../../hooks/error-defult-indicator/error-render";
import defaultErrorMessages from "../../utils/default-error-messages";
import SubjectsRouter from "../apps/subjects/router";


const Dashboard = ({getClassroom, loading}) => {
    useEffect(() => {
        getClassroom();
    }, [])

    return (
        <IsAuth>
            <AfterLoading loading={loading}>
                <IsClassroomExist>
                    <div>
                        <Spinner/>
                        <div id="pcoded" className="pcoded">
                            <PcodedOverlayBox/>
                            <div className="pcoded-container navbar-wrapper">
                                <Navbar/>
                                <Sidebar/>
                                <ShowChatInner/>
                                <Proced>
                                    <div className="page-body">
                                        <Switch>
                                            <Route path='/Subjects' component={SubjectsRouter}/>
                                            {/*<Route path='/:moduleName' component={DefaultsRouter}/>*/}
                                            <Route path=''/>
                                            <Route path='*'><ErrorRender {...defaultErrorMessages(404)}/></Route>
                                        </Switch>
                                    </div>
                                </Proced>
                            </div>
                        </div>
                        <Scripts/>
                    </div>
                </IsClassroomExist>
            </AfterLoading>
        </IsAuth>
    );

};


const mapStateToProps = ({classroom: {classroomDetail: {loading}}}) => {
    return {loading};
};

const mapDispatchToProps = (dispatch, {swapistoreService}) => {

    return bindActionCreators({
        getClassroom: getClassroom(swapistoreService)
    }, dispatch);
};
export default compose(
    withClassroomstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Dashboard);


