import { Button } from "react-bootstrap";
import React, { Component } from "react";
import "../../../styles/Login.css"
import { Input } from "reactstrap";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sID: "",
      password: "",

    };
    this.fetchuser = this.fetchuser.bind(this);
  }

  fetchuser = async () => {

    const sid = document.getElementById('sid').value,
    password = document.getElementById('pwd').value;
    await fetch("http://localhost:4000/api/member/login", {
      method: 'POST', // or 'PUT'
      body: JSON.stringify({
        "sID": sid,
        "password": password
      }), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        if (response.result === true) {
          localStorage.setItem("token", response.token)
        } else {
          localStorage.setItem("token", "null")
        }
        if (localStorage.token !== "null") {
          window.location.href = 'http://localhost:3000/Choose'
        }

      });

  }
  render() {
    return (
      <div style={{ height: "100%" }}>
        <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
          <div className="login">
            <h2 className="text-center loginfont">登入</h2>
            <h4 className="ml-5 mt-4">帳號</h4>
            <div className="mx-4 d-flex justify-content-center">
              <Input type="text" id="sid" idvalue={this.state.sID} placeholder="請輸入學號"></Input>
            </div>

            <h4 className="ml-5 mt-4">密碼</h4>
            <div className="mx-4 d-flex justify-content-center">
              <Input type="password" id="pwd" value={this.state.password} placeholder="請輸入密碼">
              </Input>
            </div>
            <a href="/PW_account">
              <p className="text-right" style={{ color: "blue" }}>
                忘記密碼
              </p>
            </a>
            <br /><br />

            <Button className="BTN w-100 " onClick={this.fetchuser(this.state.sID, this.state.password)} style={{ backgroundColor: "#6B7A8F", borderColor: "#6B7A8F" }}>登入</Button>

          </div>
        </div>
      </div>
    );
  }
}

