import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { FRmy } from "./MyStatements/FR_my";
import { FRrecord } from "./Record/FR_record";
import { FRupload } from "./Upload/FR_upload";
import { FRaudit } from "./Audit/FR_audit";

import NavigationBar from '../../Meeting/NavigationBar';
import Sidebar from '../../Meeting/Sidebar';
import NavBAR from '../Financial_nav'

function Financial_records() {
  return (
    <>

            <div className="mb-5"><NavBAR />
            
              <Tabs
                fill
                variant="pills"
                defaultActiveKey="record"
                className="bg-secondary"


              >
                <Tab eventKey="my" title="我的收支" tabClassName="text-white">
                  <FRmy />
                </Tab>
                 <Tab eventKey="record" title="收支紀錄" tabClassName="text-white">
                  <FRrecord />
                </Tab>
               <Tab eventKey="upload" title="上傳收支" tabClassName="text-white">
                  <FRupload />
                </Tab>
                 <Tab eventKey="audit" title="審核收支" tabClassName="text-white">
                  <FRaudit />
                </Tab>
              </Tabs>
              </div>
</>
  );
}

export default Financial_records;
