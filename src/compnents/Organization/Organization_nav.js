import React from 'react'
import { Link } from 'react-router-dom'
function Organization_nav() {
    return (
<div className="d-flex d-sm-none  pt-2 d-md-flex flex-md-column d-md-flex d-none bar">
        <ul class="nav py-3 px-5 h4 " role="tablist">
          <li class="nav-item">
            <Link
              to="/Organization/event"
              class="nav-link text-reset navfont"
              data-toggle="tab"
            >
              活動
              <div className="d-flex justify-content-center">
                <img
                  src={require("../../Image/remove.png").default}
                  alt="cancel"
                  style={{ width: "12pt", height: "15pt" }}
                />
              </div>
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to="/Organization/cadre"
              class="nav-link text-reset navfont"
              data-toggle="tab"
            >
              幹部
              <div className="d-flex justify-content-center">
                <img
                  src={require("../../Image/remove.png").default}
                  alt="cancel"
                  style={{ width: "12pt", height: "15pt" }}
                />
              </div>
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to="/Organization/member"
              class="nav-link text-reset navfont"
              data-toggle="tab"
            >
              成員
              <div className="d-flex justify-content-center">
                <img
                  src={require("../../Image/remove.png").default}
                  alt="cancel"
                  style={{ width: "12pt", height: "15pt" }}
                />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    )
}

export default Organization_nav
