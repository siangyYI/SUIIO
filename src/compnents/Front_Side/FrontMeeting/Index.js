import React, { Component } from "react";
import "../../../styles/Index.css";
import {
  Button,
  ButtonToolbar,
  ButtonGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
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
      offset: 0,
      pages: [],
      pagenumber: 0,
    };
    this.update();
  }
  handleClick(offset) {
    this.setState({ offset });
  }
  update = () => {
    fetch(
      `http://${process.env.REACT_APP_DOMAIN}:${process.env.REACT_APP_PORT}/api/conference/fetch/status/1`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ conferences: data });
        let cnt = 0;
        const pages = [];
        console.log(this.state.conferences);
        this.state.conferences?.length
          ? data.reduce(
              (arr, v, k) => {
                const n = k % 16;
                if (n) {
                  arr[cnt][n] = v;
                } else {
                  cnt++;
                  arr = [...arr, [v]];
                }
                return arr;
              },
              [[]]
            )
          : this.setState({ conferences: [] });
        pages.shift();
        this.setState({ pages });
      });
  };
  componentDidMount() {
    this.setState({
      pages: this.state.conferences.reduce((value, key, arr) => {
        let cnt = 0;
        if (key % 16 === 0) {
          arr.push([value]);
          cnt++;
        } else {
          arr[cnt].push(value);
        }
        return arr;
      }, []),
    });
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

          <div className="dropdownfont">請選擇日期區間</div>
          <div className="d-flex">
            <input
              id="date"
              type="date"
              className="Dropdown ml-md-3 px-md-2"
              style={{ margin: "0" }}
            ></input>
            <h3 style={{ marginLeft: "1%", marginRight: "1%" }}>-</h3>
            <input
              id="date"
              type="date"
              className="Dropdown ml-md-3 px-md-2"
              style={{ margin: "0" }}
            ></input>
            <ButtonToolbar
              className="mx-5"
              style={{ position: "absolute", right: "0px" }}
            >
              <ButtonGroup className="mr-2" aria-label="First group">
                <Button
                  style={{
                    backgroundColor: "#d8936c",
                    borderColor: "#d8936c",
                    color: "white",
                  }}
                  variant=""
                  onClick={() => {
                    if (this.state.pagenumber)
                      this.setState({ pagenumber: this.state.pagenumber - 1 });
                  }}
                >
                  &lt;
                </Button>
                <DropdownButton
                  as={ButtonGroup}
                  title={`${this.state.pagenumber + 1} `}
                  style={{
                    backgroundColor: "#d8936c !important",
                    borderColor: "#d8936c !important",
                    color: "white !important",
                  }}
                >
                  {this.state.pages.map((v, i) => {
                    return (
                      <Dropdown.Item
                        style={{
                          backgroundColor: "#d8936c",
                          borderColor: "#d8936c",
                          color: "white",
                          padding: "0 !important",
                        }}
                        active={this.state.pagenumber === i}
                        onClick={() => this.setState({ pagenumber: i })}
                      >
                        {i + 1}
                      </Dropdown.Item>
                    );
                  })}
                </DropdownButton>
                <Button
                  style={{
                    backgroundColor: "#d8936c",
                    borderColor: "#d8936c",
                    color: "white",
                  }}
                  variant="secondary"
                  onClick={() => {
                    if (this.state.pagenumber < this.state.pages.length - 1)
                      this.setState({ pagenumber: this.state.pagenumber + 1 });
                  }}
                >
                  &gt;
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
          </div>
        </div>
        <div className="row mt-2 px-5">
          {console.log(this.state.conferences)}
          {this.state.conferences?.length ? (
            this.state.conferences.map((x) => (
              // eslint-disable-next-line react/jsx-pascal-case
              <Meeting_Card conferences={x} />
            ))
          ) : (
            <div>No Data</div>
          )}
        </div>
      </>
    );
  }
}
