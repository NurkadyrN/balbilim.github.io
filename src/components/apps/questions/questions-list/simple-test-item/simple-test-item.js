import MathJax from "react-mathjax-preview";
import QuestionsActions from "../hooks/questions-actions";
import React from "react";
import Explanations from "../hooks/explanation";

const SimpleTestItem = ({question}) => {
    const {content: {body, answers = []}, explanation, id} = question;
    return (
        <div className='questions-item'>

            <div className='questions-body'>
                <div className='ck-content'>
                    <MathJax math={body}/>
                </div>
                <QuestionsActions question={question}/>
            </div>
            <div className='answers'>
                <p className='margin-bottom-0'>Ответы</p>

                {answers.map(({body, is_correct, id}) => {
                    const correct = is_correct ? <i className="fa fa-check-square-o"/> :
                        <i className="fa fa-square-o"/>
                    return (
                        <div key={id} className='answer-item'>
                            <span> {correct}</span>
                            <span>{body} </span>
                        </div>
                    )
                })}
                {answers.length < 1 && <span>киргизилген жок<br/></span>}
                <br/>
                <Explanations explanation={explanation} id={id}/>
            </div>
        </div>
    )
}

export default SimpleTestItem;
