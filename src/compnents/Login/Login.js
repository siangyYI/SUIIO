import { Button } from "react-bootstrap";
import React from "react";
import "../../styles/Login.css"
function Login() {
  return (
    <div>
      <div className="login">
        <h2 className="text-center loginfont">登入</h2>
        <h4 className="ml-5 mt-4">帳號</h4>
        <div className="mx-4 d-flex justify-content-center">
          <input type="text" placeholder="請輸入學號"></input>
        </div>
        
        <h4 className="ml-5 mt-4">密碼</h4>
        <div className="mx-4 d-flex justify-content-center">
          <input type="password">
          </input>
        </div><br />
        <a href="#/PW_account">
          <p className="text-right">
            忘記密碼
          </p>
        </a>
        <br />
        <a href="#/Organization/event" className="mx-4 w-75 d-flex justify-content-center"><Button className="BTN w-75">登入</Button></a>
      </div>
    </div>
  );
}

export default Login;
