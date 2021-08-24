import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import "./NavigationBar.css";
const NavigationBar=()=> {
  
    return (
      <div>
        <Navbar className="d-flex d-md-none " bg="dark" expand="lg" variant="dark" >
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="h4">
            <NavDropdown title="組織管理" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">活動</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">幹部</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">權限管理</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">成員</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="會議管理" id="basic-nav-dropdown">
              <NavDropdown.Item exact href="#/">會議記錄</NavDropdown.Item>
              <NavDropdown.Item href="#/Uploadmeet">上傳記錄</NavDropdown.Item>
              <NavDropdown.Item href="#/AuditList">審核會議</NavDropdown.Item>
              <NavDropdown.Item href="#/MyList">我的上傳</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="財務管理" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">財務報表</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">收支紀錄</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">預算管理</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="留言管理" id="basic-nav-dropdown">
              <NavDropdown.Item href="#/ReportMessage">收支留言</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">財報留言</NavDropdown.Item>
            </NavDropdown>
            <div className="tool d-flex flex-column pt-2 ">
              <button className="navbutton"><div className="navtext">登出</div></button>
              <button className="navbutton mt-2"><div className="navtext">個人資訊</div></button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
      
    )
};
export default NavigationBar;