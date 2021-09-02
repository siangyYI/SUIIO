import React from "react";
import Card from "./Income_Card";

function Income_Index() {
    return (
        <>
            <div className="my-3 mx-5 d-flex mt-5">
                <div style={{ fontSize: "20px" }} className="mr-3">
                    活動類別
                </div>
                <div>
                    <select
                        className="Dropdown"
                        style={{
                            borderRadius: "10px",
                            height: "1.8em",
                            backgroundColor: "white",
                        }}
                    >
                        <option value="grapefruit">大迎新</option>
                        <option value="lime">民歌</option>
                        <option value="coconut">送舊</option>
                        <option value="mango">資管周</option>
                    </select>
                </div>
            </div>
            <div className="row mt-2 px-5">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
}

export default Income_Index;