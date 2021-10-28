import React, { Component } from "react";
import { Container } from "react-bootstrap";
import MessageTable from "../Income/Message"
import { FinancialTable } from "./Financial_Table";
import { Link } from "react-router-dom";
import arrow_icon from "../../../../Image/arrow_icon.png";

export class Financial_Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: {},
    };
  }
  componentDidMount() {
    let ary1 = [];
    let ary2 = [];
    let ary3 = [];
    let url = window.location.href;
    if (url.indexOf("?") !== -1) {
      ary1 = url.split("?");
      ary2 = ary1[1].split("&");
      ary3 = ary2[0].split("=");

      this.setState({ id: ary3[1] });
    }
  }
  render() {
    return (
      <>
        <Link to="/financial">
          <img
            src={arrow_icon}
            alt="arrow_icon"
            width="30pt"
            height="30pt"
            className="arrow"
          />
        </Link>
        <Container>
          <div>
            <FinancialTable data={this.state.id} />
          </div>
          <div className="my-2">
            <MessageTable data={this.state.id}/>
          </div>
        </Container>
      </>
    );
  }
};
