import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export class FM_Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>

        <Modal {...this.props} size="lg" centered>
          <Form onSubmit={this.add}>
            <Modal.Header closeButton>
              <Modal.Title>預算紀錄</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="pt-4">
                <div>
                  <table style={{ border: "1px solid black" }}>
                    <tr className="title">
                      <td colSpan="2">109大迎新 </td>
                      <td>申請人：
                        <span>公關長</span> </td>

                    </tr>
                    <tr>
                      <td className="green">收支項目 </td>
                      <td className="green">收入</td>
                      <td>支出</td>
                    </tr>
                    <tr>
                      <td><div
                    contenteditable="true"
                    style={{ outline: "none", textAlign: "right" }}
                  ></div></td>
                      <td><div
                    contenteditable="true"
                    style={{ outline: "none", textAlign: "right" }}
                  ></div></td>
                      <td><div
                    contenteditable="true"
                    style={{ outline: "none", textAlign: "right" }}
                  ></div></td>
                    </tr>
                    <tr>
                      <td><div
                    contenteditable="true"
                    style={{ outline: "none", textAlign: "right" }}
                  ></div></td>
                      <td><div
                    contenteditable="true"
                    style={{ outline: "none", textAlign: "right" }}
                  ></div></td>
                      <td><div
                    contenteditable="true"
                    style={{ outline: "none", textAlign: "right" }}
                  ></div></td>
                    </tr>
                  </table>
                </div>
              </div>
            </Modal.Body>
          </Form>
        </Modal></>
    );
  }
}
