import React from "react";
import "../Navbar.css";
import FrontUsercard from "./Frontusercard";

import { Component } from "react";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserCardOn: true,
      display: 'none'
    };

    this.UserCardClick = this.UserCardClick.bind(this);
    
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
          <div className="d-flex flex-column">
            <img
              src={require("../../Image/user.png").default}
              alt="user"
              width="55px" height="55px"
              className=" mt-4"
              onClick={() => this.UserCardClick()}
            />
            <div style={{ display: this.state.display }}>
              <FrontUsercard />
            </div>

          </div>
        </div>
        <aside>
          <div className="my-4">
            <img
              src={require("../../Image/income.png").default}
              alt="cancel"
              style={{ width: "30pt", height: "30pt" }}
            />
            <br />
            <a href="#/IncomeIndex">收支紀錄</a>
          </div>
          <div className="my-4">
            <img
              src={require("../../Image/graph.png").default}
              alt="cancel"
              style={{ width: "30pt", height: "30pt" }}
            />
            <br />
            <a href="#/Front/Financial/Index">財務報表</a>
          </div>
          <div className="my-4">
            <img
              src={require("../../Image/analytics.png").default}
              alt="cancel"
              style={{ width: "30pt", height: "30pt" }}
            />
            <br />
            <a href="#/ChartIndex">統計圖表</a>
          </div>
          <div className="my-4">
            <img
              src={require("../../Image/compare.png").default}
              alt="cancel"
              style={{ width: "30pt", height: "30pt" }}
            />
            <br />
            <a href="#/">歷年比較</a>
          </div>
          <div className="my-4">
            <img
              src={require("../../Image/meeting.png").default}
              alt="cancel"
              style={{ width: "30pt", height: "30pt" }}
            />
            <br />
            <a href="#/Front/Index">會議記錄</a>
          </div>
        </aside>


      </div>
    );
  }

}
export default NavBar;
