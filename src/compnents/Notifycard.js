import React, { Component } from "react";
import './Notifycard.css'
import NotifyItem from './NotifyItem'
class Notifycard extends Component {
    render() {
        return (
            <>
                <div className="overflow-auto ncard ">
                    <div className="">
                        <NotifyItem />
                        <NotifyItem />
                        <NotifyItem />
                        <NotifyItem />
                    </div>

                </div>
            </>
        );
    }

}
export default Notifycard;