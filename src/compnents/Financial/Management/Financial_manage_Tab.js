import React from "react";
import NavBAR from "../Financial_nav";

function Financial_manage() {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div>
          <NavBAR />
        </div>
        <div className="d-flex bd-highlight">
          <div className="state_tag">
            <a href="#/Financial/management/my">我的預算</a>
          </div>
          <div className="state_tag">
            <a href="#/Financial/management/record">預算紀錄</a>
          </div>
          <div className="state_tag">
            <a href="#/Financial/management/upload">上傳預算</a>
          </div>
          <div className="state_tag">
            <a href="#/Financial/management/audit">審核預算</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Financial_manage;
