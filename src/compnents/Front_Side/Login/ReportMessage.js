import React from "react";
import { Container } from "react-bootstrap";
import ReportTable from "./ReportTable";

function ReportMessage() {
  return (
    <div>
      <Container>
        <div className="mt-5">
          <ReportTable />
        </div>
      </Container>
    </div>
  );
}

export default ReportMessage;
