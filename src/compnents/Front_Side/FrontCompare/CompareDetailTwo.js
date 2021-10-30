import React, { Component } from "react";

export class CompareDetailTwo extends Component {
  render() {
    let { accounts1 } = this.props;
    let account = Object.values(accounts1);
    // console.log(this.pro);
    return (
      <>
        <div className="mx-auto ">
          <div className="comparetext d-flex">
            {account[2] > 0 ? (
              <>
                <div className="size2 d-flex justify-content-start mx-2 ">
                  淨利
                </div>
                <div style={{ color: "rgb(69, 185, 69)" }}>
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
                <div style={{ color: "rgb(196, 68, 68)" }}>
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
