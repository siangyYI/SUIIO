import "../../Meeting/Management/css/flter.css";
import React from 'react';
const filter = () => {
    return (
        <div className="ml-md-5 mt-5 d-flex justify-content-center justify-content-md-start px-md-5 filter">
            <div className="align-self-center titlefliter py-2">
                學年度
            </div>
            <div className="px-2 align-self-center">
                <select className="Dropdown">
                    <option>109學年度</option>
                    <option>108學年度</option>
                    <option>107學年度</option>
                    <option>106學年度</option>
                </select>
            </div>
            <div></div>

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