import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import MessageTable from "./Message";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import arrow_icon from "../../../../Image/arrow_icon.png";
import { IncomeImg } from "./Income_Img";
import "./Income.css";

export class Income_Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      AddImg: false,
    };
  }

  fetchContent = async (id) => {
    await fetch(`http://localhost:4000/api/account/fetch/id/${id}`)
      .then((res) => res.json())
      .then((data) => this.setState({ content: data[0] }));
    // console.log(this.state.content);
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ID = query.get("ID");
    // console.log(ID)
    this.fetchContent(ID);
  }

  render() {
    let amount;
    if (this.state.content.amount < 0) {
      amount = (
        <h1 style={{ color: "red" }}>
          -NT$ &nbsp;
          {Number(
            parseFloat(Math.abs(this.state.content.amount)).toFixed(3)
          ).toLocaleString("en", {
            minimumFractionDigits: 0,
          })}
        </h1>
      );
    } else if (this.state.content.amount > 0) {
      amount = (
        <h1 style={{ color: "green" }}>
          NT$ &nbsp;
          {Number(
            parseFloat(this.state.content.amount).toFixed(3)
          ).toLocaleString("en", {
            minimumFractionDigits: 0,
          })}
        </h1>
      );
    }
    let category;
    if (this.state.content.category === "其他項目") {
      // eslint-disable-next-line react/no-direct-mutation-state
      this.state.content.category = "一般項目";
      category = (
        <div
          className="host badge badge-secondary"
          style={{ backgroundColor: "#ae714f", color: "white" }}
        >
          {this.state.content.category}
        </div>
      );
    } else {
      category = (
        <div
          className="host badge badge-secondary"
          style={{ backgroundColor: "#59420a", color: "white" }}
        >
          {this.state.content.category}
        </div>
      );
    }
    return (
      <>
        <Link to="/income">
          <img
            src={arrow_icon}
            alt="arrow_icon"
            width="30pt"
            height="30pt"
            className="mt-3 ml-4"
          />
        </Link>{" "}
        <Container>
          <Card className="row p-5" style={{ backgroundColor: "#f0db8e" }}>
            {/* eslint-disable-next-line react/jsx-no-duplicate-props*/}
            <div className="col-5" className="Income">
              <img
                src={require("../../../../Image/711.png").default}
                // src={this.state.content.receipt}
                alt="cancel"
                className=""
                style={{
                  border: "3px solid black",
                  borderRadius: "5px",
                  backgroundColor: "white",
                  minWidth: "250px",
                }}
                onClick={() => this.setState({ AddImg: true })}
              />
            </div>
            <Box className="col">
              <div
                className="row d-flex bd-highlight"
                style={{ height: "28%" }}
              >
                <div className="col">
                  <div className="row my-2">
                    {category}
                    <h4
                      className="col font-weight-bold text-right"
                      style={{ color: "#757575" }}
                    >
                      {this.state.content.date}
                    </h4>
                  </div>
                  <h1 className="font-weight-bold" style={{ color: "#583f00" }}>
                    {this.state.content.name}
                  </h1>
                </div>
              </div>
              <hr />

              <div className="">
                <div className="">
                  <h4 className="font-weight-bold">備註</h4>
                  <div
                    className="p-3 mt-2"
                    style={{
                      backgroundColor: "white",
                      height: "10rem",
                      borderRadius: "5px",
                    }}
                  >
                    <h5>{this.state.content.content}</h5>
                  </div>
                </div>
                <div className="row">
                  <h4 className="col text-left font-weight-bold pt-4">
                    申請人：{this.state.content.uploadBy}
                  </h4>

                  <div className="col pt-2">
                    <h3 className="text-right">{amount}</h3>
                  </div>
                </div>
              </div>
            </Box>
          </Card>
          <div className="my-4">
            <MessageTable />
          </div>
          <IncomeImg
            show={this.state.AddShow}
            onHide={() => this.setState({ AddShow: false })}
          />
        </Container>
      </>
    );
  }
}
