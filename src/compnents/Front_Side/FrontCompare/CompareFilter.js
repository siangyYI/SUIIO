import "../../Meeting/Management/css/flter.css";

import React from 'react';
const filter = () => {
    return (
        <div className="ml-md-5 mt-5 d-flex justify-content-center justify-content-md-start px-md-5 filter">
            <div className="align-self-center titlefliter py-2 mr-5">
                學年度
            </div>
            <div className="align-self-center mx-2">
                <img
                    src={require("../../../Image/one.png").default}
                    alt="cancel"
                    width="25px" height="25px"
                    className="mr-2"
                />
            </div>

            <div className="mr-5 align-self-center">
                <select className="Dropdown">
                    <option>109學年度</option>
                    <option>108學年度</option>
                    <option>107學年度</option>
                    <option>106學年度</option>
                </select>
            </div>
            <div className="align-self-center">
                <img
                    src={require("../../../Image/two.png").default}
                    alt="cancel"
                    width="25px" height="25px"
                    className="mr-2"
                />
            </div>

            <div className="px-2 align-self-center">
                <select className="Dropdown">
                    <option>109學年度</option>
                    <option>108學年度</option>
                    <option>107學年度</option>
                    <option>106學年度</option>
                </select>
            </div>
            <div className="align-self-center titlefliter py-2 ml-5">
                活動類別
            </div>
            <div className="px-2 align-self-center">
                <select className="Dropdown">
                    <option>大迎新</option>
                    <option>民歌</option>
                    <option>送舊</option>
                    <option>例行會議</option>
                </select>
            </div>
        </div>
    )
};
export default filter;