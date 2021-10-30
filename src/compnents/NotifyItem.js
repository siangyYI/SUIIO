import React, { Component } from "react";
class NotifyItem extends Component {

    render() {
        let { notufy } = this.props;
        if (notufy.content.indexOf("財務報表") !== -1) {
            notufy.type = "financial"
        }
        if (notufy.content.indexOf("收支") !== -1) {
            notufy.type = "income"
        }
        return (
            <>
                <a href={`/${notufy.type}/detail?ID=${notufy.objectID}`}>
                    <div className="ncardline py-3" >
                        <div className="nfont ml-5" style={{textAlign: "left"}}>
                            {notufy.content}
                        </div>
                        <div className="mr-5" style={{textAlign: "right"}}>10-28 14:02</div>
                    </div>
                </a>
            </>
        );
    }
}
export default NotifyItem;