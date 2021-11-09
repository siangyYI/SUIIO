import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./FrontNavBar.css";
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    // Pass on our props
    <div>
      <Menu {...props}>
        <a className="menu-item" href="/account">
          收支紀錄
        </a>
        <a className="menu-item" href="/financial">
          財務報表
        </a>
        <a className="menu-item" href="/chart">
          統計圖表
        </a>
        <a className="menu-item" href="/compare">
          歷年比較
        </a>
        <a className="menu-item" href="/meet">
          會議記錄
        </a>
      </Menu>
    </div>
  );
};
