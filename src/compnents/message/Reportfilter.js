import React from 'react';
const Reportfilter = () => {
    return (
        <div className="ml-md-5 d-flex justify-content-center justify-content-md-start px-md-5 mt-2 mt-md-0">
            <div className="align-self-center titlefliter py-2">
                報表篩選
            </div>

            <div className="px-2 align-self-center">
                <select className="Dropdown">
                    <option>大迎新財報</option>
                    <option>民歌財報</option>
                    <option>送舊財報</option>
                    <option>七月財報</option>
                </select>
            </div>
        </div>
    )
};
export default Reportfilter;