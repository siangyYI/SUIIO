import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../Meeting/Management/css/reconder.css";
import arrow_icon from "../../../Image/arrow_icon.png";
import MessageTable from "../FrontFinancial/Income/Message";
import { thisExpression } from "@babel/types";
import { Container } from "reactstrap";

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
    await fetch(`http://localhost:4000/api/conference/fetch/content/${id}`)
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
    let attend = [];
    this.state.attendees.forEach((element, index) => {
      attend.push(element + ",");
      // if ((index + 1) % 4 == 0 && index != 0) {
      //   attend.push(<br />);
      // }
    });
    let absent = [];
    this.state.absentees.forEach((element, index) => {
      absent.push(element + ",");
      // if ((index + 1) % 4 == 0 && index != 0) {
      //   absent.push(<br />);
      // }
    });
    let URIcategory = this.state.category;
    let category;
    if (URIcategory == "籃球比賽") {
      URIcategory = "一般項目";
      category = (
        <div
          className="host badge badge-secondary"
          style={{ backgroundColor: "#ae714f", color: "#e6ddd8" }}
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
        <Link to="/MeetIndex">
          <img
            src={arrow_icon}
            alt="arrow_icon"
            width="30pt"
            height="30pt"
            className="mt-3 ml-4"
          />
        </Link>
        {/* Back Arrow*/}
        <Container>
          <div className="meetingcontent mt-3">
            <div className="pt-4 mx-4 d-flex justify-content-between">
              <div className="d-flex">
                <div className="text-right" style={{ display: "inline-block" }}>
                  {category}
                </div>
                <h1
                  className="mx-3 font-weight-bold"
                  style={{
                    color: "#583f00",
                    fontWeight: "600",
                    marginTop: "-10%!important",
                  }}
                >
                  {this.state.name}
                </h1>
              </div>

              <div
                className="text-left mx-3"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#5c5c5c",
                }}
              >
                {this.state.date}
              </div>
            </div>

            <div className="row">
              <div className="d-flex flex-row bd-highlight mb-3 mt-4" >
                <div className="mb-2 absentt ml-4">
                  主席：
                  <span className="attend">{this.state.host}</span>
                </div>
                <div className="mb-2  absentt ml-5">
                  出席者：<span className="attend">{attend}</span>
                </div>
                <div className=" mb-2  absentt_2 ml-5">
                  缺席者：<span className="attend_2">{absent}</span>
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
            <MessageTable />
          </div>
        </Container>
      </>
    );
  }
}
