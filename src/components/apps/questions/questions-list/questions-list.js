import React from "react";
import './questions-list.css';
import SimpleTestItem from "./simple-test-item";
import MatchingItem from "./matching-item";
import DragAndDrop from "./drad-and-drop";
import FillTheBlanks from "./fill-the-blanks";
import MathJax from "react-mathjax-preview";


const QuestionsList = ({object}) => {
    const {questions} = object;
    if (questions) {
        return (
            <div className="card-block">
                <div className="j-wrapper">{
                    questions.map((question) => {
                        const {id, content: {model_name: modelName} = {}} = question
                        switch (modelName) {
                            case 'SimpleTest': {
                                return <SimpleTestItem key={id} question={question}/>
                            }
                            case 'Matching': {
                                return <MatchingItem key={id} question={question}/>
                            }
                            case 'DragAndDrop': {
                                return <DragAndDrop key={id} question={question}/>
                            }
                            case 'FillTheBlanks': {
                                return <FillTheBlanks key={id} question={question}/>
                            }
                            default: {
                                return null
                            }
                        }

                    })
                    }
                </div>

            </div>)
    }
    return null;
}


export default QuestionsList;

