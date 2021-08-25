import React ,{Component} from "react";
import {  Button, Modal, Form, Col, Row } from "react-bootstrap";

export class CadreEdit extends Component {
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
              <strong>修改幹部</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                幹部名稱：
              </Form.Label>
              <Form.Label column sm={9}>
                會長
              </Form.Label>

            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                幹部學號：
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                />
              </Col>
              <Col sm={{ offset: 3 }}>
                <Form.Label>
                  請輸入學號10碼(不加s)
                </Form.Label>
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" type="submit">
              新增
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
