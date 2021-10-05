import React from "react";
import "../Navbar.css";
import FrontUsercard from "./Frontusercard";
import { Component, useEffect } from "react";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserCardOn: true,
      display: "none",

    };

    this.UserCardClick = this.UserCardClick.bind(this);
  }
  relo=()=>{
    
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
    ary1 = url.split("/");
    aryf = ary1[4];
    console.log(aryf)
    let nav;
    if (aryf == "IncomeIndex") {
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
    } if (aryf == "FinancialIndex") {
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
    } if (aryf == "MeetIndex") {
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
          <div className="d-flex flex-column">
            <img
              src={require("../../Image/user.png").default}
              alt="user"
              width="55px"
              height="55px"
              className=" mt-4"
              onClick={() => this.UserCardClick()}
            />
            <div style={{ display: this.state.display }}>
              <FrontUsercard />
            </div>
          </div>
        </div>
        {nav }

      </div>
    );
  }
}
export default NavBar;
