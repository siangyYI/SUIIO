import React from "react";
import NavBAR from "../Financial_nav";

function Financial_records() {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="">
          <NavBAR />
        </div>
        <div className="d-flex bd-highlight">
          <div className="state_tag">
            <a href="#/Financial/records/my">我的收支</a>
          </div>
          <div className="state_tag">
            <a href="#/Financial/records/record">收支紀錄</a>
          </div>
          <div className="state_tag">
            <a href="#/Financial/records/upload">上傳收支</a>
          </div>
          <div className="state_tag">
            <a href="#/Financial/records/audit">審核收支</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Financial_records;
