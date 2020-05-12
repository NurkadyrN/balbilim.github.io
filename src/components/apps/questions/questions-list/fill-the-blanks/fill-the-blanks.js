import MathJax from "react-mathjax-preview";
import QuestionsActions from "../hooks/questions-actions";
import React from "react";
import Explanations from "../hooks/explanation";

const FillTheBlanks = ({question}) => {
    const {content: {body},explanation,id} = question;
    return (
        <div className='questions-item'>

            <div className='questions-body'>
                <div className='ck-content'>
                    <MathJax math={body}/>
                </div>
                <QuestionsActions question={question} />
            </div>
            <Explanations explanation={explanation} id={id}/>
        </div>
    )
}

export default FillTheBlanks;
