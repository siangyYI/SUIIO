import React, { Component } from "react";

export class CompareDetail extends Component {
  render() {
    let { accounts2 } = this.props;
    let account = Object.values(accounts2);

    return (
      <>
        <div className="mx-auto ">
          <div className="row">
          <div className=" stext d-flex">
            <div className="size2 d-flex justify-content-start">收入</div>

            <div className="ml-3 " style={{ color: "rgb(69, 185, 69)" }}>
              {Number(
                parseFloat(Math.abs(accounts2.income)).toFixed(3)
              ).toLocaleString("en", {
                minimumFractionDigits: 0,
              })}
            </div>
            <div className="size d-flex mx-2">元&nbsp;&nbsp; <span className="ml-2" style={{fontSize:"50px",lineHeight:"3px"}}>-</span></div>
          </div>

          <div className=" col stext d-flex">
            <div className="size2 d-flex justify-content-start">支出</div>

            <div className="ml-3 " style={{ color: "rgb(196, 68, 68)" }}>
              {Number(
                parseFloat(Math.abs(accounts2.cost)).toFixed(3)
              ).toLocaleString("en", {
                minimumFractionDigits: 0,
              })}
            </div>
            <div className="size d-flex mx-2">元</div>

          </div>
          </div><div className="comparetext d-flex" style={{marginLeft:"15%"}}>
            {account[2] > 0 ? (
              <>
                <div className="size2 d-flex justify-content-start mx-2 ">
                  淨利
                </div>
                <div className="ml-3" style={{ color: "rgb(69, 185, 69)" }}>
                  {Number(
                    parseFloat(Math.abs(account[2])).toFixed(3)
                  ).toLocaleString("en", {
                    minimumFractionDigits: 0,
                  })}
                </div>
              </>
            ) : (
              <>
                <div className="size2 d-flex justify-content-start mx-2 ">
                  淨損
                </div>
                <div className="ml-3" style={{ color: "rgb(196, 68, 68)" }}>
                  {Number(
                    parseFloat(Math.abs(account[2])).toFixed(3)
                  ).toLocaleString("en", {
                    minimumFractionDigits: 0,
                  })}
                </div>
              </>
            )}

            <div className="size d-flex mx-2">元</div>
          </div>
        </div>
      </>
    );
  }
}
