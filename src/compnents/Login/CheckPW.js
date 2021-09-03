import { Button } from "react-bootstrap";
import React from "react";
import "../../styles/Login.css";
function Login() {
  return (
    <div>
      <div className="login">
        <h2 className="text-center loginfont">忘記密碼</h2>
        <h5 className="ml-5 mt-5">將新密碼寄送至s111000@nutc.edu.tw 信箱</h5>

        <h4 className="ml-5 mt-4">帳號</h4>
        <div className="w-75 ml-5 d-flex justify-content-center">
          <input type="text" placeholder="請輸入學號"></input>
        </div>
        

        <h4 className="ml-5 mt-4">密碼</h4>
        <div className="row w-100 pl-3 d-flex justify-content-center">
          <input type="password" className="col-6"></input>
          <Button
            className="col-4 ml-3"
            style={{
              background: "gray",
              height: "2rem",
              margin: "10px 0 20px 0"}}
          >
            重新寄送密碼
          </Button>
        </div>
        <a href="#/Organization/event" className="mx-4 w-75 ">
          <Button className="BTN w-75 mx-auto d-flex justify-content-center">登入</Button></a>
      </div>
    </div>
  );
}

export default Login;
