import "./CompareIndex.css";

import React from 'react';
const filter = () => {
    return (
        <>
            <div
                className="ml-md-5  d-flex justify-content-center justify-content-md-start px-md-5 cfilter"
            >
                <div className="align-self-center" style={{ marginLeft: "26%" }}>
                    
                </div>

                <div className="mr-5 align-self-center">
                    <select className="bDropdown">
                        <option>109學年度</option>
                        <option>108學年度</option>
                        <option>107學年度</option>
                        <option>106學年度</option>
                    </select>
                </div>
                <div className="align-self-center" style={{ marginLeft: '80%' }}>
                    
                </div>

                <div className="px-2 align-self-center">
                    <select className="bDropdown">
                        <option>109學年度</option>
                        <option>108學年度</option>
                        <option>107學年度</option>
                        <option>106學年度</option>
                    </select>
                </div>

            </div>
        </>

    )
};
export default filter;