import React from "react";
import "../../../styles/Organization_event.css";
import { Input } from "semantic-ui-react";
import AddEvent from "./AddEvent";

import Navtab from '../Organization_nav';

function Organization_event(props) {
  // function addEvent() {
  //   const addValue = document.getElementById("addValue");
  //   <AddEvent />
  
  return (
    <>
          <Navtab />
          <div>
            {/* onClick: () => addEvent() */}
            <Input
              action={{ icon: "add", }} 
              placeholder="輸入活動名稱"
              className="web_input mt-4 mb-3 pr-5 w-100"
              id="addValue"
            />
          </div>
          <div className="row align-items-center">
            <AddEvent />
            <AddEvent />
            <AddEvent />          <AddEvent />
            <AddEvent />

          </div>
</>
  );
}
export default Organization_event;
