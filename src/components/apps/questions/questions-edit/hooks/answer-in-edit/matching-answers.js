import React from "react";


const MatchingAnswers = ({answer,index, answersDetailSelect, deleteAnswer}) => {
    const {left, right, id} = answer;
    return (
        <div key={id} className='answer-item'>
            <span>{index+1}</span>
            <span>{left} </span>
            <span className="fa fa-arrow-right"/>
            <span> {right} </span>
            <span className="icofont icofont-ui-edit" onClick={() => {
                answersDetailSelect(answer)
            }}/>
            <span className="icofont icofont-ui-delete" onClick={() => {
                deleteAnswer(answer.id)
            }}/>
        </div>
    )
}

export default MatchingAnswers;
