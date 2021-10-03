import React, { Component } from "react";
import { Card } from "react-bootstrap";

export class Income_Card extends Component {
  render() {
    let { account } = this.props;
    let amount;
    if (account.amount < 0) {
      amount = <h1 style={{ color: "#cf2626", fontSize: '18px', marginTop: '36%', marginLeft: '20%', fontWeight: 'bold' }}>${account.amount}元</h1>;
    } else if (account.amount > 0) {
      amount = <h1 style={{ color: "#2f553f", fontSize: '18px', marginTop: '36%', marginLeft: '20%', fontWeight: 'bold' }}>${account.amount}元</h1>;
    }

    return (
      <div className="col-sm-12 col-md-3 pb-2">
        <a href={`#/Incomedetail?ID=${account.ID}`}>
          <Card style={{ border: "2px solid black", backgroundColor: "#d8936c" }} className="my-4">
            <Card.Body className="meeting col">
              <Card.Title className="title px-4 pt-4">
                {account.name}
              </Card.Title>
              <Card.Subtitle className="mb-2 d row">
                <div className="col">
                  <div className="my-2 ml-2 align-self-center date ">
                    {account.date}
                  </div>
                  <div className="ml-2 host badge badge-secondary" style={{backgroundColor:"#135990"}}>
                    {account.category}
                  </div>
                </div>
                <div className="col">{amount}</div>
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </a>
      </div>
    );
  }
}
