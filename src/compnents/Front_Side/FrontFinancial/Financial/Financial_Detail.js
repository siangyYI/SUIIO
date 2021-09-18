import React from "react";
import { Button, Container } from "react-bootstrap";
// import "./Financial.css";
import MessageTable from "../Income/Message"
import FinancialTable from "./Financial_Table";

const Financial_Detail = () => {
  return (
    <>
    <Container>
      <div className="my-5">
      <FinancialTable/></div>
      <div className="my-2">
         <MessageTable/>
       </div>
      </Container>
    </>
  );
};
export default Financial_Detail;
