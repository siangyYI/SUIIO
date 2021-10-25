import React, { Component } from "react";

export class CompareDetail extends Component {
  render() {
    let { accounts2 } = this.props;

    return (
      <>
        <div className="mx-auto mt-2 ">
          <div className="dtext d-flex">
            {accounts2.net_loss > 0 ? (
                <>
              <div className="size2 d-flex justify-content-start mx-2 ">
                淨利
              </div>
              <div className="ml-3" style={{ color: "rgb(69, 185, 69)" }}>
              {Number(parseFloat(Math.abs(accounts2.net_loss)).toFixed(3)).toLocaleString(
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
              {Number(parseFloat(Math.abs(accounts2.net_loss)).toFixed(3)).toLocaleString(
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
