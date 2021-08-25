import React from 'react'
import { Component } from 'react'
import { Link } from "react-router-dom";
class NavBAR extends Component {
    render() {
        return (
            <div className=" nav py-3 px-5 h4 ">
                <a href="#/Financial/statements" class="nav-link text-reset navfont">財務報表</a>
                <a href="#/Financial/records" class="nav-link text-reset navfont">收支紀錄</a>
                <a href="#/Financial/management" class="nav-link text-reset navfont">預算管理</a>

            </div>
            // <div className="flex-md-column d-md-flex d-none">
            //     <div className="d-flex d-sm-none  py-2 d-md-flex">
            //         <ul class="nav py-3 px-5 h4 " role="tablist">
            //             <li class="nav-item">
            //                 <Link to="/Financial/statements" class="nav-link text-reset navfont" data-toggle="tab">
            //                     財務報表
            //                 </Link>
            //             </li>
            //             <li class="nav-item">
            //                 <a href="#/Financial/records" class="nav-link text-reset navfont" data-toggle="tab">
            //                     收支紀錄
            //                 </a>
            //             </li>
            //             <li class="nav-item">
            //                 <a href="#/Financial/management" class="nav-link text-reset navfont" data-toggle="tab">
            //                     預算管理
            //                 </a>
            //             </li>

            //         </ul>
            //     </div>
            // </div>
        )
    }
}
export default NavBAR;
