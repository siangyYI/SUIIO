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
import Financial_manage_Tab from "./compnents/Financial/Management/Financial_manage_Tab";
import Financial_records_Tab from "./compnents/Financial/Records/Financial_records_Tab";
import FM_my_detail from "./compnents/Financial/Management/MyManagement/FM_my_detail";
import FM_audit_detail from "./compnents/Financial/Management/Audit/FM_audit_detail";
import FR_audit_detail from "./compnents/Financial/Records/Audit/FR_audit_detail";
import FR_my_detail from "./compnents/Financial/Records/MyStatements/FR_my_detail";
import FS_audit_detail from "./compnents/Financial/Statements/Audit/FS_audit_detail";
import FS_my_detail from "./compnents/Financial/Statements/MyStatements/FS_my_detail";


class App extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <Switch>
            
            <div className="row">
              <NavigationBar />
              <NavBar />
              <div className="col recordcontent overflow-auto">

                <Route exact={true} path="/" component={Index} />
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
                <Route path="/Financial/records" component={Financial_records_Tab} />
                <Route path="/Financial/management" component={Financial_manage_Tab} />


                <Route path="/Financial/management/my/detail" exact component={FM_my_detail} />
                <Route path="/Financial/management/audit/detail" component={FM_audit_detail} />

                <Route path="/Financial/records/audit/detail" component={FR_audit_detail} />

                <Route path="/Financial/records/my/detail" component={FR_my_detail} />
                <Route path="/Financial/statements/audit/detail" component={FS_audit_detail} />
                <Route path="/Financial/statements/my/detail" component={FS_my_detail} />
              </div>
            </div>
          </Switch>
        </HashRouter>
      </>
    )
  }
};
export default App;