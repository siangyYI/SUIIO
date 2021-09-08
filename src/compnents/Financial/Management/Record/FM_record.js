import React, { Component } from 'react'
import Card from "./FM_record_card";
import { FM_Detail } from "./FM_record_detail"
function FM_record() {
  const [DetailShow, setFMDetail] = React.useState(false);
  return (
    <>
      <div className="my-3 mx-5 d-flex">
        <div style={{ fontSize: "20px" }} className="mr-3">
          審核狀態
        </div>
        <div>
          <select className="Dropdown" style={{ borderRadius: "10px", height: "1.8em", backgroundColor: "white" }}>
            <option value="grapefruit">通過</option>
            <option value="lime">未通過</option>
            <option value="coconut">財務負責人已審核</option>
            <option value="mango">組織負責人已審核</option>
          </select>
        </div>
      </div>
      <div className="row mt-2 px-5">
        <div className="col-sm-12 col-md-3 pb-2" onClick={() => setFMDetail(true)}>
          <Card />
        </div>
        <div className="col-sm-12 col-md-3 pb-2" onClick={() => setFMDetail(true)}>
          <Card />
        </div>
        <div className="col-sm-12 col-md-3 pb-2" onClick={() => setFMDetail(true)}>
          <Card />
        </div>
        <div className="col-sm-12 col-md-3 pb-2" onClick={() => setFMDetail(true)}>
          <Card />
        </div>
      </div>
      <FM_Detail show={DetailShow} onHide={() => setFMDetail(false)} />
    </>
  );
}

export default FM_record;
