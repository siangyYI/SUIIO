import React, { Component }from "react";
import { Container ,Button } from "react-bootstrap";
import "../../../../styles/FM_upload.css";

function FM_upload() {
  return (
<><Container>
        <div className="row pt-4">
          <div
            className="col-sm-5 col-12 p-3"
            style={{
              borderRadius: "10px",
              border: "1px solid black",
              backgroundColor: "white",
              height:"150px"
            }}
          >
            <div className="row m-3">
              <h4 className="col">活動年份：</h4>
              <select className="custom-select col" style={{ borderRadius: "10px" ,backgroundColor:"white"}}>
                <option value="grapefruit">110年</option>
                <option value="lime">109年</option>
                <option value="coconut">108年</option>
                <option value="mango">107年</option>
              </select>
            </div>
            <div className="row m-3">
              <h4 className="col">活動類別：</h4>
              <select className="col custom-select" style={{ borderRadius: "10px" ,backgroundColor:"white"}}>
                <option value="grapefruit">大迎新</option>
                <option value="lime">小迎新</option>
                <option value="coconut">民歌</option>
                <option value="mango">送舊</option>
              </select>
            </div>
          </div>
          <div className="col-sm-7">
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
        <Button variant="dark m-2" type="submit" href="/Financial/management" style={{color:"white"}}>
          上傳
        </Button>
        <Button variant="light m-2" type="submit" href="/Financial/management">
          取消
        </Button>
      </Container>
</>
  );
}

export default FM_upload;
