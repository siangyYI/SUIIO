import { Button } from "react-bootstrap";
import React from "react";
import "../../styles/Login.css";
import { Input } from "reactstrap";
function Login() {
  return (
    <div style={{ height: "100%" }}>
      <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
        <div className="login">
          <h2 className="text-center loginfont">忘記密碼</h2>
          <h5 className="mt-5">將新密碼寄送至s111000@nutc.edu.tw 信箱</h5>

          <h4 className="mt-4">帳號</h4>
          <div className="w-100 d-flex justify-content-center">
            <Input type="text" placeholder="請輸入學號"></Input>
          </div>


          <h4 className="mt-4">密碼</h4>
          <div className="row w-100">
            <Input type="password" className="col-8"></Input>
            <Button
              className="col-4 btn-dark"
              style={{
                background: "",
                height: "2rem",
                margin: "10px 0 20px 0"
              }}
            >
              重新寄送密碼
            </Button>
          </div>
          <a href="#/Choose" className="mx-4 ">
            <Button className="BTN w-100 mx-auto d-flex justify-content-center"style={{ backgroundColor: "#6B7A8F", borderColor: "#6B7A8F" }}>登入</Button></a>
        </div>
      </div></div>
  );
}

export default Login;
