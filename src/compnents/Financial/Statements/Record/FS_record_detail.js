import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export class FS_Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Modal {...this.props} size="lg" centered>
        <Form onSubmit={this.add}>
          <Modal.Header closeButton>
            <Modal.Title>財務報表</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div
          style={{
            background: "white",
            border: "1px #6E8B5C solid",
            color: "#6E8B5C",
          }}
        >
          財務負責人已審核
        </div>
        <table style={{ background: "white" }}>
          <tr>
            <td colSpan="2">109年</td>
            <td rowSpan="2" style={{ width: "50px" }}>
              活動名稱
            </td>
            <td rowSpan="2">收據編號</td>
            <td rowSpan="2">申請單位</td>
            <td rowSpan="2">收支項目</td>
            <td colSpan="5">收入</td>
            <td colSpan="5">支出</td>
          </tr>
          <tr>
            <td>月</td>
            <td>日</td>
            <td>萬</td>
            <td>仟</td>
            <td>佰</td>
            <td>拾</td>
            <td>元</td>
            <td>萬</td>
            <td>仟</td>
            <td>佰</td>
            <td>拾</td>
            <td>元</td>
          </tr>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>109大迎新</td>
            <td>10089780</td>
            <td>活動</td>
            <td>廠商贊助</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>1</td>
            <td>16</td>
            <td>109大迎新</td>
            <td>346548</td>
            <td>活動</td>
            <td>文具用品</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>4</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <table style={{background:"white"}}>
          <tr>
            <td>本期淨利(損)</td>
            <td colSpan="2">(4,102)</td>
          </tr>
          <tr>
            <td>本期餘額</td>
            <td colSpan="2">113,909</td>
          </tr>
          <tr>
            <td>製表人：XXX</td>
            <td>會長：XXX</td>
            <td>財務：XXX</td>
          </tr>
        </table>
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
