import React, { Component } from "react";
import {
  Button,
  ButtonToolbar,
  ButtonGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { Income_Card } from "./Income_Card";
export class Income_Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: [],
      selected: {},
      content: {},
      pages: [],
      pagenumber: 0,
    };
    this.update();
  }
  update = () => {
    fetch("http://localhost:4000/api/account/fetch/all")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ account: data });
        let cnt = 0;
        const pages = data.reduce(
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
        );
        pages.shift();
        this.setState({ pages });
      });
  };
  componentDidMount() {
    this.setState({
      pages: this.state.account.reduce((value, key, arr) => {
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
          <h4 className="dropdownfont">請選擇日期區間</h4>
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
            <ButtonToolbar className="mx-5" style={{ position: "absolute", right: "0px" }}>
              <ButtonGroup className="mr-2" aria-label="First group" >
                <Button
                  style={{ backgroundColor: '#d8936c', borderColor: '#d8936c', color: 'white' }}
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

                  style={{ backgroundColor: '#d8936c !important', borderColor: '#d8936c !important', color: 'white !important' }}
                >
                  {this.state.pages.map((v, i) => {
                    return (
                      <Dropdown.Item
                        style={{ backgroundColor: '#d8936c', borderColor: '#d8936c', color: 'white' }}
                        active={this.state.pagenumber === i}
                        onClick={() => this.setState({ pagenumber: i })}
                      >
                        {i + 1}
                      </Dropdown.Item>
                    );
                  })}
                </DropdownButton>
                <Button
                  style={{ backgroundColor: '#d8936c', borderColor: '#d8936c', color: 'white' }}
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
          </div>{" "}

        </div>{" "}
        <div className="row mt-2 px-5">
          {this.state.pages?.length
            ? this.state.pages[this.state.pagenumber].map((x) => (
              // eslint-disable-next-line react/jsx-pascal-case
              <Income_Card account={x} />
            ))
            : "No Data"}
        </div>
      </>
    );
  }
}
