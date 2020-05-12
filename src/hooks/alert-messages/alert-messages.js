import {withAlert} from "react-alert";
import {compose} from "../../utils";
import {connect} from "react-redux";
import {alertRemove} from "../../actions/alert";
import './alert-messages.css';

const AlertMessages = ({alert, alerts}) => {
    setTimeout(() => {
        alerts.map(({message,type,timeout=5000}) => {
            alert.show(message, {
                timeout,
                type,
            })
        });
    }, 0);

    return null;
};

const mapStateToProps = ({alert: {alerts}}) => {
    return {alerts};
};


export default compose(
    connect(mapStateToProps, {alertRemove}),
    withAlert()
)(AlertMessages);
