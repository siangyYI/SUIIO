import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Search } from "semantic-ui-react";
import "../FrontFinancial/Income/Income.css"

export class Meeting_Card extends Component {
  render() {
    let { conferences } = this.props;
    let category;
    if (conferences.category == "籃球比賽") {
      conferences.category = "一般項目";
      category = (
        <div
          className="host badge badge-secondary"
          style={{ backgroundColor: "#ae714f", color: "#e6ddd8" }}
        >
          {conferences.category}
        </div>
      );
    } else {
      category = (
        <div
          className="host badge badge-secondary"
          style={{ backgroundColor: "#59420a", color: 'white' }}
        >
          {conferences.category}
        </div>
      );
    }
    return (
      <div className="col-sm-12 col-md-3 IncomeCard">
        <Link
          to={`/meet/reconder?id=${conferences.ID}`}
        >
          <Card
            style={{
              border: "2px solid #9e9e9e",
              backgroundColor: "#ffd679",
            }}
            className="mt-5"
          >
            <div className="row">
              <div className="col text-left date py-3">{category}</div>
              <div className="text-right mx-3 date py-3">
                {conferences.date}
              </div>
            </div>
            <Card.Body className="meeting col">
              <Card.Title className="title px-4 pb-2 my-1">
                {conferences.name}
              </Card.Title>
              <Card.Subtitle className="mb-2 ">
                <h5
                  style={{
                    color: "#2f553f",
                    textAlign: "right",
                    marginRight: "10px",
                  }}
                >
                  主席：{conferences.host}
                </h5>
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Link>
      </div>
    );
  }
}
