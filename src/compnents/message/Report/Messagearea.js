import React, { Component } from 'react'
import { Messageitem } from './Messitem'
import { Button, Modal, Form } from 'react-bootstrap'
import user from '../../../Image/1144760.png'
import "./area.css"
// import { Button, Modal, Form } from 'react-bootstrap'

export class Messagearea extends Component {
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
            <>
                <Modal {...this.props} size="sm" centered>
                    <div className="col-md-12 area">
                        <div className="px-3 py-3">
                            <Messageitem />
                            <Messageitem />
                            <Messageitem />
                            <Messageitem />
                            <Messageitem />
                            <Messageitem />
                            <Messageitem />
                            <Messageitem />
                            <div className="d-flex flex-row py-2 mx-4">
                                <div className="d-flex flex-column">
                                    <img src={user} alt="member" width="30pt" height="30pt" class="d-flex align-items-center"></img>
                                    <div className="username">幹部</div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <input className="form-control mx-4 fontarea px-2 py-2  col-10" type="text" placeholder="按下Enter傳送...">
                                    </input>
                                </div>

                            </div>
                        </div>
                    </div>
                </Modal>

            </>

        )
    }
}