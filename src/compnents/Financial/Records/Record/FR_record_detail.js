import React, { Component } from "react";
import { Modal, Form } from "react-bootstrap";

export class FR_Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Modal {...this.props} size="lg" centered>
        <Form onSubmit={this.add}>
          <Modal.Header closeButton>
            <Modal.Title>收支紀錄</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              style={{
                background: "white",
                borderRadius: "10px",
                border: "2px solid gray",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  background: "black",
                  borderRadius: "10px 10px 0 0",
                }}
              ></div>
              <div>
                <div>大迎新</div>
                <div>文具用品</div>
                <div>筆 彩色筆 紅包袋</div>
                <div>申請人：公關長</div>
                <div>支出 $260</div>
              </div>
            </div>
          </Modal.Body>
         
        </Form>
      </Modal>
    );
  }
}
