import user from '../../../Image/1144760.png'
import React, { Component } from 'react'
import "./area.css"
export class Messageitem extends Component {

    render() {
        return (
            <>
                <div className="d-flex flex-row py-2">
                    <div className="d-flex flex-column">
                        <img src={user} alt="member" width="30pt" height="30pt" class="d-flex align-items-center"></img>
                        <div className="username">小廖</div>
                    </div>
                    <div className="mx-4 fontarea px-3 py-1 d-flex align-items-center overflow-auto">
                        為什麼紅包這麼多
                    </div>

                </div>
                <div className="d-flex timefont align-items-center">
                    <img
                        src={require("../../../Image/time-left.png").default}
                        alt="bell"
                        width="12px" height="12px"
                        className="mx-1"
                        onClick={() => this.NotifyCardClick()}

                    />
                    <div class="">6y以前</div>
                </div>
            </>
        )
    }
}