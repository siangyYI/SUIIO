import React from "react";
import {FS_Detail} from "./FS_record_detail"
import { Card } from "react-bootstrap";
function FS_record_card() {
  const [DetailShow, setFSDetail] = React.useState(false);

  return (
    <div variant="primary"
    onClick={() => setFSDetail(true)} className="col-sm-12 col-md-3 pb-2">
      <Card style={{ width: '18rem' }} className="mx-auto mt-3">
          <Card.Body className="meeting">
            <Card.Title className="title px-4 pt-4 pb-1">大迎新財報</Card.Title>
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
      <FS_Detail show={DetailShow} onHide={() => setFSDetail(false)} />

    </div>
  );
}

export default FS_record_card;
