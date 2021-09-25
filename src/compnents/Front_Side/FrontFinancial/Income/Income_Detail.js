import React from "react";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import MessageTable from "./Message";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import arrow_icon from "../../../../Image/arrow_icon.png";
const Financial_Detail = () => {
  return (
    <>
      <Link to="/IncomeIndex">
        <img
          src={arrow_icon}
          alt="arrow_icon"
          width="30pt"
          height="30pt"
          className="mt-5 ml-4"
        />
      </Link>{" "}
      <Container>
        <Card className="row p-5">
          <img
            src={require("../../../../Image/711.png").default}
            alt="cancel"
            className="mr-3 col-3"
          />

          <Box className="col">
            <div className="row d-flex bd-highlight">
              <div className="col">
                <p>活動類別</p>
                <h2>大迎新</h2>
              </div>
              <div className="col text-right pt-2">
                <p>收支名稱</p>
                <h4>文具用品</h4>
              </div>
            </div>
            <hr />

            <div style={{ height: "80%" }}>
              <p>收支項目</p>
              <li>筆</li>
              <li>彩色筆</li>
              <li>紅包袋</li>

            </div>
            <div className="row sticky-bottom" >
              <div className="col">支出 $260</div>
              <div className="col text-right">申請人：公關長</div>
            </div>
          </Box>
        </Card>
        <div className="mt-4">
          <MessageTable />
        </div>
      </Container>
    </>
  );
};
export default Financial_Detail;
