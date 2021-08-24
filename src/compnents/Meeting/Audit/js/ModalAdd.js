import React, { Component } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

export class ModalAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // position: '',
            // sID: '',
        }
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    add = (event) => {
        // event.preventDefault()
        // fetch('http://localhost:4000/api/officers/add', {
        //     method: 'POST',
        //     headers: new Headers({
        //         'Content-Type': 'application/json',
        //     }),
        //     body: JSON.stringify(this.state),
        // }).then((resp) => {
        //     if (resp.status !== 200)
        //         return alert(`${resp.status}　${resp.statusText}`)
        //     window.location.reload()
        // })
    }

    render() {
        return (
            <Modal {...this.props} size="sm" centered>
                <Form onSubmit={this.add}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <strong>確定通過嗎?</strong>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <h5 className="d-flex justify-content-center">請多多確認喔</h5>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-center">
                        <Button variant="outline-dark" type="submit">
                            確定
                        </Button>
                        <Button variant="light" onClick={this.props.onHide}>
                            取消
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        )
    }
}