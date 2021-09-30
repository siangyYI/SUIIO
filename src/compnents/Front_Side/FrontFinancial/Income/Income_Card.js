import React, { Component } from "react";
import { Card } from "react-bootstrap";

export class Income_Card extends Component {

  render() {
    let { account } = this.props;
    return (
      <div className="col-sm-12 col-md-3 pb-2">
        <a href={ `#/Incomedetail?ID=${account.ID}`}>
          <Card style={{ width: "19rem" }} className="mx-auto mt-3">
            <Card.Body className="meeting">
              <Card.Title className="title px-4 pt-4">
                {account.name}
              </Card.Title>
              <Card.Subtitle className="mb-2 d">
                <div className="mr-md-3 mx-4 pt-2 pt-md-0 align-self-center date ">
                  {account.date}{" "}
                </div>
              </Card.Subtitle>
              <Card.Text>
                <div className="mr-md-3 mx-4 pb-4 pt-2 pt-md-0 align-self-center host">
                  活動:{account.category}
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
      </div>
    );
  }
}
