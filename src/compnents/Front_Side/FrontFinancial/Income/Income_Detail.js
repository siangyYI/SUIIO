import React from "react";
import user from "../../../../Image/1144760.png";
import { Button, Container } from "react-bootstrap";
import "../Financial/Financial.css";
import { Messageitem } from "../../../Message/Report/Messitem";

const Financial_Detail = () => {
  return (
    <>
      <div className="row h-100">
        <div className="col m-3">
          <div
            className="h-100"
            style={{
              background: "white",
              borderRadius: "10px",
              border: "2px solid gray",
            }}
          >
            <div
              style={{
                width: "100%",
                background: "white",
                borderRadius: "10px 10px 0 0",
                textAlign: "center",
              }}
            >
              <img className="mt-2"
                src={require("../../../../Image/711.png").default}
                alt="arrow"
              ></img>
            </div>
            <hr/>
            <div>
              <h2>大迎新</h2>
              <h5>文具用品</h5>
              <p>筆 彩色筆 紅包袋</p>
              <p>申請人：公關長</p>
              <p>支出 $260</p>
            </div>
          </div>
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
                >{}
                  送出
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Financial_Detail;
