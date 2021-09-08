import React, { Component } from 'react'
import Card from "./FR_record_card";
import { FR_Detail } from "./FR_record_detail"

function FR_record() {
  const [DetailShow, setFRDetail] = React.useState(false);
  return (
    <>
      <div>
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
          <div className="col-sm-12 col-md-3 pb-2" onClick={() => setFRDetail(true)}>
            <Card />
          </div>
          <div className="col-sm-12 col-md-3 pb-2" onClick={() => setFRDetail(true)}>
            <Card />
          </div>
          <div className="col-sm-12 col-md-3 pb-2" onClick={() => setFRDetail(true)}>
            <Card />
          </div>
          <div className="col-sm-12 col-md-3 pb-2" onClick={() => setFRDetail(true)}>
            <Card />
          </div>
        </div>
      </div>
      <FR_Detail show={DetailShow} onHide={() => setFRDetail(false)} />

    </>
  );
}

export default FR_record;
