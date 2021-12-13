import React from "react";

function Choose() {
  return (
    <>
      <div className="row text-center" style={{height:"100%", padding:"0 !important"}} >
        <div className="col" style={{backgroundColor:"#BBB8B8"}}>
          <a href="#/IncomeIndex" className="m-5">
            <img
              className=""
              src={require("../../../Image/member.png").default}
              alt="cancel"
              style={{ height: "300px", width: "300px", marginTop: "30%" }}
            />
            <div style={{ color: "black", fontSize: "25px" }}>一般成員</div>
          </a>
        </div>
        <div className="col">
          <a href="#/Organization/event" className="col m-5">
            <img
              className=""
              //   onClick={() => setMemberDel(true)}
              src={require("../../../Image/cadre.png").default}
              alt="cancel"
              style={{ height: "300px", width: "300px", marginTop: "30%" }}
            />
            <div style={{ color: "black", fontSize: "25px" }}>社團幹部 </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Choose;
