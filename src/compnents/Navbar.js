import React from "react";
import "./Navbar.css";
import User from "./user";
import Bell from "./bell";

import { Component } from "react";



class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUserCardOn: true,
      isNotifyCardOn: true
    };

    this.UserCardClick = this.UserCardClick.bind(this);
    // this.NotifyCardClick = this.NotifyCardClick.bind(this);
  }
  UserCardClick() {
    this.setState(prevState => ({
      isUserCardOn: !prevState.isUserCardOn,
      display: prevState.isUserCardOn ? 'none' : 'block'
    }));

  }
  
  render() {
    return (
      <div>

        <div className="d-flex justify-content-center mt-5 topbar">
          <Bell/>
          <div className="d-flex flex-column">
            <User/>

          </div>

        </div>


        <aside>
          <div className="my-4">
            <img
              src={require("../Image/home.png").default}
              alt="cancel"
              style={{ width: "30pt", height: "30pt" }}
            />
            <br />
            <a href="#/Organization/event">組織管理</a>
          </div>
          <div className="my-4">
            <img
              src={require("../Image/note.png").default}
              alt="cancel"
              style={{ width: "30pt", height: "30pt" }}
            />
            <br />
            <a href="#/">會議管理</a>
          </div>
          <div className="my-4">
            <img
              src={require("../Image/inbox.png").default}
              alt="cancel"
              style={{ width: "30pt", height: "30pt" }}
            />
            <br />
            <a href="#/Financial/statements/my">財務管理</a>
          </div>
          <div className="my-4">
            <img
              src={require("../Image/bar-chart.png").default}
              alt="cancel"
              style={{ width: "30pt", height: "30pt" }}
            />
            <br />
            <a href="#/ReportMessage">留言管理</a>
          </div>
        </aside>


      </div>
    );
  }

}
export default NavBar;
