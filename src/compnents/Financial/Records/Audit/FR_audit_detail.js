import React from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { AuditPass } from "./Audit_pass";
import { AuditCancel } from "./Audit_cancel";

function FR_audit_detail() {
  const [Pass, setPass] = React.useState(false);
  const [Cancel, setCancel] = React.useState(false);
  return (
    <>
    <div className="m-5">
      <Container>
        <div className="">
          <div className="w-100">
            <div
              style={{
                background: "white",
                borderRadius: "10px",
                border: "2px solid gray",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  background: "black",
                  borderRadius: "10px 10px 0 0",
                }}
              ></div>
              <div style={{fontSize:"20px"}}>
                <div>大迎新</div>
                <div>文具用品</div>
                <div>筆 彩色筆 紅包袋</div>
                <div>申請人：公關長</div>
                <div>支出 $260</div>
              </div>
            </div>
          </div>
         </div>
        <Button variant="dark m-2" type="submit" onClick={() => setPass(true)}>
          通過
        </Button>
        <Button
          variant=" m-2"
          type="submit"
          style={{ backgroundColor: "#6B7A8F", borderColor: "#6B7A8F",color:"white" }}
          onClick={() => setCancel(true)}
        >
          駁回
        </Button>
        <AuditPass show={Pass} onHide={() => setPass(false)} />
        <AuditCancel show={Cancel} onHide={() => setCancel(false)} />
      </Container>
    </div></>
  );
}

export default FR_audit_detail;
