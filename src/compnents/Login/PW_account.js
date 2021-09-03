import { Button } from "react-bootstrap";
import React from "react";
import "../../styles/Login.css";
function PW_account() {
  return (
    <div>
      <div className="login">
        <h2 className="text-center loginfont">忘記密碼</h2>

        <h4 className="ml-5 mt-4">帳號</h4>
        <div className="mx-4 d-flex justify-content-center">
          <input type="text" placeholder="請輸入學號"></input>
        </div>
        
        <div className="row">
          <a href="#/Login" className="col d-flex justify-content-center">
            <Button className="w-75" style={{background:"gray"}}>取消</Button>
          </a>
          <a href="#/CheckPW" className="col d-flex justify-content-center">
            <Button className="w-75">登入</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PW_account;
