import React from "react";

function Choose() {
  return (
    // <div style={{backgroundColor:"#BBB8B8",transform:"translate(45px)"}}>
      <div className="row text-center" style={{ marginTop: "10%" }}>
        <a href="#/IncomeIndex" className="col m-5">
          <img
            className=""
            src={require("../../Image/member.png").default}
            alt="cancel"
            style={{ height: "300px", width: "300px" }}
          />
          <div style={{ color: "black", fontSize: "25px" }}>一般成員</div>
        </a>
        <a href="#/Organization/event" className="col m-5">
          <img
            className=""
            //   onClick={() => setMemberDel(true)}
            src={require("../../Image/cadre.png").default}
            alt="cancel"
            style={{ height: "300px", width: "300px" }}
          />
          <div style={{ color: "black", fontSize: "25px" }}>社團幹部 </div>
        </a>
      </div>
    // </div>
  );
}

export default Choose;
