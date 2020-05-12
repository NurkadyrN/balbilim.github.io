import React from 'react';

import './spinner.css';


const Spinner = () => {
    return (
        <div className="theme-loader">
            <div className="ball-scale">
                <div className='contain'>
                    <div className="ring">
                        <div className="frame"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spinner;
