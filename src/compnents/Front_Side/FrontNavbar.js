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

    reary = ary1[3].split("?");
    console.log(ary1);

    let nav;
    if (ary1[3] == "income" || reary[0] == "income/detail" || ary1[3] == "") {
      this.relo()
      nav = (
        <aside>
          <div className="my-4" onClick={this.relo()}>
            <a href="/income" >
              <img
                src={require("../../Image/income.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>收支紀錄</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }}>
            <a href="/financial" >
              <img
                src={require("../../Image/graph.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>財務報表</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }}>
            <a href="/chart" >
              <img
                src={require("../../Image/analytics.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>統計圖表</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }}>
            <a href="/compare" >
              <img
                src={require("../../Image/compare.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>歷年比較</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }}>
            <a href="/meet" >
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
    } if (ary1[3] == "financial" || reary[0] == "financial/detail") {
      nav = (
        <aside>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }}>
            <a href="/income">
              <img
                src={require("../../Image/income.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>收支紀錄</div>
            </a>
          </div>
          <div className="my-4">
            <a href="/financial" >
              <img
                src={require("../../Image/graph.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>財務報表</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }}>
            <a href="/chart">
              <img
                src={require("../../Image/analytics.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>統計圖表</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }}>
            <a href="/compare">
              <img
                src={require("../../Image/compare.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>歷年比較</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }}>
            <a href="/meet">
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
    } if (ary1[3] == "chart") {
      nav = (
        <aside>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }}>
            <a href="/income" >
              <img
                src={require("../../Image/income.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>收支紀錄</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }}>
            <a href="/financial" >
              <img
                src={require("../../Image/graph.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>財務報表</div>
            </a>
          </div>
          <div className="my-4">
            <a href="/chart" >
              <img
                src={require("../../Image/analytics.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>統計圖表</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }}>
            <a href="/compare" >
              <img
                src={require("../../Image/compare.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>歷年比較</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }}>
            <a href="/meet" >
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
    } if (ary1[3] == "compare") {
      nav = (
        <aside>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }}>
            <a href="/income" >
              <img
                src={require("../../Image/income.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>收支紀錄</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }} >
            <a href="/financial">
              <img
                src={require("../../Image/graph.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>財務報表</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }}>
            <a href="/chart" >
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
            <a href="/compare" >
              <img
                src={require("../../Image/compare.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>歷年比較</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }}>
            <a href="/meet">
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
    } if (ary1[3] == "meet" || reary[0] == "meet/reconder") {
      nav = (
        <aside>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }}>
            <a href="/income">
              <img
                src={require("../../Image/income.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>收支紀錄</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }}>
            <a href="/financial" >
              <img
                src={require("../../Image/graph.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>財務報表</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }}>
            <a href="/chart" >
              <img
                src={require("../../Image/analytics.png").default}
                alt="cancel"
                style={{ width: "30pt", height: "30pt" }}
              />
              <br />
              <div>統計圖表</div>
            </a>
          </div>
          <div className="my-4" style={{ filter: 'contrast(0.5)' }}>
            <a href="/compare" >
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
            <a href="/meet" >
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
