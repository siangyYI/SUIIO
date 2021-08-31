import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
const aText = { textDecoration: "none", ":hover": { textDecoration: "none" } };
const NavigationBar=()=> {
  
    return (
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
                <NavDropdown.Item exact href="/">會議記錄</NavDropdown.Item>
                <NavDropdown.Item href="#/Uploadmeet">上傳記錄</NavDropdown.Item>
                <NavDropdown.Item href="#/AuditList">審核會議</NavDropdown.Item>
                <NavDropdown.Item href="#/MyList">我的上傳</NavDropdown.Item>
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


      
    )
};
export default NavigationBar;