import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'

export class ModalDel extends Component {
    delete = (event) => {
        // event.preventDefault()
        // fetch('http://localhost:4000/api/officers/delete', {
        //     method: 'POST',
        //     headers: new Headers({
        //         'Content-Type': 'application/json',
        //     }),
        //     body: JSON.stringify(this.props.officer),
        // }).then((resp) => {
        //     if (resp.status !== 200)
        //         return alert(`${resp.status}　${resp.statusText}`)
        //     window.location.reload()
        // })
    }
    render() {
        return (
            <Modal {...this.props} size="sm" centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <strong>確定駁回嗎?</strong>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5 className="d-flex justify-content-center">請多多確認喔</h5>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                        <Button variant="outline-dark" onClick={this.delete}>
                            確定
                        </Button>
                        <Button variant="light" onClick={this.props.onHide}>
                            取消
                        </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}