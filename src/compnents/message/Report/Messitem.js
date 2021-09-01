import user from '../../../Image/1144760.png'
import React, { Component } from 'react'
import "./area.css"
export class Messageitem extends Component {

    render() {
        return (
            <div className="d-flex flex-row py-2">
                <div className="d-flex flex-column">
                    <img src={user} alt="member" width="30pt" height="30pt" class="d-flex align-items-center"></img>
                    <div className="username">小廖</div>
                </div>
                <div className="mx-4 fontarea px-2 py-2 d-flex align-items-center">
                    為什麼紅包這麼多
                </div>
            </div>
        )
    }
}