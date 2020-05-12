import React from "react";
import './proced.css';
import ProcedNavBar from "../proced-navbar";
import ProcedContent from "../proced-content";

const Proced = ({children}) => {
  return (
      <div className="pcoded-main-container">
          <div className="pcoded-wrapper">
            <ProcedNavBar/>
              <ProcedContent>
              {children}
              </ProcedContent>
          </div>
      </div>
  )
};

export default Proced;
