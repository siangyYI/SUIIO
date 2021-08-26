import React from "react";
import { FR_Detail } from "./FR_record_detail"
import { Card } from "react-bootstrap";
function FR_record_card() {
  const [DetailShow, setFRDetail] = React.useState(false);

  return (
    <div variant="primary"
      onClick={() => setFRDetail(true)} className="col-sm-12 col-md-3 pb-2 p-5">
      <Card style={{ width: '18rem' }} className="mx-auto mt-3">
          <Card.Body className="meeting">
            <Card.Title className="title">大迎新收支</Card.Title>
            <Card.Subtitle className="mb-2">
              <div className="mr-md-3 mx-3 pt-2 pt-md-0 align-self-center date">
                2021-06-21
              </div>
            </Card.Subtitle>
            <Card.Text>
              <div className="mr-md-3 mx-3 pt-2 pt-md-0 align-self-center host">
                活動:大迎新
              </div>
            </Card.Text>
            <div className="pt-2 d-flex justify-content-center ">
              <div className="Audit d-flex justify-content-center">
                <div className="align-self-center audittext">組織</div>
              </div>
              <div className="Audit2 d-flex justify-content-center">
                <div className="align-self-center audittext">財務</div>
              </div>
            </div>
          </Card.Body>
        </Card>
      <FR_Detail show={DetailShow} onHide={() => setFRDetail(false)} />

    </div>
  );
}

export default FR_record_card;
