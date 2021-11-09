import { Button } from "react-bootstrap";
import React from "react";
import "../../../styles/Login.css";
import { Input } from "reactstrap";

function Login() {
  return (
    <div style={{ height: "100%" }}>
      <div
        style={{ display: "flex", justifyContent: "center", height: "100%" }}
      >
        <div className="login">
          <h2 className="text-center loginfont">登入</h2>
          <h4 className="ml-5 mt-4">帳號</h4>
          <div className="mx-4 d-flex justify-content-center">
            <Input type="text" placeholder="請輸入學號"></Input>
          </div>

          <h4 className="ml-5 mt-4">密碼</h4>
          <div className="mx-4 d-flex justify-content-center">
            <Input type="password"></Input>
          </div>
          <a href="/PW_account">
            <p className="text-right" style={{ color: "blue" }}>
              忘記密碼
            </p>
          </a>
          <br />
          <br />
          <a href="/Choose" className="">
            <Button
              className="BTN w-100 "
              style={{ backgroundColor: "#6B7A8F", borderColor: "#6B7A8F" }}
            >
              登入
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
