import React ,{Component} from "react";
import {  Button, Modal, Form} from "react-bootstrap";

export class AuditPass extends Component {
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
              <strong>確定通過嗎？</strong>
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
            <Button variant="dark" type="submit" href="/Financial/management" style={{color:"white"}}>
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
