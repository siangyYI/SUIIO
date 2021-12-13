import React from "react";
import { Button } from "react-bootstrap";
import { Input } from "reactstrap";

function ChangePW() {
  return (
    <>
      <div style={{ height: "100%" }}>
        <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
          <div className="login">
            <h2 className="text-center loginfont">修改密碼</h2>
            <h4 className="ml-5 mt-4">請輸入舊密碼</h4>
            <Input />

            <h4 className="ml-5 mt-4">請輸入新密碼</h4>
            <Input />
            <h4 className="ml-5 mt-4">確認新密碼</h4>
            <Input />
            <div className="text-center row">
            <a href="/account" style={{ backgroundColor: "#d8936c", borderColor: "#6B7A8F" ,borderRadius:"5px"}}
              className="col m-1"><Button
              style={{ backgroundColor: "#d8936c", borderColor: "#d8936c" }}
              >
                取消
              </Button></a>
              <Button
                variant="dark"
                type="submit"
                href="/Login"
                style={{ color: "white" }}
                className="col m-1"
              >
                確定
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ChangePW;
