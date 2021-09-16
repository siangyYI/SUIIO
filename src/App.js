import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { Component } from 'react';
import './App.css';
import NavigationBar from './compnents/NavigationBar';
import NavBar from './compnents/Navbar'
import Switch from 'react-bootstrap/esm/Switch';
import Index from "./compnents/Meeting/Management/js/Index";
import reconder from "./compnents/Meeting/Management/js/reconder";
import Uploadmeet from "./compnents/Meeting/Upload/js/Upload";
import AuditList from './compnents/Meeting/Audit/js/auditlist';
import MyList from './compnents/Meeting/MyMeeting/js/MylList';
import auditReconder from "./compnents/Meeting/Audit/js/auditReconder";
import Myreconder from './compnents/Meeting/MyMeeting/js/Myreconder';
import ReportMessage from './compnents/Message/Report/ReportMessage';
import IncomeMessage from './compnents/Message/IncomeAndexpend/IncomeMessage';
import Organization_event from "./compnents/Organization/Event/Organization_event";
import Organization_cadre from "./compnents/Organization/Cadre/Organization_cadre";
import Organization_member from "./compnents/Organization/Member/Organization_member";
import Financial_statements from "./compnents/Financial/Statements/Financial_statements_Tab";
import FS_audit_detail from "./compnents/Financial/Statements/Audit/FS_audit_detail";
import FS_my_detail from "./compnents/Financial/Statements/MyStatements/FS_my_detail";
import FS_my from "./compnents/Financial/Statements/MyStatements/FS_my";
import FS_record from "./compnents/Financial/Statements/Record/FS_record";
import FS_upload from "./compnents/Financial/Statements//Upload/FS_upload";
import FS_audit from "./compnents/Financial/Statements/Audit/FS_audit";

import Financial_manage_Tab from "./compnents/Financial/Management/Financial_manage_Tab";
import FM_my_detail from "./compnents/Financial/Management/MyManagement/FM_my_detail";
import FM_audit_detail from "./compnents/Financial/Management/Audit/FM_audit_detail";
import FM_my from "./compnents/Financial/Management/MyManagement/FM_my";
import FM_record from "./compnents/Financial/Management/Record/FM_record";
import FM_upload from "./compnents/Financial/Management//Upload/FM_upload";
import FM_audit from "./compnents/Financial/Management/Audit/FM_audit";

import Financial_records_Tab from "./compnents/Financial/Records/Financial_records_Tab";
import FR_audit_detail from "./compnents/Financial/Records/Audit/FR_audit_detail";
import FR_my_detail from "./compnents/Financial/Records/MyStatements/FR_my_detail";
import FR_my from "./compnents/Financial/Records/MyStatements/FR_my";
import FR_record from "./compnents/Financial/Records/Record/FR_record";
import FR_upload from "./compnents/Financial/Records//Upload/FR_upload";
import FR_audit from "./compnents/Financial/Records/Audit/FR_audit";

import Login from './compnents/Login/Login';
import PW_account from './compnents/Login/PW_account';
import CheckPW from './compnents/Login/CheckPW'
import Choose from './compnents/Login/Choose'
import ChangePW from './compnents/Login/ChangePW'
import EditFile from './compnents/Login/EditFile'

class App extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <Switch>
            
            <div className="row">
              <NavigationBar />
              <NavBar />
              <div className="col recordcontent overflow-auto Col">

                <Route exact={true} path="/index" component={Index} />
                <Route path="/reconder" component={reconder} />
                <Route path="/Uploadmeet" component={Uploadmeet} />
                <Route path="/AuditList" component={AuditList} />
                <Route path="/Audit" component={auditReconder} />
                <Route path="/MyList" component={MyList} />
                <Route path="/Myreconder" component={Myreconder} />
                <Route path="/ReportMessage" component={ReportMessage} />
                <Route path="/IncomeMessage" component={IncomeMessage} />
                <Route path="/Organization/event" component={Organization_event} />
                <Route path="/Organization/cadre" component={Organization_cadre} />
                <Route path="/Organization/member" component={Organization_member} />
                <Route path="/Financial/statements" component={Financial_statements} />
                <Route path="/Financial/statements/my" component={FS_my} />
                <Route path="/Financial/statements/record" component={FS_record} />
                <Route path="/Financial/statements/upload" component={FS_upload} />
                <Route path="/Financial/statements/audit" component={FS_audit} />
                <Route path="/Financial/statements/audit_detail" component={FS_audit_detail} />
                <Route path="/Financial/statements/my_detail" component={FS_my_detail} />

                <Route path="/Financial/records" component={Financial_records_Tab} />
                <Route path="/Financial/records/my" component={FR_my} />
                <Route path="/Financial/records/record" component={FR_record} />
                <Route path="/Financial/records/upload" component={FR_upload} />
                <Route path="/Financial/records/audit" component={FR_audit} />
                <Route path="/Financial/records/audit_detail" component={FR_audit_detail} />
                <Route path="/Financial/records/my_detail" component={FR_my_detail} />

                <Route path="/Financial/management" component={Financial_manage_Tab} />
                <Route path="/Financial/management/my" component={FM_my} />
                <Route path="/Financial/management/record" component={FM_record} />
                <Route path="/Financial/management/upload" component={FM_upload} />
                <Route path="/Financial/management/audit" component={FM_audit} />
                <Route path="/Financial/management/my_detail" exact component={FM_my_detail} />
                <Route path="/Financial/management/audit_detail" component={FM_audit_detail} />

                <Route path="/Login" component={Login} />
                <Route path="/PW_account" component={PW_account} />
                <Route path="/CheckPW" component={CheckPW} />
                <Route path="/Choose" component={Choose} />
                <Route path="/ChangePW" component={ChangePW} />
                <Route path="/EditFile" component={EditFile} />

              </div>
            </div>
          </Switch>
        </HashRouter>
      </>
    )
  }
};
export default App;