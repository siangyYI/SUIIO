import React, { Component } from "react";
import { Income_Card } from "./Income_Card";
export class Income_Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: [],
      selected: {},
      content: {},
      pages: []
    };
    this.update();
  }
  update = () => {
    fetch("http://localhost:4000/api/account/fetch/all")
      .then((res) => res.json())
      .then((data) => this.setState({ account: data }));
  };
  componentDidMount() {
    this.setState({
      pages: this.state.account.reduce((arr, value, key) => {
        let cnt = 0
        if (key % 16 === 0) {
          arr.push([value])
          cnt++
        } else {
          arr[cnt].push(value)
        }
        return arr
      }, [])
    })

  }
  render() {
    return (
      <>
        <div className="mx-5 d-md-flex content mt-md-3">
          <div>
            <select
              className="Dropdown ml-md-3 px-md-2"
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

          <h4 className="dropdownfont">
            請選擇日期區間
          </h4>
          <div className="d-flex">
            <input
              id="date"
              type="date"
              className="Dropdown ml-md-3 px-md-2"
              style={{ margin: "0" }}
            ></input>
            <h3 style={{ marginLeft: "1%", marginRight: '1%' }}>-</h3>

            <input
              id="date"
              type="date"
              className="Dropdown ml-md-3 px-md-2"
              style={{ margin: "0" }}
            ></input>
          </div>
        </div>
        <div className="row mt-2 px-5">
          {this.state.account.map((x) => (
            // eslint-disable-next-line react/jsx-pascal-case
            <Income_Card account={x} />
          ))
          }
          {
            console.log(this.state.pages)
          }
        </div>
      </>
    );
  }
}
