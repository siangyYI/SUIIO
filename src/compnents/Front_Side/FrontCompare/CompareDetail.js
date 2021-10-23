import React, { Component } from "react";

export class CompareDetail extends Component {
  render() {
    let { accounts } = this.props;
    let cost = 0;
    accounts.map((x) =>
      x.name == "資管科十二月份財務報表"
        ? (cost = x.balance)
        : console.log(cost)
    );
    return (
      <>
        <div className="mx-auto mt-2 ">
          <div className="dtext d-flex">
            {cost > 0 ? (
                <>
              <div className="size2 d-flex justify-content-start mx-2 ">
                淨利
              </div>
              <div className="ml-3" style={{ color: "rgb(69, 185, 69)" }}>
              {Number(parseFloat(Math.abs(cost)).toFixed(3)).toLocaleString(
                "en",
                {
                  minimumFractionDigits: 0,
                }
              )}
            </div></>
            ) : (
                <>
              <div className="size2 d-flex justify-content-start mx-2 ">
                淨損
              </div>
              <div className="ml-3" style={{ color: "rgb(196, 68, 68)" }}>
              {Number(parseFloat(Math.abs(cost)).toFixed(3)).toLocaleString(
                "en",
                {
                  minimumFractionDigits: 0,
                }
              )}
            </div></>
            )}
            

            <div className="size d-flex mx-2">元</div>
          </div>
        </div>
      </>
    );
  }
}
