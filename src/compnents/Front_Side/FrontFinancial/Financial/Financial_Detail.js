import React from "react";
import user from "../../../../Image/1144760.png";
import { Messageitem } from "../../../Message/Report/Messitem";
import { Button, Container } from "react-bootstrap";
import "./Financial.css";
import MessageTable from "../Income/Message"
const Financial_Detail = () => {
  return (
    <>
    <Container>
      <div className="w-100">
        <div className="my-5">
          <table style={{ background: "white", textAlign: "center" }}>
            <tr>
              <td colSpan="7" style={{ color: "#6E8B5C" }}>
                109 一月財報
              </td>
            </tr>
            <tr style={{backgroundColor:"#E2EFDA"}}>
              <td colSpan="2">109年</td>
              <td rowSpan="2" style={{ width: "50px" }}>
                活動名稱
              </td>
              
              <td rowSpan="2">申請單位</td>
              <td rowSpan="2">收支項目</td>
              <td rowSpan="2">收入</td>
              <td rowSpan="2">支出</td>
            </tr>
            <tr style={{backgroundColor:"#E2EFDA"}}>
              <td>月</td>
              <td>日</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>109大迎新</td>
              
              <td>活動</td>
              <td>廠商贊助</td>
              <td>98</td>
              <td></td>
            </tr>
            <tr>
              <td>1</td>
              <td>16</td>
              <td>109大迎新</td>
              
              <td>活動</td>
              <td>文具用品</td>
              <td></td>
              <td>4200</td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>本期合計</td>
              <td>98</td>
              <td>4200</td>
            </tr>
          </table>
          <table style={{ background: "white", textAlign: "center" }}>
            <tr>
              <td>本期淨利(損)</td>
              <td colSpan="2" style={{color:"red"}}>(4,102)</td>
            </tr>
            <tr>
              <td>本期餘額</td>
              <td colSpan="2">113,909</td>
            </tr>
            <tr>
              <td>上期餘額</td>
              <td colSpan="2">113,909</td>
            </tr>
            <tr>
              <td>製表人：XXX</td>
              <td>會長：XXX</td>
              <td>財務：XXX</td>
            </tr>
          </table>
        </div>
       </div>
       <div className="my-2">
         <MessageTable/>
       </div>
      </Container>
    </>
  );
};
export default Financial_Detail;
