import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./Income.css";

export class Income_Card extends Component {
  render() {
    let { account } = this.props;
    let amount;
    if (account.amount < 0) {
      amount = (
        <h1
          style={{
            color: "#cf2626",
            fontSize: "25px",
            textAlign: "right",
            marginRight: "10px",
            fontWeight: "bold",
          }}
        >
          -NT$ &nbsp;
          {Number(parseFloat(Math.abs(account.amount)).toFixed(3)).toLocaleString("en", {
            minimumFractionDigits: 0,
          })}
        </h1>
      );
    } else if (account.amount > 0) {
      amount = (
        <h1
          style={{
            color: "#2f553f",
            fontSize: "25px",
            textAlign: "right",
            marginRight: "10px",
            fontWeight: "bold",
          }}
        >
          NT$ &nbsp;
          {Number(parseFloat(account.amount).toFixed(3)).toLocaleString("en", {
            minimumFractionDigits: 0,
          })}
        </h1>
      );
    }
    let category;
    if (account.category === "其他項目") {
      account.category = "一般項目";
      category = (
        <div
          className="host badge badge-secondary"
          style={{ backgroundColor: "#ae714f", color: "white" }}
        >
          {account.category}
        </div>
      );
    } else {
      category = (
        <div
          className="host badge badge-secondary"
          style={{ backgroundColor: "#59420a", color: "white" }}
        >
          {account.category}
        </div>
      );
    }
    return (
      <div className="col-sm-12 col-md-3  IncomeCard">
        <a href={`/income/detail?ID=${account.ID}`}>
          <Card
            style={{ border: "2px solid #9e9e9e", backgroundColor: "#ffd679" ,marginTop:"30px"}}
            // className="mt-4"
          >
            <div className="row">
              <div className="col text-left date py-3">{category}</div>
              <div className="text-right mx-3 date py-3">{account.date}</div>
            </div>
            <Card.Body className="meeting col">
              <Card.Title className="title px-4 pb-2">
                {account.name}
              </Card.Title>
              <Card.Subtitle className="mb-2  ">
                <h3>{amount}</h3>
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </a>
      </div>
    );
  }
}
