import React, {useEffect} from "react";
import './quizzes-form.css';
import moment from 'moment'
import momentLocalizer from 'react-widgets-moment'
import 'react-widgets/dist/css/react-widgets.css'
import {Field, reduxForm} from "redux-form";
import 'react-widgets/dist/css/react-widgets.css';
import {compose} from "../../../../../utils";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import setInitialValueRedux from "../../../../../utils/set-initial-value-redux";
import FieldContainerQuizzes from "../hooks/field-container-quizzes";
import {renderTextField} from "../../../../fields/input-custom/input-custom";
import {renderDropdownList} from "../../../../fields/select-custom/select-custom";
import {renderDateTimePicker} from "../../../../fields/date-time-custom/date-time-custom";


momentLocalizer(moment);


const QuizzesForm = ({handleSubmit, id, options, change, object}) => {
    useEffect(() => {
        if (id) {
            setInitialValueRedux(object, change, ['questions'])
        }
    }, []);
    return (
        <form onSubmit={handleSubmit} method="post" className="j-pro position-initial">
            <div className="j-content row">
                <div className='col-md-4  col-lg-12 col-xl-4'>
                    <FieldContainerQuizzes label={options.title.label} helpText={options.title['help_text']}>
                        <Field type='text' name='title' component={renderTextField}/>
                    </FieldContainerQuizzes>
                </div>
                <div className='col-md-4 col-lg-12 col-xl-4'>
                    <FieldContainerQuizzes label={options['type_is'].label} helpText={options['type_is']['help_text']}>
                        <Field valueField="value"
                               textField="display_name" data={options['type_is'].choices} name='type_is'
                               filter={false}
                               component={renderDropdownList}/>
                    </FieldContainerQuizzes>
                </div>
                <div className='col-md-4  col-lg-12 col-xl-4'>
                    <FieldContainerQuizzes label={options.status.label} helpText={options.status['help_text']}>
                        <Field valueField="value"
                               textField="display_name" data={options.status.choices} name='status'
                               filter={false}
                               component={renderDropdownList}/>
                    </FieldContainerQuizzes>
                </div>
                <div className='col-md-4  col-lg-12 col-xl-4'>
                    <FieldContainerQuizzes label={options['started_date'].label} helpText={options['started_date']['help_text']}>
                        <Field name='started_date'
                               filter={false}
                               component={renderDateTimePicker}/>
                    </FieldContainerQuizzes>
                </div>
                <div className='col-md-4  col-lg-12 col-xl-4'>
                    <FieldContainerQuizzes label={options['finished_date'].label} helpText={options['finished_date']['help_text']}>
                        <Field name='finished_date'
                               filter={false}
                               component={renderDateTimePicker}/>
                    </FieldContainerQuizzes>
                </div>
            </div>
                <button type="submit" className="btn btn-primary quiz-form-btn">Сактоо
                </button>
        </form>
    )
};

const QuizzesFormRedux = reduxForm({
    form: 'Quizzes',
})(QuizzesForm);

const mapStateToProps = ({quizzes: {quizzesDetail: {object}}}) => {
    return {object};
};
export default compose(
    connect(mapStateToProps),
    withRouter,
)(QuizzesFormRedux);


