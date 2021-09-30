import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import MessageTable from "./Message";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import arrow_icon from "../../../../Image/arrow_icon.png";
import { IncomeImg } from "./Income_Img";
import { Button } from "reactstrap";

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
      amount = <h5 style={{ color: "red" }}>${this.state.content.amount}元</h5>;
    } else if (this.state.content.amount > 0) {
      amount = <h style={{ color: "green" }}>${this.state.content.amount}元</h>;
    }

    return (
      <>
        <Link to="/IncomeIndex">
          <img
            src={arrow_icon}
            alt="arrow_icon"
            width="30pt"
            height="30pt"
            className="mt-3 ml-4"
          />
        </Link>{" "}
        <Container>
          <Card className="row p-5">
            <img
              src={require("../../../../Image/711.png").default}
              // src={this.state.content.receipt}
              alt="cancel"
              className="mr-3 col-3"
              style={{ border: "3px solid black", borderRadius: "5px" }}
              onClick={() => this.setState({ AddImg: true })}
            />

            <Box className="col">
              <div
                className="row d-flex bd-highlight"
                style={{ height: "35%" }}
              >
                <div className="col">
                  <p className="font-weight-bold">收支名稱</p>
                  <h2>{this.state.content.name}</h2>
                </div>
                <div className="col text-left pt-2">
                  <p className="font-weight-bold">活動類別</p>
                  <h4>{this.state.content.category}</h4>
                </div>
                <div className="col text-left pt-2">
                  <p className="font-weight-bold">活動日期</p>
                  <h4>{this.state.content.date}</h4>
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col">
                  <p className="font-weight-bold">備註</p>
                  <h5>{this.state.content.content}</h5>
                </div>
                <div className="col sticky-bottom">
                  <h5 className="text-right">{amount}</h5>

                  <h5 className=" text-right font-weight-bold">
                    申請人：{this.state.content.uploadBy}
                  </h5>
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
