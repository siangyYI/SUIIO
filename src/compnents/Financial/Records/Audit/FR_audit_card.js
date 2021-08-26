import React from "react";
import { Card } from "react-bootstrap";
function FM_my_card() {
  return (
    <div className="col-sm-12 col-md-3 pb-2">
        <a href="#/Financial/records/audit/detail">
          <Card style={{ width: '18rem' }} className="mx-auto mt-3">
            <Card.Body className="meeting">
              <Card.Title className="title px-4 pt-4">大迎新預算</Card.Title>
              <Card.Subtitle className="mb-2">
                <div className="mr-md-3 mx-4 pt-2 pt-md-0 align-self-center date">
                  2021-06-21
                </div>
              </Card.Subtitle>
              <Card.Text>
                <div className="mr-md-3 mx-4 pt-2 pt-md-0 align-self-center host">
                  活動:大迎新
                </div>
              </Card.Text>
              <div className="my-3 d-flex justify-content-center ">
                <div className="Audit d-flex justify-content-center">
                  <div className="align-self-center audittext">組織</div>
                </div>
                <div className="Audit2 d-flex justify-content-center">
                  <div className="align-self-center audittext">財務</div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </a>
      </div>
    // <a  href="#/Financial/records/audit/detail" style={{ borderRadius: "15px", backgroundColor: "#8EA299" }} className="col-sm-10 col-md-5 mx-4 my-2">
    //   <div className="p-2">
    //     <div className="row">
    //       <h3 className="col">審核收支</h3>
    //       <div>
    //         <div className="row mr-3">
    //            <div className="col"style={{ borderRadius: " 30px 0 0 30px  ", backgroundColor: "#648274",height:"30px",width:"60px"}}>
    //                 <p className="mt-2" style={{color:"#99FFA0"}}>組織</p>
    //                 </div>
    //            <div className="col "style={{ borderRadius: "0 30px 30px 0 ", backgroundColor: "white",height:"30px",width:"60px"}}> 
    //            <p className="mt-2">財務</p>
    //            </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="row">
    //       <h6 className="col">預算類別</h6>
    //       <h6 className="col text-right mr-3">日期</h6>
    //     </div>
    //   </div>
    // </a>
  );
}

export default FM_my_card;
