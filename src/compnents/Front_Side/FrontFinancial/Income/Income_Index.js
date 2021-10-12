import React, { Component } from "react";
import { Income_Card } from "./Income_Card";

export class Income_Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: [],
      selected: {},
      content: {},
      ContentShow: false,
      AddShow: false,
      review: false,
    };
    this.update();
  }
  update = () => {
    fetch("http://localhost:4000/api/account/fetch/all")
      .then((res) => res.json())
      .then((data) => this.setState({ account: data }));
  };

  render() {
    return (
      <>
        <div className="my-3 mx-5 d-flex mt-5">
          <div>
            <select
              className="Dropdown ml-3 px-2"
              style={{
                borderRadius: "10px",
                height: "2em",
                backgroundColor: "white",
              }}
            >
              <option value="none">--請選擇活動類別--</option>
              <option value="grapefruit">大迎新</option>
              <option value="lime">民歌</option>
              <option value="coconut">送舊</option>
              <option value="mango">資管周</option>
            </select>
          </div>

          <h4 style={{ marginTop: "8px", fontSize: "18px", marginLeft: "2%" }}>
            請選擇日期區間
          </h4>

          <input
            id="date"
            type="date"
            className="Dropdown ml-3 px-2"
            style={{ margin: "0" }}
          ></input>
          <h3 style={{ marginLeft: "1%" }}>-</h3>

          <input
            id="date"
            type="date"
            className="Dropdown ml-3 px-2"
            style={{ margin: "0" }}
          ></input>
        </div>
        <div className="row mt-2 px-5">
          {this.state.account.map((x) => (
            <Income_Card account={x} />
          ))}
        </div>
      </>
    );
  }
}
