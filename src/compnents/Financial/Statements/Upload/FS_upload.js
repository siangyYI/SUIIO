import React, { Component } from "react";
import { Container, Button} from "react-bootstrap";
import TextField from "@material-ui/core/TextField";

function Fs_upload() {
    return (
      <div>
        <Container>
          <div className="row">
            <div
              className="col m-2"
              style={{ border: "1px solid black",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            >
              <div className="p-3">
                <h3>手動生成報表</h3>
              </div>
              <div>
                <form noValidate>
                  <TextField
                    id="date"
                    label="選擇生成日期"
                    type="date"
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </form>
              </div>
              <h4>年報</h4>
              <div className="d-flex">
                <p>是否每年自動生成報表</p>
                <input type="radio" name="year" value="yes" />
                <label>是</label>
                <input type="radio" name="year" value="no" />
                <label>否</label>
              </div>
              <h4>月報</h4>
              <div className="d-flex">
                <p>是否每月自動生成報表</p>
                <input type="radio" name="month" value="yes" />
                <label>是</label>
                <input type="radio" name="month" value="no" />
                <label>否</label>
              </div>
            </div>
            <div className="col m-2" style={{ border: "1px solid black", borderRadius: "10px",backgroundColor: "white",borderRadius: "10px"
                    }}>
              <div>
                <div
                  className="p-3"
                >
                  <h3>手動生成報表</h3>
                </div>
              </div>
              <div className="">
                <div className="">
                  <div className="d-flex">
                    <h4 className=" col">選擇年分&emsp;&emsp;</h4>

                    <select
                      className="col custom-select"
                      style={{
                        height: "1.8em",
                        backgroundColor: "white",
                      }}
                    >
                      <option value="grapefruit">109</option>
                      <option value="lime">108</option>
                      <option value="coconut">107</option>
                      <option value="mango">106</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className=" ">
                <div className="d-flex">
                  <h4 className="col">選擇月份&emsp;&emsp;</h4>
                  <select
                    className="col custom-select"
                    style={{
                      height: "1.8em",
                      backgroundColor: "white",
                    }}
                  >
                    <option value="Jan">一月</option>
                    <option value="Feb">二月</option>
                    <option value="Mar">三月</option>
                    <option value="Apr">四月</option>
                    <option value="May">五月</option>
                    <option value="Jun">六月</option>
                    <option value="Jul">七月</option>
                    <option value="Aug">八月</option>
                    <option value="Sep">九月</option>
                    <option value="Oct">十月</option>
                    <option value="Nov">十一月</option>
                    <option value="Dec">十二月</option>
                  </select>
                </div>
              </div>
              <div className=" ">
                <div className="d-flex">
                  <h4 className="col">選擇活動類別</h4>
                  <select
                    className="col custom-select"
                    style={{
                      height: "1.8em",
                      backgroundColor: "white",
                    }}
                  >
                    <option value="grapefruit">民歌</option>
                    <option value="lime">迎新</option>
                    <option value="coconut">送舊</option>
                    <option value="mango">校慶</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <Button className="m-2  float-right btn-light">儲存</Button>

        </Container>
      </div>
    );
  }

export default Fs_upload;
