import "../../Meeting/Management/css/reconder.css";
import { Link } from "react-router-dom";
import arrow_icon from "../../../Image/arrow_icon.png";
import React from "react";
import MessageTable from "../FrontFinancial/Income/Message";
import { Container } from "reactstrap";

const reconder = () => {
  return (
    <>
      <Link to="/Front/Index">
        <img
          src={arrow_icon}
          alt="arrow_icon"
          width="30pt"
          height="30pt"
          className="mt-5 ml-4"
        />
      </Link>{" "}
      {/* Back Arrow*/}
      <div className="meetingcontent mt-3  mx-auto col-md-8">
        <div className="row">
          <div className="col-12">
            <div className="my-2 recondertitle">大迎新會議記錄</div>
            <div className="my-2 reconderdate">2020/06/19</div>
          </div>
          <div className="row col-12 my-3 d-flex align-items-center">
            <div className="my-2 col-md-4 reconderhost">
              活動：<div>大迎新</div>
            </div>
            <div className="my-2 col-md-4 reconderhost">
              出席者：<div>王曉明</div>
            </div>
            <div className="my-2 col-md-4 reconderhost">
              缺席者：<div>王曉明</div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/*會議內容*/}
      <div className="textcontent my-3 mx-md-auto overflow-auto col-md-8">
        <div class="overflow-auto py-3 text px-3">
          Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus
          sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus.
          Praeterea iter est quasdam res quas ex communi. At nos hinc posthac,
          sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in
          diem certam indicere. Cras mattis iudicium purus sit amet fermentum.
        </div>
      </div>
      <div className="my-3 mx-md-auto overflow-auto col-md-8 p-0">
        <MessageTable />
      </div>
    </>
  );
};
export default reconder;
