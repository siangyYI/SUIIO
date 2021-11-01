import React, { Component } from "react";
class NotifyItem extends Component {

    render() {
        
        let { notufy } = this.props;
        console.log(notufy);
        if (notufy.content.indexOf("財務報表") !== -1) {
            notufy.type = "financial"
        }
        if (notufy.content.indexOf("收支") !== -1) {
            notufy.type = "account"
        }
        let d = new Date(notufy.timestamp)
        var month = d.getMonth() + 1;
        var date = d.getDate();
        var hours = d.getHours();
        var minte = d.getMinutes();
        return (
            <>
                <a href={`/${notufy.type}/detail?ID=${notufy.objectID}`}>

                    <div className="ncardline py-3 row" >
                        <div className="nfont ml-4 col-6 Col"
                            style={{ textAlign: "left", color: '#34495e' }}
                        >
                            {notufy.content}
                        </div>
                        <div className="ml-3 col-4 Col" style={{ textAlign: "right", color: '#545149' }}>{[month, date.toString().padStart(2, "0")].join('-')}    {[hours, minte].join(":")}</div>
                    </div>
                </a>
            </>
        );
    }
}
export default NotifyItem;