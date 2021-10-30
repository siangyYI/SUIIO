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
                    <div className="ncardline py-3 row" >
                        <div className="nfont ml-4 col-6 Col"
                            style={{ textAlign: "left", color: '#34495e'}}
                        >
                            {notufy.content}
                        </div>
                        <div className="ml-3 col-4 Col" style={{ textAlign: "right", color: '#545149' }}>10-28 14:02</div>
                    </div>
                </a>
            </>
        );
    }
}
export default NotifyItem;