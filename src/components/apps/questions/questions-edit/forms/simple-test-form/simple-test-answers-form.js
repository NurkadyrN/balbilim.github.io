import React, {useEffect} from "react";
import {Field, reduxForm} from "redux-form";
import {renderTextField} from "../../../../../fields/input-custom/input-custom";
import {renderCheckbox} from "../../../../../fields/boolean-custom/boolean-custom";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import compose from "../../../../../../utils/compose";
import setInitialValueRedux from "../../../../../../utils/set-initial-value-redux";

const SimpleTestAnswersForm = ({handleSubmit, answer, change}) => {
    useEffect(() => {
        setInitialValueRedux(answer, change)
    }, [answer.id]);
    return (
        <form onSubmit={handleSubmit} className="simple-answers">
            <div className="j-content">
                <div className='j-wrapper-640'>
                    <div className="form-group row-field">
                        <label className="col-form-label"><b>Вариянт</b></label>
                        <div className="row">
                            <div className='col-sm-8'>
                                <Field type='text' name='body' component={renderTextField}/>
                            </div>

                                <div className='col-sm-1'>
                                    <Field component={renderCheckbox} className='answer-check' name='is_correct'/>
                                </div>
                                <div className='col-sm-3'>
                                    <button type="submit" className="btn btn-primary">+
                                    </button>
                                </div>


                        </div>

                    </div>
                </div>
            </div>
        </form>
    )
}

const SimpleTestAnswersFormRedux = reduxForm({
    form: 'AnswerSimpleTest',
})(SimpleTestAnswersForm);

const mapStateToProps = ({questions: {answers: {answer}}}) => {
    return {answer};
};
export default compose(
    connect(mapStateToProps),
    withRouter,
)(SimpleTestAnswersFormRedux);
