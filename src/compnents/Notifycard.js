import React, { Component } from "react";
import './Notifycard.css'
import NotifyItem from './NotifyItem'
import io from 'socket.io-client'
const socket = io('http://localhost:4000');

socket.on('組織負責人', (socket_content) => {
    console.log(socket_content)
})
socket.on('1110634039', (socket_content) => {
    console.log(socket_content)
})
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