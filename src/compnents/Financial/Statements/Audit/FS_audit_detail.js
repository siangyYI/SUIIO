import React from "react";
import { Container, Button } from "react-bootstrap";
import { AuditPass } from "./Audit_pass";
import { AuditCancel } from "./Audit_cancel";

function FS_audit_detail() {
  const [Pass, setPass] = React.useState(false);
  const [Cancel, setCancel] = React.useState(false);
  return (
    <div>
      <Container>
        <p>109一月財報</p>
        <div>
        <table style={{ background: "white", textAlign: "center" }}>
          <tr>
            <td colSpan="8" style={{color:"#6E8B5C"}}>財務負責人已審核</td>
          </tr>
          <tr>
            <td colSpan="2">109年</td>
            <td rowSpan="2" style={{ width: "50px" }}>
              活動名稱
            </td>
            <td rowSpan="2">收據編號</td>
            <td rowSpan="2">申請單位</td>
            <td rowSpan="2">收支項目</td>
            <td rowSpan="2">收入</td>
            <td rowSpan="2">支出</td>
          </tr>
          <tr>
            <td>月</td>
            <td>日</td>
          </tr>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>109大迎新</td>
            <td>10089780</td>
            <td>活動</td>
            <td>廠商贊助</td>
            <td></td>
            <td>0</td>
          </tr>
          <tr>
            <td>1</td>
            <td>16</td>
            <td>109大迎新</td>
            <td>346548</td>
            <td>活動</td>
            <td>文具用品</td>
            <td></td>
            <td>4</td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <table style={{ background: "white", textAlign: "center" }}>
          <tr>
            <td>本期淨利(損)</td>
            <td colSpan="2">(4,102)</td>
          </tr>
          <tr>
            <td>本期餘額</td>
            <td colSpan="2">113,909</td>
          </tr>
          <tr>
            <td>製表人：XXX</td>
            <td>會長：XXX</td>
            <td>財務：XXX</td>
          </tr>
        </table>
        <Button variant="dark m-2" type="submit"
          onClick={() => setPass(true)}>
          通過
        </Button>
        <Button variant="m-2" type="submit" onClick={() => setCancel(true)}style={{ backgroundColor: "#6B7A8F", borderColor: "#6B7A8F",color:"white" }}>
          駁回
        </Button>
      </div></Container>
      <AuditPass show={Pass} onHide={() => setPass(false)} />
      <AuditCancel show={Cancel} onHide={() => setCancel(false)} />
    </div>
  );
}

export default FS_audit_detail;
