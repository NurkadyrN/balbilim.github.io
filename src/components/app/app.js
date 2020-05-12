import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AuthPage} from "../pages";
import Dashboard from "../dashboard";
import {compose} from "../../utils";
import {withClassroomstoreService} from "../../hoc";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getUser} from "../../actions";
import IsAuth from "../../hooks/is-auth/is-auth";
import Logout from "../pages/logout";
import ClassroomRouter from "../apps/classroom/routes";


class App extends Component {

    componentDidMount() {
        const {getUser} = this.props;
        getUser();
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/auth" component={AuthPage}/>
                    <Route path="/logout" exact><IsAuth><Logout/></IsAuth></Route>
                    <Route path='/classroom' component={ClassroomRouter}/>
                    <Route path="/" component={Dashboard}/>
                </Switch>
            </Router>
        )
    }
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch, {swapistoreService}) => {

    return bindActionCreators({
        getUser: getUser(swapistoreService),
    }, dispatch);
};
export default compose(
    withClassroomstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(App);
