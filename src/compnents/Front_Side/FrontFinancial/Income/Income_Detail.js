import React from "react";
import user from "../../../../Image/1144760.png";
import { Button, Container } from "react-bootstrap";
import "../Financial/Financial.css";
import { Messageitem } from "../../../Message/Report/Messitem";
import {IncomeModel} from "./Income_Model"
import MessageTable  from "./Message";

const Financial_Detail = () => {
  const [Model, setModel] = React.useState(false);

  return (
    <>
      <Container>
        <div className="">
          <div className="my-3">
            <div
              className="h-100 p-3"
              style={{
                background: "white",
                borderRadius: "10px",
                border: "2px solid gray",
              }}
            >
              <div>
                <h2>大迎新</h2>
                <h5>文具用品</h5>
                <p>筆 彩色筆 紅包袋</p>
                <p>申請人：公關長</p>
                <p>支出 $260</p>
                <div className="d-flex justify-content-end">
                <Button   onClick={() => setModel(true)}>收據</Button>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="my-2">
        <MessageTable/></div>
      </Container>
      <IncomeModel show={Model} onHide={() => setModel(false)} />
    </>
  );
};
export default Financial_Detail;
