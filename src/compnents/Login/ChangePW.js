import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Input } from "reactstrap";

function ChangePW() {
  return (
    <>
      <div>
        <div className="login">
          <h2 className="text-center loginfont">修改密碼</h2>
          <h4 className="ml-5 mt-4">請輸入舊密碼</h4>
          <Input/>

          <h4 className="ml-5 mt-4">請輸入新密碼</h4>
          <Input/>
          <h4 className="ml-5 mt-4">確認新密碼</h4>
          <Input/>
          <Button
            variant="dark"
            type="submit"
            href="#/Login"
            style={{ color: "white" }}
          >
            確定
          </Button>
          <Button style={{backgroundColor:"#6B7A8F",borderColor:"#6B7A8F"}}>取消</Button>
        </div>
      </div>
    </>
  );
}
export default ChangePW;
