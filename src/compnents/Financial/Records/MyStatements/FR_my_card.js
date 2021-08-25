import React from "react";

function FM_my_card() {
  return (
    <a href="/Financial/records/my/detail" style={{ borderRadius: "15px", backgroundColor: "#8EA299" }} className="col-sm-10 col-md-5 mx-4 my-2">
      <div className="p-2">
        <div className="row">
          <h3 className="col">我的收支</h3>
          <div>
            <div className="row mr-3">
               <div className="col"style={{ borderRadius: " 30px 0 0 30px  ", backgroundColor: "#648274",height:"30px",width:"60px"}}>
                    <p className="mt-2" style={{color:"#99FFA0"}}>組織</p>
                    </div>
               <div className="col "style={{ borderRadius: "0 30px 30px 0 ", backgroundColor: "white",height:"30px",width:"60px"}}> 
               <p className="mt-2">財務</p>
               </div>
            </div>
          </div>
        </div>
        <div className="row">
          <h6 className="col">預算類別</h6>
          <h6 className="col text-right mr-3">日期</h6>
        </div>
      </div>
    </a>
  );
}

export default FM_my_card;
