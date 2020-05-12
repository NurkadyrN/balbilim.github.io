import MathJax from "react-mathjax-preview";
import QuestionsActions from "../hooks/questions-actions";
import React from "react";
import Explanations from "../hooks/explanation";

const MatchingItem = ({question}) => {
    const {content: {body, answers},explanation,id} = question;
    return (
        <div className='questions-item'>

            <div className='questions-body'>
                <div className='ck-content'>
                    <MathJax math={body}/>
                </div>
                <QuestionsActions question={question} />
            </div>
            <div className='answers'>
                <p className='margin-bottom-0'>Ответы</p>
                {answers.map(({left, right, id},index) => {
                    return (
                        <div key={id} className='answer-item'>
                            <span>{index+1}</span>
                            <span>{left} </span>
                            <span className="fa fa-arrow-right"/>
                            <span> {right} </span>
                        </div>
                    )
                })}
                {answers.length < 1 && <span>киргизилген жок<br/></span>}
                <br/>
            </div>
            <Explanations explanation={explanation} id={id}/>
        </div>
    )
}

export default MatchingItem;
