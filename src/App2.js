import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { Component } from 'react';
import './App.css';
import FrontNavigationBar from './compnents/Front_Side/FrontNavigationBar';
import FrontNavbar from './compnents/Front_Side/FrontNavbar'
import Switch from 'react-bootstrap/esm/Switch';
import Index from './compnents/Front_Side/FrontMeeting/Index';
import reconder from './compnents/Front_Side/FrontMeeting/Reconder';

import Financial_Detail from './compnents/Front_Side/FrontFinancial/Financial/Financial_Detail';
import Financial_Index from './compnents/Front_Side/FrontFinancial/Financial/Financial_Index';
import Income_Detail from './compnents/Front_Side/FrontFinancial/Income/Income_Detail';
import Income_Index from './compnents/Front_Side/FrontFinancial/Income/Income_Index';
import Chart_Index from './compnents/Front_Side/Frontchart/ChartIndex';
class App2 extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <Switch>
            <div className="row">
              <FrontNavigationBar />
              <FrontNavbar />
              <div className="col recordcontent overflow-auto">
              <Route path="/Front/Index" component={Index} />
              <Route path="/Meeting/reconder" component={reconder} />
              <Route path="/detail" component={Financial_Detail} />
              <Route path="/Front/Financial/Index" component={Financial_Index} />
              <Route path="/Incomedetail" component={Income_Detail} />
              <Route path="/IncomeIndex" component={Income_Index} />

              <Route path="/ChartIndex" component={Chart_Index} />
              </div>
            </div>
          </Switch>
        </HashRouter>
      </>
    )
  }
};
export default App2;