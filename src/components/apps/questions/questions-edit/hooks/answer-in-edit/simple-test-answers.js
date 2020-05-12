import React from "react";

const SimpleTestAnswers = ({answer,answersDetailSelect,deleteAnswer}) => {
    const {body, is_correct, id} = answer;
    const correct = is_correct ? <i className="fa fa-check-square-o"></i> :
        <i className="fa fa-square-o"></i>
    return (
        <div key={id} className='answer-item'>
            <span> {correct}</span>
            <span>{body} </span>
            <span className="icofont icofont-ui-edit" onClick={() => {
                answersDetailSelect(answer)
            }}/>
            <span className="icofont icofont-ui-delete" onClick={() => {
                deleteAnswer(answer.id)
            }}/>
        </div>
    )
}

export default SimpleTestAnswers;
