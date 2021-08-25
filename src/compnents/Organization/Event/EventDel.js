import React ,{Component} from "react";
import {  Button, Modal, Form } from "react-bootstrap";

export class EventDel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Modal {...this.props} size="md" centered>
        <Form onSubmit={this.add}>
          <Modal.Header closeButton>
            <Modal.Title>
              <strong>刪除活動</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>
                確定刪除此活動？
              </Form.Label>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" type="submit">
              確定
            </Button>
            <Button variant="light" onClick={this.props.onHide}>
              取消
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}