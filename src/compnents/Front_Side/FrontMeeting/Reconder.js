import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../Meeting/Management/css/reconder.css";
import arrow_icon from "../../../Image/arrow_icon.png";
import MessageTable from "../FrontFinancial/Income/Message";

export class reconder extends Component {
  updateStatus = (id, status) => {
    fetch('http://localhost:4000/api/conference/update/status', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ id, status }),
    }).then((resp) => {
      if (resp.status !== 200)
        return alert(`${resp.status}　${resp.statusText}`)
      window.location.reload()
    })
  }
  reconder() {
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
        </Link>{" "}{/* Back Arrow*/}
        <div className="meetingcontent mt-3  mx-auto col-md-8">
          <div className="row">
            <div className="col-12">
              <div className="my-2 recondertitle">{this.props.conference.name}</div>
              <div className="my-2 reconderdate">{this.props.conference.date}</div>
            </div>
            <div className="row col-12 my-3 d-flex align-items-center">
              <div className="my-2 col-md-4 reconderhost">
                活動：<div>{this.props.conference.category}</div>
              </div>
              <div className="my-2 col-md-4 reconderhost">
                出席者：<div>王曉明</div>
              </div>
              <div className="my-2 col-md-4 reconderhost">
                缺席者：<div>王曉明</div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/*會議內容*/}
        <div className="textcontent my-3 mx-md-auto overflow-auto col-md-8">
          <div class="overflow-auto py-3 text px-3">
            {this.props.content.content}
          </div>
        </div>
        <div className="my-3 mx-md-auto overflow-auto col-md-8 p-0">
          <MessageTable />
        </div>
      </>
    )
  }
}
