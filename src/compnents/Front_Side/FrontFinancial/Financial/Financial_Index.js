import React from "react";
import Card from "./Financial_Card";

function Financial_Index() {

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
              <option value=""></option>
                <option value="ALL">ALL</option>
                <option value="大迎新">大迎新</option>
                <option value="民歌">民歌</option>
                <option value="送舊">送舊</option>
                <option value="資管周">資管周</option>
            </select>
          </div>
        </div>
        <div className="row mt-2 px-5">
          <Card/>
          <Card />
          <Card />
          <Card />
        </div>
      </>
  );
}

export default Financial_Index;