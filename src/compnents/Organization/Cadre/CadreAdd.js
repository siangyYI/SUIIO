import React ,{Component} from "react";
import {  Button, Modal, Form, Col, Row } from "react-bootstrap";

export class CadreAdd extends Component {
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
              <strong>新增幹部</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                幹部名稱：
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  name="position"
                  onChange={this.changeHandler}
                />
              </Col>
              <Col sm={{ offset: 3 }}>
                <Form.Text className="text-muted">請勿輸入重複職位</Form.Text>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                幹部學號：
              </Form.Label>
              <Col sm={9}>
              <Form.Control
                  type="text"
                
                  onChange={this.changeHandler}
                />
              </Col>
              <Col sm={{ offset: 3 }}>
                <Form.Text className="text-muted">
                  請輸入學號10碼(不加s)
                </Form.Text>
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
