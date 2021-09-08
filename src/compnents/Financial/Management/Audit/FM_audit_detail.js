import React from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {AuditPass} from "./Audit_pass"
import {AuditCancel} from "./Audit_cancel"

function FM_audit_detail() {
  const [Pass, setPass] = React.useState(false);
  const [Cancel, setCancel] = React.useState(false);

  return (
    <>

 
      
      <Container>
        <div className="pt-4">
          <div>
              <table style={{border:"1px solid black"}}>
                  <tr className="title">
                      <td colSpan="2">109大迎新 </td>
                      <td>申請人：
                          <span>公關長</span> </td>

                  </tr>
                  <tr>
                      <td className="green">收支項目 </td>
                      <td  className="green">收入</td>
                      <td>支出</td>
                  </tr>
                  <tr>
                    <td><div
                    contenteditable="true"
                    style={{ outline: "none", textAlign: "right" }}
                  ></div></td>
                    <td><div
                    contenteditable="true"
                    style={{ outline: "none", textAlign: "right" }}
                  ></div></td>
                    <td><div
                    contenteditable="true"
                    style={{ outline: "none", textAlign: "right" }}
                  ></div></td>
                  </tr>
                  <tr>
                    <td><div
                    contenteditable="true"
                    style={{ outline: "none", textAlign: "right" }}
                  ></div></td>
                    <td><div
                    contenteditable="true"
                    style={{ outline: "none", textAlign: "right" }}
                  ></div></td>
                    <td><div
                    contenteditable="true"
                    style={{ outline: "none", textAlign: "right" }}
                  ></div></td>
                  </tr>
              </table>
          </div>
        </div>
        <div className=""> 
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
        </Button></div>
        <AuditPass show={Pass} onHide={() => setPass(false)} />
        <AuditCancel show={Cancel} onHide={() => setCancel(false)} />

      </Container>
</>
  );
}

export default FM_audit_detail;
