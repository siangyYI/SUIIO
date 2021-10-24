import React, { Component } from "react";

export class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentPageNum: props.currentPageNum, //当前页码
    }
}
render() {
    let pageTotal = Math.ceil(this.props.total / this.props.pageSize); //页码总数
    return (
        <><section>
          <a href="javascript:void(0)">上一頁</a>
          <div>
            <input type="text" value={this.state.currentPageNum}/>
            <span>/{pageTotal}</span>
            </div>
            <a href="javascript:void(0)">下一頁</a></section></>
  
    );
  }
}
