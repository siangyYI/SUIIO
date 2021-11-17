import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../styles/reconder.css";
import arrow_icon from "../../../Image/arrow_icon.png";
import MessageTable from "../FrontFinancial/Income/Message";
import { Container } from "reactstrap";
import { textAlign } from "@mui/system";

export class reconder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id: {},
      host: "",
      date: "",
      category: "",
      content: [],
      absentees: [],
      attendees: [],
    };
  }
  fetchContent = async (id) => {
    await fetch(
      `http://${process.env.REACT_APP_DOMAIN}:${process.env.REACT_APP_PORT}/api/conference/fetch/content/${id}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ content: data[0] }));
  };

  async componentDidMount() {
    let ary1 = [];
    let ary2 = [];
    let ary3 = [];

    let category = [];
    let url = window.location.href;
    if (url.indexOf("?") !== -1) {
      ary1 = url.split("?");
      ary2 = ary1[1].split("&");
      ary3 = ary2[0].split("=");

      this.setState({ id: ary3[1] });
      this.setState({ category: category[1] });
    }
    await this.fetchContent(ary3[1]);
    this.setState({ date: this.state.content.date });
    this.setState({ host: this.state.content.host });
    this.setState({ name: this.state.content.name });
    this.setState({ category: this.state.content.category });
    this.setState({ absentees: this.state.content.absentees });
    this.setState({ attendees: this.state.content.attendees });
  }

  render() {
    console.log(this.state.content);
    let attend = [];
    this.state.attendees.forEach((element, index) => {
      attend.push(
        element + (this.state.attendees.length - 1 === index ? "" : ",")
      );
      if ((index + 1) % 5 === 0 && index !== 0) {
        attend.push(<br />);
      }
    });
    let absent = [];
    this.state.absentees.forEach((element, index) => {
      absent.push(
        element + (this.state.absentees.length - 1 === index ? "" : ",")
      );
      if ((index + 1) % 5 === 0 && index !== 0) {
        absent.push(<br />);
      }
    });
    let URIcategory = this.state.category;
    let category;
    if (URIcategory === "籃球比賽") {
      URIcategory = "一般項目";
      category = (
        <div
          className="host badge badge-secondary"
          style={{ backgroundColor: "#ae714f", color: "white" }}
        >
          {URIcategory}{" "}
        </div>
      );
    } else {
      category = (
        <div
          className="host badge badge-secondary"
          style={{ backgroundColor: "#59420a", color: "white" }}
        >
          {URIcategory}{" "}
        </div>
      );
    }
    return (
      <>
        <Link to="/meet">
          <img
            src={arrow_icon}
            alt="arrow_icon"
            width="30pt"
            height="30pt"
            className="arrow"
          />
        </Link>
        {/* Back Arrow*/}
        <Container>
          <div className="meetingcontent mt-3">
            <div className="pt-4 mx-4 ">
              <div className="row my-2">
                <div className="" style={{ display: "inline-block" }}>
                  {category}
                </div>
                <h1
                  className="col font-weight-bold"
                  style={{
                    color: "#583f00",
                    fontWeight: "600",
                    marginTop: "-10%!important",
                  }}
                >
                  {this.state.name}
                </h1>
                <div className="col reconder_date">{this.state.date}</div>
              </div>
            </div>
            <div className="mx-4">
              <div className="row">
                <div className="col-md-2 mb-2 absentt">
                  主席：
                  <span className=" attend">{this.state.host}</span>
                </div>
                <div className="col-md-5 mb-2  absentt ">
                  出席者：<span className="attend">{attend}</span>
                </div>
                <div className="col-md-5 mb-2  absentt_2 ">
                  缺席者：<span className=" attend_2">{absent}</span>
                </div>
              </div>
            </div>
          </div>

          {/*會議內容*/}
          <div className="textcontent my-3 overflow-auto">
            <div class="overflow-auto py-4 textmeeting px-4">
              {this.state.content.content}
            </div>
          </div>

          <div className="my-3 mx-md-auto overflow-autop-0">
            <MessageTable data={this.state.id} table="conference" />
          </div>
        </Container>
      </>
    );
  }
}
