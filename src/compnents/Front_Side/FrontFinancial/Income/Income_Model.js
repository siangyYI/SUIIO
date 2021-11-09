import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export class IncomeModel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Modal {...this.props} size="md" centered>
        <Form onSubmit={this.add}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Form.Group>
              <img
                className="mt-2"
                src={require("../../../../Image/711.png").default}
                alt="arrow"
              ></img>
            </Form.Group>
          </Modal.Body>
        </Form>
      </Modal>
    );
  }
}
