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
    fetch("http://localhost:4000/api/conference/fetch/all")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ conferences: data });
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
<<<<<<< HEAD
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
              style={{ position: "absolute", right: "0px", color: "white" }}
            >
              <ButtonGroup className="mr-2" aria-label="First group">
                <Button
                  style={{ backgroundColor: '#d8936c', borderColor: '#d8936c', color: 'white' }}
=======
            <input id="date" type="date" className="Dropdown ml-md-3 px-md-2" style={{ margin: '0' }}></input>
            <h3 style={{ marginLeft: '1%', marginRight: '1%' }}>
              -
            </h3>
            <input id="date" type="date" className="Dropdown ml-md-3 px-md-2" style={{ margin: '0' }}></input>
            <ButtonToolbar className="mx-5" style={{ position: "absolute", right: "0px" }}>
              <ButtonGroup className="mr-2" aria-label="First group">
                <Button
                  style={{ backgroundColor: '#d8936c', borderColor: '#d8936c', color: 'white' }}
                  variant=""
>>>>>>> aeddaa390e0ac966b164dda74d03265aaa31dee3
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
<<<<<<< HEAD
                  style={{
                    backgroundColor: "#d8936c !important",
                    borderColor: "#d8936c !important",
                    color: "white !important",
                  }}
=======
                  style={{ backgroundColor: '#d8936c !important', borderColor: '#d8936c !important', color: 'white !important' }}
>>>>>>> aeddaa390e0ac966b164dda74d03265aaa31dee3
                >
                  {this.state.pages.map((v, i) => {
                    return (
                      <Dropdown.Item
<<<<<<< HEAD
                        style={{
                          backgroundColor: "#d8936c",
                          borderColor: "#d8936c",
                          color: "white",
                          padding: "0 !important",
                        }}
=======
                        style={{ backgroundColor: '#d8936c', borderColor: '#d8936c', color: 'white', padding: "0 !important" }}
>>>>>>> aeddaa390e0ac966b164dda74d03265aaa31dee3
                        active={this.state.pagenumber === i}
                        onClick={() => this.setState({ pagenumber: i })}
                      >
                        {i + 1}
                      </Dropdown.Item>
                    );
                  })}
                </DropdownButton>
                <Button
<<<<<<< HEAD
                  style={{
                    backgroundColor: "#d8936c",
                    borderColor: "#d8936c",
                    color: "white",
                  }}
=======
                  style={{ backgroundColor: '#d8936c', borderColor: '#d8936c', color: 'white' }}
>>>>>>> aeddaa390e0ac966b164dda74d03265aaa31dee3
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
<<<<<<< HEAD
          {this.state.pages.length ? (
            this.state.pages[this.state.pagenumber].map((x) => (
              // eslint-disable-next-line react/jsx-pascal-case
              <Meeting_Card conferences={x} />
            ))
          ) : (
            <div>"No Data"</div>
          )}
=======
          {this.state.pages?.length
            ? this.state.pages[this.state.pagenumber].map((x) => (
              // eslint-disable-next-line react/jsx-pascal-case
              <Meeting_Card conferences={x} />
            )) : <div>No Data</div>}
>>>>>>> aeddaa390e0ac966b164dda74d03265aaa31dee3
        </div>
      </>
    );
  }
}
