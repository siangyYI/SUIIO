import "./CompareIndex.css";

import React from "react";
const filter = () => {
  return (
    <>
      <div className="cfilter">
        <div className="row text-center">
          <div className="col mt-2 text-center">
            <select className="bDropdown">
              <option>109學年度</option>
              <option>108學年度</option>
              <option>107學年度</option>
              <option>106學年度</option>
            </select>
          </div>

          <div className="col mt-2 text-center">
            <select className="ml-5 bDropdown">
              <option>108學年度</option>
              <option>107學年度</option>
              <option>106學年度</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
export default filter;
