import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../Meeting/Management/css/reconder.css";
import arrow_icon from "../../../Image/arrow_icon.png";
import MessageTable from "../FrontFinancial/Income/Message";
import { thisExpression } from "@babel/types";



export class reconder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: {},
      id: {},
      content: []
    }

  }
  fetchContent = async (id) => {
    await fetch(`http://localhost:4000/api/conference/fetch/content/${id}`)
      .then((res) => res.json())
      .then((data) => this.setState({ content: data[0] }))
  }

  componentDidMount() {
    let ary1 = [];
    let ary2 = [];
    let ary3 = [];
    let ary4 = [];
    let url = window.location.href;
    if (url.indexOf('?') !== -1) {
      ary1 = url.split('?');
      ary2 = ary1[1].split('&');
      ary3 = ary2[0].split('=');
      ary4 = ary2[1].split('=');
      this.setState({ id: ary3[1] })
      this.setState({ name: ary4[1] })
    }
    this.fetchContent(ary3[1])
  }

  render() {
    return (
      <>

        <Link to="/Front/Index">
          <img
            src={arrow_icon}
            alt="arrow_icon"
            width="30pt"
            height="30pt"
            className="mt-5 ml-4"
          />
        </Link>{/* Back Arrow*/}

        <div className="meetingcontent mt-3  mx-auto col-md-8">
          <div className="row">
            <div className="col-12">
              <div className="my-2 recondertitle"></div>
              <div className="my-2 reconderdate"></div>
            </div>
            <div className="row col-12 my-3 d-flex align-items-center">
              <div className="my-2 col-md-4 reconderhost">
                活動：<div >{decodeURI(this.state.name)}</div>
              </div>
              <div className="my-2 col-md-4 reconderhost">
                出席者：<div>{this.state.content.absentees}</div>
              </div>
              <div className="my-2 col-md-4 reconderhost">
                缺席者：<div>{this.state.content.attendees}</div>
              </div>
            </div>
          </div>
        </div>

        {/*會議內容*/}
        <div className="textcontent my-3 mx-md-auto overflow-auto col-md-8">
          <div class="overflow-auto py-3 text px-3">
            {this.state.content.content}
          </div>
        </div>

        <div className="my-3 mx-md-auto overflow-auto col-md-8 p-0">
          <MessageTable />
        </div>
      </>
    )
  }
}
