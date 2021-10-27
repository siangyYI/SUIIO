import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
const aText = { textDecoration: "none", ":hover": { textDecoration: "none" } };
const NavigationBar = () => {

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
          <NavDropdown title="會議紀錄" id="basic-nav-dropdown">

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
            <NavDropdown.Item href="#/Financial/management">
              歷年比較
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};
export default NavigationBar;