import React from "react";
import { Input } from "semantic-ui-react";
import Member from "./Member";
import NavigationBar from '../../NavigationBar';
import Sidebar from '../../Navbar';
import Navtab from '../Organization_nav';

function Organization_member() {
  return (
    <>
            <Navtab />
        <div className="row justify-content-between my-4">
          <div className=" col">
            <select className="Dropdown">
              <option value="grapefruit">學年度</option>
              <option value="lime">109</option>
              <option value="coconut">108</option>
              <option value="mango">107</option>
            </select>
          </div>
          <div>
            <Input
              action={{ icon: "add" }}
              placeholder="輸入成員學號"
              className="d-flex justify-content-end"
              class="event"
            />
          </div>
        </div>
        <div className="row align-items-center">
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
        </div></>
  );
}

export default Organization_member;
