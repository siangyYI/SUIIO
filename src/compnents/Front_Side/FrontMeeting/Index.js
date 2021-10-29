import React, { Component } from "react";
import "../../../styles/Index.css";
import Pagination from '@mui/material/Pagination';
import { Meeting_Card } from "./Meeting_Card";
export class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conferences: [],
      selected: {},
      content: {},
      ContentShow: false,
      AddShow: false,
      review: false,
      offset: 0
    };
    this.update();
  }
  handleClick(offset) {
    this.setState({ offset });
  }
  update = () => {
    fetch("http://localhost:4000/api/conference/fetch/all")
      .then((res) => res.json())
      .then((data) => this.setState({ conferences: data }));
  };

  render() {
    return (
      <>
        <Pagination
          limit={10}
          offset={this.state.offset}
          total={100}
          onClick={(e, offset) => this.handleClick(offset)}
        />
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
          {this.state.conferences.map((x) => (
            // eslint-disable-next-line react/jsx-pascal-case
            <Meeting_Card conferences={x} />
          ))}
        </div>
      </>
    );
  }
}
