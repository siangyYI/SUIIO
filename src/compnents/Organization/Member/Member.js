import React from "react";
import { MemberDel } from "./MemberDel";

function Member() {
  const [DelShow, setMemberDel] = React.useState(false);

  return (
    <div
      style={{ backgroundColor: "white", border: "3px solid #A3A0A0",borderRadius:"6px" }}
      className="col-sm-6 col-md-3 mx-5 my-2 "
    >
      <div className="row d-flex align-items-center">
        <div className="pl-4 col-8 m-2" style={{color:"#707070",letterSpacing: "3px"}}>1110634000</div>
        <div className="mr-2 col">
          <img className=""
          variant="primary"
          onClick={() => setMemberDel(true)}
            src={require("../../../Image/cancel.jpg").default}
            alt="cancel"
            style={{ width: "10px", height: "10px" , float: "right"}
          }
          />
        </div>
      </div>
      <MemberDel show={DelShow} onHide={() => setMemberDel(false)} />

    </div>
  );
}

export default Member;
