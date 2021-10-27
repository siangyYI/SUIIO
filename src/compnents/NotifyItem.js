import React, { Component } from "react";
class NotifyItem extends Component {

    render() {
        let { notufy } = this.props;
        if(notufy.content.indexOf("財務報表") !== -1 ){
            notufy.type="financial"
        }
        if(notufy.content.indexOf("收支") !== -1){
            notufy.type="income"
        }
        
        console.log(notufy.type )
        return (
            <>
                <a href={`/${notufy.type}/detail?ID=${notufy.objectID}`}>
                    <div className="ncardline py-3">
                        <div className="nfont">
                            {notufy.content}
                        </div>
                    </div>
                </a>



            </>
        );
    }
}
export default NotifyItem;