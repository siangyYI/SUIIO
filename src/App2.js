import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { Component } from 'react';
import './App.css';
import FrontNavigationBar from './compnents/Front_Side/FrontNavigationBar';
import FrontNavbar from './compnents/Front_Side/FrontNavbar'
import Switch from 'react-bootstrap/esm/Switch';
import { Index } from './compnents/Front_Side/FrontMeeting/Index';
import {reconder} from './compnents/Front_Side/FrontMeeting/Reconder';

import Financial_Detail from './compnents/Front_Side/FrontFinancial/Financial/Financial_Detail';
import Financial_Index from './compnents/Front_Side/FrontFinancial/Financial/Financial_Index';
import Income_Detail from './compnents/Front_Side/FrontFinancial/Income/Income_Detail';
import Income_Index from './compnents/Front_Side/FrontFinancial/Income/Income_Index';
import Chart_Index from './compnents/Front_Side/Frontchart/ChartIndex';
import CompareIndex from './compnents/Front_Side/FrontCompare/CompareIndex';

import Login from './compnents/Front_Side/Login/Login';
import PW_account from './compnents/Front_Side/Login/PW_account';
import CheckPW from './compnents/Front_Side/Login/CheckPW'
import Choose from './compnents/Front_Side/Login/Choose'
import ChangePW from './compnents/Front_Side/Login/ChangePW'
import EditFile from './compnents/Front_Side/Login/EditFile'
import ReportMessage from './compnents/Front_Side/Login/ReportMessage'

class App2 extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <Switch>
            <div className="row">
              <FrontNavigationBar />
              <FrontNavbar />
              <div className="col recordcontent overflow-auto Col">
                <Route path="/Front/Index" component={Index} />
                <Route path="/Meeting/reconder" component={reconder} />
                
                <Route path="/detail" component={Financial_Detail} />
                <Route path="/Front/Financial/Index" component={Financial_Index} />
                <Route path="/Incomedetail" component={Income_Detail} />
                <Route path="/IncomeIndex" component={Income_Index} />

                <Route path="/ChartIndex" component={Chart_Index} />
                <Route path="/CompareIndex" component={CompareIndex} ></Route>

                <Route path="/Front/Login" component={Login} />
                <Route path="/Front/PW_account" component={PW_account} />
                <Route path="/Front/CheckPW" component={CheckPW} />
                <Route path="/Front/Choose" component={Choose} />
                <Route path="/Front/ChangePW" component={ChangePW} />
                <Route path="/Front/EditFile" component={EditFile} />
                <Route path="/Front/ReportMessage" component={ReportMessage} />
              </div>
            </div>
          </Switch>
        </HashRouter>
      </>
    )
  }
};
export default App2;