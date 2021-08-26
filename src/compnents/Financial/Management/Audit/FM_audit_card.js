import React from "react";
import { Card } from "react-bootstrap";
function FM_my_card() {
  return (
    <>
      <div className="col-sm-12 col-md-3 pb-2">
        <a href="#/Financial/management/audit/detail">
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
    </>
  );
}
export default FM_my_card;
