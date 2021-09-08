import { Button } from "react-bootstrap";
import React from "react";
import { Input } from "reactstrap";

import "../../styles/Login.css";
function PW_account() {
  return (
    <div style={{ height: "100%" }}>
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <div className="login">
        <h2 className="text-center loginfont">忘記密碼</h2>

        <h4 className="ml-5 mt-4">帳號</h4>
        <div className="mx-4 d-flex justify-content-center">
          <Input type="text" placeholder="請輸入學號"></Input>
        </div>
        
        <div className="row">
          <a href="#/Login" className="col d-flex justify-content-center">
            <Button className="w-75"style={{ backgroundColor: "#6B7A8F", borderColor: "#6B7A8F" }}>取消</Button>
          </a>
          <a href="#/CheckPW" className="col d-flex justify-content-center">
            <Button className="w-75 btn-dark">繼續</Button>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default PW_account;
