import React from "react";
import user from "../../../../Image/1144760.png";
import { Messageitem } from "../../../Message/Report/Messitem";
import { Button } from "react-bootstrap";
import "./Financial.css";
const Financial_Detail = () => {
  return (
    <>
      <div className="row h-100">
        <div className="col m-3 mt-5">
          <table style={{ background: "white", textAlign: "center" }}>
            <tr>
              <td colSpan="8" style={{ color: "#6E8B5C" }}>
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
              <td>製表人：XXX</td>
              <td>會長：XXX</td>
              <td>財務：XXX</td>
            </tr>
          </table>
        </div>
        <div
          className="col m-3 p-3"
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            border: "1px solid black",
          }}
        >
          <div className="ml-5 mb-2">針對此財務報表進行提問</div>
          <hr />
          <div>
            <div className="w-100">
              <Messageitem />
              <Messageitem />
              <Messageitem />
              <Messageitem />
            </div>
            <form>
              <div class="d-flex">
                <div className="d-flex flex-column">
                  <img
                    src={user}
                    alt="member"
                    width="30pt"
                    height="30pt"
                    class="d-flex align-items-center ml-3"
                  ></img>
                  <div className="row">
                    <img
                      src={require("../../../../Image/next.png").default}
                      alt="arrow"
                      width="12px"
                      height="12px"
                    ></img>
                    <div className="username">小廖</div>
                  </div>
                </div>
                <input
                  className="form-control mx-4 fontarea px-2 py-2  col-9"
                  type="text"
                  placeholder="按下Enter傳送..."
                ></input>
                <Button
                  variant="dark"
                  className="col mt-2"
                  style={{ height: "36px" }}
                >
                  送出
                </Button>
              </div>
            </form>
          </div>
        </div>{" "}
      </div>
    </>
  );
};
export default Financial_Detail;
