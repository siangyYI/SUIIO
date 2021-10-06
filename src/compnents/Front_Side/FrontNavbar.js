import React from "react";
import "../Navbar.css";
import FrontUsercard from "./Frontusercard";
import { Component, useEffect } from "react";
import Bell from "../bell";
import User from "../user";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserCardOn: true,
      display: "none",

    };

    this.UserCardClick = this.UserCardClick.bind(this);
  }
  relo = () => {

    // window.setTimeout(function(){ document.location.reload(true); }, 5000);
  }

  UserCardClick() {
    this.setState((prevState) => ({
      isUserCardOn: !prevState.isUserCardOn,
      display: prevState.isUserCardOn ? "none" : "block",
    }));
  }
  render() {

    let url = window.location.href;
    let ary1 = [];
    let aryf = [];
    let reary = [];
    ary1 = url.split("/");
    aryf = ary1[4];
    reary = aryf.split("?");
    console.log(aryf);
    console.log(reary);
    let nav;
    if (aryf == "IncomeIndex" || reary[0] == "Incomedetail") {
      this.relo()
      nav = (
        <aside>
          <div className="my-4" onClick={this.relo()}>
            <a href="#/IncomeIndex" >
              <img
                src={require("../../Image/income.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>收支紀錄</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }} onClick={this.relo()}>
            <a href="#/FinancialIndex" >
              <img
                src={require("../../Image/graph.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>財務報表</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }} onClick={this.relo()}>
            <a href="#/ChartIndex" >
              <img
                src={require("../../Image/analytics.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>統計圖表</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }} onClick={this.relo()}>
            <a href="#/CompareIndex" >
              <img
                src={require("../../Image/compare.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>歷年比較</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }} onClick={this.relo()}>
            <a href="#/MeetIndex" >
              <img
                src={require("../../Image/meeting.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>會議記錄</div>
            </a>
          </div>
        </aside>

      );
    } if (aryf == "FinancialIndex" || reary[0] == "detail") {
      nav = (
        <aside>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }} onClick={this.relo()}>
            <a href="#/IncomeIndex">
              <img
                src={require("../../Image/income.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>收支紀錄</div>
            </a>
          </div>
          <div className="my-4" onClick={this.relo()}>
            <a href="#/FinancialIndex" >
              <img
                src={require("../../Image/graph.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>財務報表</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }} onClick={this.relo()}>
            <a href="#/ChartIndex">
              <img
                src={require("../../Image/analytics.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>統計圖表</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }} onClick={this.relo()}>
            <a href="#/CompareIndex">
              <img
                src={require("../../Image/compare.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>歷年比較</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }} onClick={this.relo()} >
            <a href="#/MeetIndex">
              <img
                src={require("../../Image/meeting.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>會議記錄</div>
            </a>
          </div>
        </aside>

      );
    } if (aryf == "ChartIndex") {
      nav = (
        <aside>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }} onClick={this.relo()}>
            <a href="#/IncomeIndex" >
              <img
                src={require("../../Image/income.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>收支紀錄</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }} onClick={this.relo()}>
            <a href="#/FinancialIndex" >
              <img
                src={require("../../Image/graph.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>財務報表</div>
            </a>
          </div>
          <div className="my-4" onClick={this.relo()}>
            <a href="#/ChartIndex" >
              <img
                src={require("../../Image/analytics.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>統計圖表</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }} onClick={this.relo()}>
            <a href="#/CompareIndex" >
              <img
                src={require("../../Image/compare.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>歷年比較</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }} onClick={this.relo()}>
            <a href="#/MeetIndex " >
              <img
                src={require("../../Image/meeting.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>會議記錄</div>
            </a>
          </div>
        </aside>

      );
    } if (aryf == "CompareIndex") {
      this.relo();
      nav = (

        <aside>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }} onClick={this.relo()}>
            <a href="#/IncomeIndex" >
              <img
                src={require("../../Image/income.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>收支紀錄</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }} onClick={this.relo()}>
            <a href="#/FinancialIndex">
              <img
                src={require("../../Image/graph.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>財務報表</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }} onClick={this.relo()}>
            <a href="#/ChartIndex" >
              <img
                src={require("../../Image/analytics.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>統計圖表</div>
            </a>
          </div>
          <div className="my-4" onClick={this.relo()}>
            <a href="#/CompareIndex" >
              <img
                src={require("../../Image/compare.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>歷年比較</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }} onClick={this.relo()}>
            <a href="#/MeetIndex">
              <img
                src={require("../../Image/meeting.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>會議記錄</div>
            </a>
          </div>
        </aside>

      );
    } if (aryf == "MeetIndex" || reary[0] == "reconder") {
      nav = (
        <aside>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }} onClick={this.relo()}>
            <a href="#/IncomeIndex">
              <img
                src={require("../../Image/income.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>收支紀錄</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }} onClick={this.relo()}>
            <a href="#/FinancialIndex" >
              <img
                src={require("../../Image/graph.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>財務報表</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }} onClick={this.relo()}>
            <a href="#/ChartIndex" >
              <img
                src={require("../../Image/analytics.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>統計圖表</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }} onClick={this.relo()}>
            <a href="#/CompareIndex" >
              <img
                src={require("../../Image/compare.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>歷年比較</div>
            </a>
          </div>
          <div className="my-4" >
            <a href="#/MeetIndex" >
              <img
                src={require("../../Image/meeting.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>會議記錄</div>
            </a>
          </div>
        </aside>

      );
    }

    return (
      <div>
        <div className="d-flex justify-content-center mt-5 topbar">
          <Bell />
          <div className="d-flex flex-column">
            <User />
          </div>
        </div>

        {nav}

      </div>
    );
  }
}
export default NavBar;
