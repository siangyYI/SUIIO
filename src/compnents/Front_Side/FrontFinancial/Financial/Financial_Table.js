import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import "./Financial.css";

export class FinancialTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statements: [],
      selected: {},
      accounts: [],
      id: "",
      name: "",
      date: "",
      acc: [],
    };
  }
  fetchContent = async (id) => {
    await fetch(`http://localhost:4000/api/statement/fetch/id/${id}`)
      .then((res) => res.json())
      .then((data) => this.setState({ accounts: data }));
  };

  async componentDidMount() {
    let ary1 = [];
    let ary2 = [];
    let ary3 = [];
    let url = window.location.href;
    if (url.indexOf("?") !== -1) {
      ary1 = url.split("?");
      ary2 = ary1[1].split("&");
      ary3 = ary2[0].split("=");
      await this.setState({ id: ary3[1] });

    }
    await this.fetchContent(this.state.id);
    await this.setState({ acc: this.state.accounts.accounts });
    await this.setState({ name: this.state.accounts.name });
    await this.setState({ date: this.state.accounts.date });
    await this.setState({ accounts: this.state.accounts });
    console.log(this.state.accounts);
  }

  render() {
    let lastYear = "",
      income = 0,
      cost = 0,
      clear = 0,
      oldbalance = 0,
      clearfont = ""

    return (
      <>
        {" "}
        <h4 style={{ fontWeight: 'bold' }}>{this.state.name}</h4>
        <TableContainer component={Paper}>
          <Table className={{ minWidth: 700 }} aria-label="spanning table">
            <TableHead style={{ backgroundColor: "#ffe69b" }}>
              <TableRow>
                <TableCell align="center" style={{ width: "2px" }}>
                  月
                </TableCell>
                <TableCell align="center" style={{ width: "2px" }}>
                  日
                </TableCell>
                <TableCell align="center" style={{ width: "100px" }}>
                  申請人
                </TableCell>
                <TableCell align="center" style={{ width: "150px" }}>
                  活動類別
                </TableCell>
                <TableCell align="center" style={{ width: "125px" }}>
                  收支名稱
                </TableCell>
                <TableCell align="center" style={{ width: "100px" }}>收入</TableCell>
                <TableCell align="center" style={{ width: "100px" }}>支出</TableCell>
              </TableRow>
              <TableRow>
                <th
                  colSpan={7}
                  style={{
                    backgroundColor: "#a2a8ae",
                    color: "white",
                    height: "20px",
                    textAlign: "center",
                  }}
                >
                  {this.state.date}
                </th>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.acc.map((x) => {
                const date = new Date(x.date);
                const year = date.getFullYear();
                const month = date.getMonth() + 1;
                const day = date.getDate();

                let category;
                if (x.category == "一般項目") {
                  x.category = "一般報表";
                  console.log(x.category)
                  category = (
                    <div
                      className="host badge badge-secondary"
                      style={{ backgroundColor: "#ae714f", color: "#e6ddd8" }}
                    >
                      {x.category}
                    </div>
                  );
                } else {
                  category = (
                    <div
                      className="host badge badge-secondary"
                      style={{ backgroundColor: "#59420a", color: "white" }}
                    >
                      {x.category}
                    </div>
                  );
                }

                let newYear = false;

                if (year !== lastYear) {
                  newYear = true;
                  lastYear = year;
                }
                x.amount > 0 ? (income += x.amount) : (cost += x.amount * -1);
                let amountincome;
                let amountcost;

                x.amount > 0 ? (amountincome = x.amount) : (amountincome = "-");
                x.amount > 0 ? (amountcost = "-") : (amountcost = Math.abs(x.amount));
                clear = income - cost;
                oldbalance = this.state.accounts.balance - income + cost
                console.log(clear)
                clear > 0 ? (clearfont = "本期淨利") : (clearfont = "本期淨損");
                console.log(clearfont)
                return (

                  <TableRow key={month}>

                    <TableCell align="center" >
                      <Link
                        to={`/Incomedetail?ID=${x.ID}`}
                        style={{ color: "black" }}
                      >
                        {month}
                      </Link>
                    </TableCell>
                    <TableCell align="center" >
                      <Link
                        to={`/Incomedetail?ID=${x.ID}`}
                        style={{ color: "black" }}
                      >
                        {day}
                      </Link>
                    </TableCell>
                    <TableCell align="center">
                      <Link
                        to={`/Incomedetail?ID=${x.ID}`}
                        style={{ color: "black" }}
                      >
                        {x.uploadBy}
                      </Link>
                    </TableCell>
                    <TableCell align="center" >
                      <Link
                        to={`/Incomedetail?ID=${x.ID}`}
                        style={{ color: "black" }}
                      >
                        <div>
                          {category}
                        </div>
                      </Link>
                    </TableCell>
                    <TableCell align="center">
                      <Link
                        to={`/Incomedetail?ID=${x.ID}`}
                        style={{ color: "black" }}
                      >
                        {x.name}
                      </Link>
                    </TableCell>
                    <TableCell align="right">
                      <Link
                        to={`/Incomedetail?ID=${x.ID}`}
                        style={{ color: "black" }}
                      >
                        {amountincome}
                      </Link>
                    </TableCell>
                    <TableCell align="right">
                      <Link
                        to={`/Incomedetail?ID=${x.ID}`}
                        style={{ color: "black" }}
                      >
                        {amountcost}
                      </Link>
                    </TableCell>
                  </TableRow>

                );
              })}
              <TableRow>
                <TableCell />
                <TableCell colSpan={4} align="center">
                  合計
                </TableCell>
                <TableCell align="right" style={{ color: "green" }}>
                  NT${income}
                </TableCell>
                <TableCell align="right" style={{ color: "red" }}>
                  NT${cost}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer component={Paper} className="mt-4" style={{ width: '700px' }}>
          <Table style={{ backgroundColor: "#ae714f", color: "white" }} >
            <TableRow>
              <TableCell colSpan={3} align="center">
                {clearfont}
              </TableCell>
              <TableCell align="center">
                NT${clear}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={3} align="center">
                上期餘額
              </TableCell>
              <TableCell align="center">
                NT${oldbalance}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={3} align="center">
                本期餘額
              </TableCell>
              <TableCell align="center">
                NT${this.state.accounts.balance}
              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </>
    );
  }
}
