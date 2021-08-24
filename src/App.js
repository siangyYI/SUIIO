import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { Component } from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import Index from "./compnents/Meeting/Management/js/Index";
import reconder from "./compnents/Meeting/Management/js/reconder";
import Uploadmeet from "./compnents/Meeting/Upload/js/Upload";
import AuditList from './compnents/Meeting/Audit/js/auditlist';
import MyList from './compnents/Meeting/MyMeeting/js/MylList';
import auditReconder from "./compnents/Meeting/Audit/js/auditReconder";
import Myreconder from './compnents/Meeting/MyMeeting/js/Myreconder';
import ReportMessage from './compnents/message/Report/ReportMessage';
class App extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <Switch>
            <Route exact={true} path="/" component={Index} />
            <Route path="/reconder" component={reconder} />
            <Route path="/Uploadmeet" component={Uploadmeet} />
            <Route path="/AuditList" component={AuditList} />
            <Route path="/Audit" component={auditReconder} />
            <Route path="/MyList" component={MyList} />
            <Route path="/Myreconder" component={Myreconder} />
            <Route path="/ReportMessage" component={ReportMessage} />
          </Switch>
        </HashRouter>
        </>
    )
  }
};
export default App;