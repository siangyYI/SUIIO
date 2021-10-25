import React, { Component } from "react";

class NotifyItem extends Component {
    render() {
        return (
            <>
                <div className="ncardline py-3">
                    <div className="nfont">
                        {this.props.socket_content}
                    </div>
                </div>
            </>
        );
    }
}
export default NotifyItem;