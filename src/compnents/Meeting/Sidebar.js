import "./sidebar.css";
import note from "../../Image/note.png";
import home from "../../Image/home.png";
import barchart from "../../Image/bar-chart.png";
import inbox from "../../Image/inbox.png";
import React from 'react';
const Sidebar = () => {
    return (
        <div className="col-1 d-md-flex d-none justify-content-center" >
            <div className="align-self-center" >
                <div className="Sidebar" >
                    <a href="#/Organization/event" style={{ textDecoration: 'none', color: "white" }}>
                        <div className="pt-4 d-flex flex-column">
                            <div>
                                <img src={note} alt="note" width="30pt" height="30pt" />
                            </div>
                            組織管理
                        </div>
                    </a>
                    <a href="/"  style={{ textDecoration: 'none', color: "white" }}>
                        <div className="pt-3 d-flex flex-column">
                            <div>
                                <img src={home} alt="home" width="30pt" height="30pt" />
                            </div>
                            會議管理
                        </div>
                    </a>
                    <a href="#/Financial/statements"style={{ textDecoration: 'none', color: "white" }}>
                        <div className="pt-3 d-flex flex-column">
                            <div>
                                <img src={barchart} alt="barchart" width="30pt" height="30pt" />
                            </div>
                            財務管理
                        </div>
                    </a>
                    <a href="#/ReportMessage"style={{ textDecoration: 'none', color: "white" }}>
                        <div className="pt-3 d-flex flex-column">
                            <div>
                                <img src={inbox} alt="inbox" width="30pt" height="30pt" />
                            </div>
                            留言管理
                        </div>
                    </a>
                </div>
                {/* <div className="d-flex flex-column">
                    <button className="logout">登出</button>
                <button className="information mt-2">個人資訊</button>
                </div> */}

            </div>
        </div>
    )
};
export default Sidebar;