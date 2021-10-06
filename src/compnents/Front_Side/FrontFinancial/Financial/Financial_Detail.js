import React from "react";
import { Container } from "react-bootstrap";
import MessageTable from "../Income/Message"
import { FinancialTable } from "./Financial_Table";
import { Link } from "react-router-dom";
import arrow_icon from "../../../../Image/arrow_icon.png";

const Financial_Detail = () => {
  return (
    <>
      <Link to="/Front/Financial/Index">
        <img
          src={arrow_icon}
          alt="arrow_icon"
          width="30pt"
          height="30pt"
          className="mt-3 ml-4"
        />
      </Link>
      <Container>
        <div>
          <FinancialTable /></div>
        <div className="my-2">
          <MessageTable />
        </div>
      </Container>
    </>
  );
};
export default Financial_Detail;
