import React from 'react'

function Organization_nav() {
    return (


        <div className="flex-md-column d-md-flex d-none">
            <div className="d-flex d-sm-none  py-2 d-md-flex">
                <ul class="nav py-3 px-5 h4 " role="tablist">
                    <li class="nav-item">
                        <a href="#/Organization/event" class="nav-link text-reset navfont" data-toggle="tab">
                            活動
                            <div className="d-flex justify-content-center">
                            <img
                                src={require("../../Image/remove.png").default}
                                alt="cancel"
                                style={{ width: "12pt", height: "15pt" }}
                            />
                        </div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#/Organization/cadre" class="nav-link text-reset navfont" data-toggle="tab">
                            幹部
                            <div className="d-flex justify-content-center">
                            <img
                                src={require("../../Image/remove.png").default}
                                alt="cancel"
                                style={{ width: "12pt", height: "15pt" }}
                            />
                        </div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#/Organization/member" class="nav-link text-reset navfont" data-toggle="tab">
                            成員
                            <div className="d-flex justify-content-center">
                            <img
                                src={require("../../Image/remove.png").default}
                                alt="cancel"
                                style={{ width: "12pt", height: "15pt" }}
                            />
                        </div>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Organization_nav
