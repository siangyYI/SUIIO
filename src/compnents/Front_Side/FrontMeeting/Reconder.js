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
      name: {},
      id: {},
      date: {},
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
    let ary4 = [];
    let url = window.location.href;
    if (url.indexOf("?") !== -1) {
      ary1 = url.split("?");
      ary2 = ary1[1].split("&");
      ary3 = ary2[0].split("=");
      ary4 = ary2[1].split("=");
      this.setState({ id: ary3[1] });
      this.setState({ name: ary4[1] });
    }
    await this.fetchContent(ary3[1]);
    this.setState({ absentees: this.state.content.absentees });
    this.setState({ attendees: this.state.content.attendees });
  }

  render() {
    let attend = [];
    this.state.attendees.forEach((element, index) => {
      attend.push(element + " ");
      if ((index + 1) % 4 == 0 && index != 0) {
        attend.push(<br />);
      }
    });
    let absent = [];
    this.state.absentees.forEach((element, index) => {
      absent.push(element + " ");
      if ((index + 1) % 4 == 0 && index != 0) {
        absent.push(<br />);
      }
    });
    return (
      <>
        <Link to="/Front/Index">
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
            <div className="row">
              <div className="row col-12 my-3 d-flex align-items-center">
                <h2 className="my-2 col-md-4" style={{ color: "#01597f", fontWeight: "bold", marginTop: "-10%!important" }}>
                  <div>{decodeURI(this.state.name)}
                  {alert(this.state.date)}
                  </div>
                </h2>
                <div className="my-2 col-md-4 absentt">
                  主席：<div className="attend">會長</div>
                  <div></div>
                </div>
                <div className="my-2 col-md-4 absentt">
                  出席者：<div className="attend">{attend}</div>
                  <div></div>
                </div>
                <div className="my-2 col-md-4 absentt">
                  缺席者：<div className="attend_2">{absent}</div>
                </div>
              </div>
            </div>
          </div>

          {/*會議內容*/}
          <div className="textcontent my-3 overflow-auto">
            <div class="overflow-auto py-4 text px-4">
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
