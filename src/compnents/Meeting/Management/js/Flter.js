import "../css/flter.css";
import React from 'react';
const flter = () => {
    return (
        <div className="ml-md-5 d-flex justify-content-center justify-content-md-start px-md-5 filter">
            <div className="align-self-center titlefliter py-2">
                會議篩選
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
export default flter;