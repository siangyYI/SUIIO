import React from "react";
import NavBAR from '../Financial_nav'
import '../../../styles/tag.css';

function Financial_statements() {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div>
          <NavBAR />
        </div>
        <div className="d-flex bd-highlight">
          <div className="state_tag">
            <a href="#/Financial/statements/my">
              我的財報
            </a>
          </div>
          <div className="state_tag">
            <a href="#/Financial/statements/record">
              財務報表
            </a>
          </div>
          <div className="state_tag">
            <a href="#/Financial/statements/upload">
              製作財報
            </a>
          </div>
          <div className="state_tag">
            <a href="#/Financial/statements/audit">
              審核財報
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Financial_statements;
