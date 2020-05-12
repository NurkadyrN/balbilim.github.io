import MathJax from "react-mathjax-preview";
import React from "react";

const Explanations = ({id,explanation}) => {
    return (
        <div className='explanation'>
                <span className="explanation-button" data-toggle="collapse"
                      data-target={"#" + id + '-explanation'}>
                    Тушундуруу
                </span>
            <div id={id + '-explanation'} className='ck-content collapse show'>
                {explanation ? <MathJax math={explanation}/> : <span>киргизилген жок</span>}
            </div>
        </div>
    )
}

export default Explanations;
