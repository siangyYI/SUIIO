import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { FMmy } from "./MyManagement/FM_my";
import { FMrecord } from "./Record/FM_record";
import { FMupload } from "./Upload/FM_upload";
import { FMaudit } from "./Audit/FM_audit";
import NavBAR from '../Financial_nav'

function Financial_manage() {
  return (
    <>
      <div>
        <NavBAR />
      </div>
      <Tabs
        fill
        variant="pills red "
        defaultActiveKey="record"
        className="bg-secondary"
      >
        <Tab ref="/" eventKey="my" title="我的預算" tabClassName="text-white">
          <FMmy />
        </Tab>
        <Tab eventKey="record" title="預算紀錄" tabClassName="text-white">
          <FMrecord />
        </Tab>
        <Tab eventKey="upload" title="上傳預算" tabClassName="text-white">
          <FMupload />
        </Tab>
        <Tab eventKey="audit" title="審核預算" tabClassName="text-white">
          <FMaudit />
        </Tab>
      </Tabs>
    </>
  );
}

export default Financial_manage;