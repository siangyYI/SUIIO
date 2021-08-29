import React, { Component } from "react";
import './Usercard.css'
class Usercard extends Component {
    render() {
        return (
            <>

                <div className="ucard ">
                    <div className="d-flex flex-row px-5 py-3">
                        <img
                            src={require("../Image/1144760.png").default}
                            alt="cancel"
                            width="55px" height="55px"
                            className="mr-5 ml-3"
                            onClick={this.handClick}
                        />
                        <div className="d-flex flex-column">
                            <div>詹翔壹</div>
                            <div>暱稱：siangyi</div>
                            <div>性別：男</div>
                        </div>

                    </div>

                    <div className="ucardline mt-2">
                        <div className="d-flex my-3 d-flex justify-content-center">
                            <img
                                src={require("../Image/pencil.png").default}
                                alt="cancel"
                                width="25px" height="25px"
                                className="mr-2"
                                onClick={this.handClick}
                            />
                            <div>更改密碼</div>

                        </div>
                        <div className="ucardline my-2"></div>
                        <div className="d-flex my-3 d-flex justify-content-center">
                            <img
                                src={require("../Image/pencil.png").default}
                                alt="cancel"
                                width="25px" height="25px"
                                className="mr-2"
                                onClick={this.handClick}
                            />
                            <div>更改個人資料</div>

                        </div>
                        <div className="d-flex justify-content-center ucardline">
                            <button className="d-flex flex-row justify-content-center my-3 py-2 mx-3 ucardbutton">
                                <img
                                    src={require("../Image/trun.png").default}
                                    alt="cancel"
                                    width="25px" height="25px"
                                />
                                <div className="d-flex align-items-center ml-1">成員頁面</div>
                            </button>

                            <button className="d-flex flex-row justify-content-center my-3 py-2 mx-3 ucardbutton">
                                <img
                                    src={require("../Image/logout.png").default}
                                    alt="cancel"
                                    width="25px" height="25px"
                                />
                                <div className="d-flex align-items-center ml-1">登出</div>
                            </button>
                        </div>
                    </div>
                </div>


            </>
        );
    }

}
export default Usercard;