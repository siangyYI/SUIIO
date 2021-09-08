import React from "react";
import { Button } from "react-bootstrap";
import CadreCard from "./Cadre_Card";
import { CadreAdd } from "./CadreAdd";
import Navtab from '../Organization_nav'

function Organization_cadre() {
  const [AddShow, setAddShow] = React.useState(false)
  return (
    <>

      <Navtab />
      <div >
        <Button
          className="my-3 d-flex "
          style={{
            backgroundColor: "#707070",
            textAlign: "right",
            margin: "0px 0px 0px auto",
          }}
          variant="primary"
          onClick={() => setAddShow(true)}
        >
          新增
        </Button>
      </div>
      <div className="row align-items-center">
        <CadreCard />
        <CadreCard />
        <CadreCard />
        <CadreCard />
        <CadreCard />
        <CadreCard />
      </div>

      <div className="mt-5 ml-5">
        <div className="row ml-2">
          <h3 className="mt-3 col col-sm-3 ">權限負責人</h3>
          <select
            className="col-11 col-sm-3 m-2 p-2 custom-select"
            style={{
              borderRadius: "4px",
              height: "2.3em",
              outline: "none",
              backgroundColor: "white",
            }}
          >
            <option value="grapefruit">會長</option>
            <option value="lime">副會長</option>
            <option value="coconut">活動</option>
            <option value="mango">公關</option>
          </select>
          <br />
          <select
            className="col-11 col-sm-3 m-2 p-2 offset-md-4  custom-select"
            style={{
              borderRadius: "4px",
              height: "2.3em",
              outline: "none",
              backgroundColor: "white",
            }}
          >
            <option value="grapefruit">會長</option>
            <option value="lime">副會長</option>
            <option value="coconut">活動</option>
            <option value="mango">公關</option>
          </select>
        </div>

        <div className="row  ml-2">
          <h3 className="mt-3 col col-sm-3 ">財務負責人</h3>
          <select
            className="col-11 col-sm-3 m-2 p-2  custom-select"
            style={{
              borderRadius: "4px",
              height: "2.3em",
              outline: "none",
              backgroundColor: "white",
            }}
          >
            <option value="grapefruit">會長</option>
            <option value="lime">副會長</option>
            <option value="coconut">活動</option>
            <option value="mango">公關</option>
          </select>
          <br />
          <select
            className="col-11 col-sm-3 m-2 p-2 offset-md-4  custom-select"
            style={{
              borderRadius: "4px",
              height: "2.3em",
              outline: "none",
              backgroundColor: "white",
            }}
          >
            <option value="grapefruit">會長</option>
            <option value="lime">副會長</option>
            <option value="coconut">活動</option>
            <option value="mango">公關</option>
          </select>
        </div>

        <div className="row  ml-2">
          <h3 className="mt-3 col col-sm-3 ">會議記錄負責人</h3>
          <select
            className="col-11 col-sm-3 m-2 p-2  custom-select"
            style={{
              borderRadius: "4px",
              height: "2.3em",
              outline: "none",
              backgroundColor: "white",
            }}
          >
            <option value="grapefruit">會長</option>
            <option value="lime">副會長</option>
            <option value="coconut">活動</option>
            <option value="mango">公關</option>
          </select>
          <br />
          <select
            className="col-11 col-sm-3 m-2 p-2 offset-md-4  custom-select"
            style={{
              borderRadius: "4px",
              height: "2.3em",
              outline: "none",
              backgroundColor: "white",
            }}
          >
            <option value="grapefruit">會長</option>
            <option value="lime">副會長</option>
            <option value="coconut">活動</option>
            <option value="mango">公關</option>
          </select>
        </div>
      </div>
      <CadreAdd show={AddShow} onHide={() => setAddShow(false)} />

    </>
  );
}
export default Organization_cadre;
