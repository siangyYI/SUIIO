import React from "react";
import Card from "./FM_audit_card";
import { Container } from "react-bootstrap";
import { Component } from "react";


export class FMaudit extends Component {
  render() {
    return (
      <>
        <Container>
          <div className="my-3 d-flex">
            <div style={{ fontSize: "20px" }} className="mr-3">
              審核狀態
            </div>
            <div>
              <select className="Dropdown" style={{ borderRadius: "10px", height: "1.8em", backgroundColor: "white" }}>
                <option value="lime">未通過</option>
                <option value="coconut">財務負責人已審核</option>
                <option value="mango">組織負責人已審核</option>
              </select>
            </div>
          </div>
          <div className="row mt-2">
            <Card /> 
            <Card />
            <Card />
            <Card />
          </div>
        </Container>
      </>
    );
  }

}