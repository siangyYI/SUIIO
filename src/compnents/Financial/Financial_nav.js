import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom';
class NavBAR extends Component {
    render() {
        return (
            <div className="flex-md-column d-md-flex d-none">
                <div className="d-flex d-sm-none  py-2 d-md-flex">
                    <ul class="nav py-3 px-5 h4 " role="tablist">
                        <li class="nav-item">
                            <Link to="/Financial/statements" class="nav-link text-reset navfont" data-toggle="tab">
                                財務報表
                                <div className="d-flex justify-content-center">
                                    <img
                                        src={require("../../Image/remove.png").default}
                                        alt="cancel"
                                        style={{ width: "12pt", height: "15pt" }}
                                    />
                                </div>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/Financial/records" class="nav-link text-reset navfont" data-toggle="tab">
                                收支紀錄
                                <div className="d-flex justify-content-center">
                                    <img
                                        src={require("../../Image/remove.png").default}
                                        alt="cancel"
                                        style={{ width: "12pt", height: "15pt" }}
                                    />
                                </div>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/Financial/management" class="nav-link text-reset navfont" data-toggle="tab">
                                預算管理
                                <div className="d-flex justify-content-center">
                                    <img
                                        src={require("../../Image/remove.png").default}
                                        alt="cancel"
                                        style={{ width: "12pt", height: "15pt" }}
                                    />
                                </div>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        )
    }
}
export default NavBAR;
