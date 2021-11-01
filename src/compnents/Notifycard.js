import React, { Component } from "react";
import './Notifycard.css'
import NotifyItem from './NotifyItem'
import io from 'socket.io-client'
const socket = io('http://localhost:4000');




class Notifycard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notufy: [],
            count_notufy: [],
            sid: 1110634039
        }
        this.fetchContent(this.state.sid)
        socket.on('組織負責人', (socket_content) => {

            this.setState({ notufy: socket_content })
            console.log(this.state.notufy.content)
        })
        socket.on('1110634039', (socket_content) => {
            console.log(socket_content)
        })
    }
    fetchContent = async (sid) => {
        await fetch(`http://localhost:4000/api/events/fetch/comment/${sid}`)
            .then((res) => res.json())
            .then((data) => this.setState({ notufy: data }));
    };
    async componentDidMount() {
        await this.fetchContent(this.state.sid)
        this.state.notufy.reverse()
    }
    render() {
        return (
            <>
                <div className="overflow-auto ncard ">
                    <div className="title_line py-2"><div className="ml-4">通知</div></div>
                    {this.state.notufy.map((x) => (
                        <NotifyItem notufy={x} />
                    ))};
                </div>
            </>
        );
    }

}
export default Notifycard;