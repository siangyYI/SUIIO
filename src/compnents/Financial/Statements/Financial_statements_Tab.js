import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { FSmy } from "./MyStatements/FS_my";
import { FSrecord } from "./Record/FS_record";
import { FSupload } from "./Upload/FS_upload";
import { FSaudit } from "./Audit/FS_audit";
import NavBAR from '../Financial_nav'

function Financial_statements() {
  return (
    <>
      <div className=" p-1 mx-1 mt-2">
        <div>
          <NavBAR />
        </div>
        <div>
          <Tabs
            fill
            variant="pills"
            defaultActiveKey="record"
            className="m-5 rounded menu bg-secondary"
          >
            <Tab eventKey="my" title="我的財報" tabClassName="text-white">
              <FSmy />
            </Tab>
            <Tab eventKey="record" title="財務報表" tabClassName="text-white">
              <FSrecord />
            </Tab>
            <Tab eventKey="upload" title="製作財報" tabClassName="text-white">
              <FSupload />
            </Tab>
            <Tab eventKey="audit" title="審核財報" tabClassName="text-white">
              <FSaudit />
            </Tab>
          </Tabs></div></div>
    </>
  );
}

export default Financial_statements;
