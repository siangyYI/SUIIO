import React from "react";
import { Card } from "react-bootstrap";
import { CadreDel } from "./CadreDel";
import { CadreEdit } from "./CadreEdit";

function Cadre_Card() {
  const [EditShow, setEditShow] = React.useState(false);
  const [DeleteShow, setDeleteShow] = React.useState(false);
  return (
    <div
      className="col-sm-6 col-md-3 mx-5 my-2 p-1"
      style={{ backgroundColor: "#B7C1B4", textAlign: "center" }}
    >

    
      <Card>
        <Card.Header className="p-1">
          <div style={{float:"right"}}>
          <img
          variant="primary"
          onClick={() => setEditShow(true)}
          src={require("../../../Image/pen.png").default}
          alt="cancel"
          style={{ width: "15px", height: "15px"}}
          className="mx-2"
        />
        <img
          variant="primary"
          onClick={() => setDeleteShow(true)}
          src={require("../../../Image/cancel.jpg").default}
          alt="cancel"
          style={{ width: "15px", height: "15px"}}
          className="mx-2"
        /></div></Card.Header>
        <Card.Body className="m-2">
          <Card.Title>副會長</Card.Title>
          <Card.Text>
           1110634000
          </Card.Text>
        </Card.Body>
      </Card>
      <CadreEdit show={EditShow} onHide={() => setEditShow(false)} />
      <CadreDel show={DeleteShow} onHide={() => setDeleteShow(false)} />
    </div>
  );
}

export default Cadre_Card;
