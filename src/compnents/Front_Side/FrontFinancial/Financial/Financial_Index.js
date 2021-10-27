import React, { Component } from "react";

import { Financial_Card } from "./Financial_Card";

export class Financial_Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      statements: [],
      selected: {},
      accounts: [],
      ContentShow: false,
      class: "",
      AddShow: false,
      review: false
    }
    this.update()
  }

  update = () => {
    fetch('http://localhost:4000/api/statement/fetch/all')
      .then((res) => res.json())
      .then((data) => this.setState({ statements: data }))
  }

  fetchContent = async (id) => {
    await fetch(`http://localhost:4000/api/statement/fetch/id/${id}`)
      .then((res) => res.json())
      .then((data) => this.setState({ accounts: data }))
  }
  render() {
    return (
      <>
        <div className="mx-5 d-md-flex content  mt-md-3">
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
          <div className="dropdownfont">
            請選擇日期區間
          </div>
          <div className="d-flex">
            <input id="date" type="date" className="Dropdown ml-md-3 px-md-2" style={{ margin: '0' }}></input>
            <h3 style={{ marginLeft: '1%', marginRight: '1%' }}>
              -
            </h3>
            <input id="date" type="date" className="Dropdown ml-md-3 px-md-2" style={{ margin: '0' }}></input>
          </div>
        </div>
        <div className="row mt-2 px-5">
          {this.state.statements.map((x) => (
            // eslint-disable-next-line react/jsx-pascal-case
            <Financial_Card statements={x} />
          ))}
        </div>
      </>
    )
  }

}