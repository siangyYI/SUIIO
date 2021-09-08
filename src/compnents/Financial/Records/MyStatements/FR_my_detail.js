import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";

function FR_my_detail() {
  return (
    <div>
      <Container>
        <div className="row">
          <div className="col mr-5">
            <div
              className=" p-3"
              style={{
                backgroundColor: "white",
                border: "1px solid black",
                borderRadius: "10px",
              }}
            >
              <div className="row">
                <div className="col text-center">
                  <input className="radio mx-4" type="radio" name="year" value="" />
                  <label>收入</label>
                </div>
                <div className="col text-center">
                  <input className="radio mx-4" type="radio" name="year" value="" />
                  <label>支出</label>
                </div>
              </div>
              <div>
                <input
                  className=" mt-3 p-2"
                  type="text"
                  placeholder="收支名稱"
                  style={{
                    borderRadius: "10px",
                  }}
                />
                <div className="row m-3 mt-4">
                  <div>預算類別：</div>
                  <select
                    className="custom-select"
                    style={{
                      borderRadius: "4px",
                      outline: "none",
                      backgroundColor: "white",
                    }}
                  >
                    <option value="coconut">迎新</option>
                    <option value="mango">民歌</option>
                  </select>
                </div>
                <div className="row m-3">
                  <div>活動類別：</div>
                  <select
                    className="custom-select"
                    style={{
                      borderRadius: "4px",
                      outline: "none",
                      backgroundColor: "white",
                    }}
                  >
                    <option value="coconut">迎新</option>
                    <option value="mango">民歌</option>
                  </select>
                </div>
                <p>收支項目：</p>
                <textarea name="text" rows="6" cols="40" />
              </div>
              <div className="row justify-content-between mt-3 px-3">
                <div>
                  <div>金額：</div>
                  <input
                    className=" mt-3 p-2"
                    style={{
                      borderRadius: "10px",
                    }}
                  />
                </div>

                <div className="">
                  <div>收據照片上傳至此：</div>
                  <input
                    className=" mt-3 p-2"
                    style={{
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <Button className="col m-2 btn-dark" href="#/Financial/records/my">
                上傳
              </Button>
              <Button className="col m-2" href="#/Financial/records/my" style={{ backgroundColor: "#6B7A8F", borderColor: "#6B7A8F" }}>
                取消
              </Button>
            </div>
          </div>

          <div className="col-5">
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
              <div>
                <div>大迎新</div>
                <div>文具用品</div>
                <div>筆 彩色筆 紅包袋</div>
                <div>申請人：公關長</div>
                <div>支出 $260</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default FR_my_detail;
