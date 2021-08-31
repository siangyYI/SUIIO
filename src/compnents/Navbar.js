import React from "react";
import "./Navbar.css";
import Usercard from "./Usercard"
import Notifycard from "./Notifycard"

import { Component } from "react";



class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserCardOn: true,
      isNotifyCardOn: false,
      display: 'none'
    };

    this.UserCardClick = this.UserCardClick.bind(this);
    this.NotifyCardClick = this.NotifyCardClick.bind(this);
  }
  UserCardClick() {
    this.setState(prevState => ({
      isUserCardOn: !prevState.isUserCardOn,
      display: prevState.isUserCardOn ? 'none' : 'block'
    }));

  }
  NotifyCardClick() {
    this.setState(prevState1 => ({
      isNotifyCardOn: !prevState1.isNotifyCardOn,
      display: prevState1.isNotifyCardOn ? 'none' : 'block'
    }));

  }
  render() {
    return (
      <div>

        <div className="d-flex justify-content-center mt-5 topbar">
          <img
            src={require("../Image/bell.png").default}
            alt="bell"
            width="25px" height="25px"
            className="mt-2"
            onClick={() => this.NotifyCardClick()}
          />
          <div style={{ display: this.state.display }}>
            <Notifycard />
          </div>
          <div className="d-flex flex-column">
            <img
              src={require("../Image/user.png").default}
              alt="user"
              width="55px" height="55px"
              className=" mt-4"
              onClick={() => this.UserCardClick()}
            />
            <div style={{ display: this.state.display }}>
              <Usercard />
            </div>

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
            <a href="#/Financial/statements">財務管理</a>
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
