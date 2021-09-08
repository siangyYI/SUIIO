import React ,{Component} from "react";
import {  Button, Modal, Form} from "react-bootstrap";

export class AuditCancel extends Component {
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
              <strong>確定駁回嗎？</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>
                請多多確認
              </Form.Label>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" type="submit" href="#/Financial/management/audit" style={{color:"white"}}>
              確定
            </Button>
            <Button style={{ backgroundColor: "#6B7A8F", borderColor: "#6B7A8F" }} onClick={this.props.onHide}>
              取消
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}
