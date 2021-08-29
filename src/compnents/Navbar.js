import React from "react";
import "./Navbar.css";
import Usercard from "./Usercard"
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Component } from "react";

const aText = { textDecoration: "none", ":hover": { textDecoration: "none" } };

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      display: 'none'
    };
    this.handClick = this.handClick.bind(this);
  }
  handClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      display: prevState.isToggleOn ? 'none' : 'block'
    }));
  }
  render() {
    return (
      <div>

        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          className="phone"
        >

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{ color: "white" }}>
            <Nav className="mr-auto" style={aText}>
              <NavDropdown title="組織管理" id="basic-nav-dropdown">
                <NavDropdown.Item href="#/Organization/event">
                  活動
                </NavDropdown.Item>
                <NavDropdown.Item href="#/Organization/cadre">
                  幹部
                </NavDropdown.Item>
                <NavDropdown.Item href="#/Organization/member">
                  成員
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="會議管理" id="basic-nav-dropdown">
                <NavDropdown.Item exact href="/Index">會議記錄</NavDropdown.Item>
                <NavDropdown.Item href="/Index/Uploadmeet">上傳記錄</NavDropdown.Item>
                <NavDropdown.Item href="/Index/AuditList">審核會議</NavDropdown.Item>
                <NavDropdown.Item href="/Index/MyList">我的上傳</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="財務管理" id="basic-nav-dropdown">
                <NavDropdown.Item href="#/Financial/statements">
                  財務報表
                </NavDropdown.Item>
                <NavDropdown.Item href="#/Financial/records">
                  收支紀錄
                </NavDropdown.Item>

                <NavDropdown.Item href="#/Financial/management">
                  預算管理
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="留言管理" id="basic-nav-dropdown">
                <NavDropdown.Item href="/ReportMessage">收支留言</NavDropdown.Item>
                <NavDropdown.Item href="/ReportMessage/#">財報留言</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="個人資料" id="basic-nav-dropdown"></NavDropdown>
            </Nav>
            <div className="d-flex mt-2">
              <Button variant="outline-success">組織頁面</Button>&nbsp;
              <Button variant="outline-success">登出</Button>
            </div>
          </Navbar.Collapse>
        </Navbar>
        <div className="d-flex justify-content-center mt-4 ">
          <img
            src={require("../Image/bell.png").default}
            alt="cancel"
            width="25px" height="25px"
            className="mt-2"
          />
          <div className="d-flex flex-column">
            <img
            src={require("../Image/user.png").default}
            alt="cancel"
            width="55px" height="55px"
            className=" mt-4"
            onClick={this.handClick}
          />
          <div style={{ display: this.state.display }}>
            <Usercard />
          </div>
          </div>
          
        </div>


        <aside>
          <div className="my-4">
            <img
              src={require("../Image/home.png").default}
              alt="cancel"
              style={{ width: "30pt", height: "30pt" }}
            />
            <br />
            <a href="#/Organization/event">組織管理</a>
          </div>
          <div className="my-4">
            <img
              src={require("../Image/note.png").default}
              alt="cancel"
              style={{ width: "30pt", height: "30pt" }}
            />
            <br />
            <a href="#/">會議管理</a>
          </div>
          <div className="my-4">
            <img
              src={require("../Image/inbox.png").default}
              alt="cancel"
              style={{ width: "30pt", height: "30pt" }}
            />
            <br />
            <a href="#/Financial/statements">財務管理</a>
          </div>
          <div className="my-4">
            <img
              src={require("../Image/bar-chart.png").default}
              alt="cancel"
              style={{ width: "30pt", height: "30pt" }}
            />
            <br />
            <a href="#/ReportMessage">留言管理</a>
          </div>
        </aside>
        

      </div>
    );
  }

}
export default NavBar;
