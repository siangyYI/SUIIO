import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../compnents/Usercard.css'
function setAdmin() {
    localStorage.setItem("Role", "Admin");
}
class FrontUsercard extends Component {

    render() {
        return (
            <>
                <div className="ucard">
                    <div className="d-flex flex-row px-5 py-4">
                        <img
                            src={require("../../Image/1144760.png").default}
                            alt="cancel"
                            width="55px" height="55px"
                            className="mx-4"
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
                                src={require("../../Image/key.png").default}
                                alt="cancel"
                                width="20px" height="20px"
                                className="mr-2"

                            />
                            <a href="#/Front/ChangePW">更改密碼</a>
                        </div>
                        <div className="ucardline my-2"></div>
                        <div className="d-flex my-3 d-flex justify-content-center">
                            <img
                                src={require("../../Image/pencil.png").default}
                                alt="cancel"
                                width="20px" height="20px"
                                className="mr-2"

                            />
                            <a href="#/Front/EditFile">更改個人資料</a>

                        </div>
                        <div className="ucardline my-2"></div>
                        <div className="d-flex my-3 d-flex justify-content-center">
                            <img
                                src={require("../../Image/messenger.png").default}
                                alt="cancel"
                                width="20px" height="20px"
                                className="mr-2"

                            />
                            <a href="#/Front/ReportMessage">留言紀錄</a>

                        </div>
                        <div className="d-flex justify-content-center ucardline" >
                            <Link to="/IncomeIndex">
                                <button className="d-flex flex-row justify-content-center my-3 py-2 mx-3 ucardbutton"
                                    onClick={() => setAdmin()}
                                >
                                    <img
                                        src={require("../../Image/trun.png").default}
                                        alt="cancel"
                                        width="20px" height="20px"
                                    />
                                    <div className="d-flex align-items-center ml-1">幹部頁面</div>
                                </button>
                            </Link>


                            <button className="d-flex flex-row justify-content-center my-3 py-2 mx-3 ucardbutton">
                                <img
                                    src={require("../../Image/logout.png").default}
                                    alt="cancel"
                                    width="20px" height="20px"
                                />
                                <a href="#/Front/Login" className="d-flex align-items-center ml-1">登出</a>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}
export default FrontUsercard;