import React, { Component } from "react";
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
      oldyear: "",
      reverseacc: [],
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
    await this.setState({ category: this.state.accounts.category });
    await this.setState({ date: this.state.accounts.date });
    await this.setState({ accounts: this.state.accounts });
    console.log(this.state.category);
  }

  render() {
    let lastYear = "",
      income = 0,
      cost = 0,
      clear = 0,
      oldbalance = 0,
      clearfont = "";
    let categoryF;
    if (this.state.accounts.category === "其他項目") {
      // eslint-disable-next-line react/no-direct-mutation-state
      this.state.accounts.category = "一般報表";
      categoryF = (
        <div
          className="host badge badge-secondary"
          style={{ backgroundColor: "#4f5784", color: "#e6ddd8" }}
        >
          {this.state.accounts.category}
        </div>
      );
    } else {
      categoryF = (
        <div
          className="host badge badge-secondary"
          style={{ backgroundColor: "#009688", color: "white" }}
        >
          {this.state.accounts.category}
        </div>
      );
    }
    return (
      <>
        {" "}
        <div className="row">
          <h4 className="col" style={{ fontWeight: "bold" }}>
            <span className="mr-3">{this.state.name}</span>

            {categoryF}
          </h4>
          <h4 className="col text-right" style={{ fontWeight: "bold" }}>
            {this.state.date}
          </h4>
        </div>
        <TableContainer component={Paper} className="mt-2">
          <Table style={{ minWidth: "700" }} aria-label="spanning table">
            <TableHead style={{ backgroundColor: "#ffe69b" }}>
              <TableRow>
                <TableCell align="center" style={{ width: "2%" , fontWeight: "bold" }}>
                  月
                </TableCell>
                <TableCell align="center" style={{ width: "2%", fontWeight: "bold"  }}>
                  日
                </TableCell>
                <TableCell align="center" style={{ width: "100px" , fontWeight: "bold" }}>
                  申請人
                </TableCell>
                <TableCell align="center" style={{ width: "100px" , fontWeight: "bold" }}>
                  活動類別
                </TableCell>
                <TableCell  style={{ width: "200px", fontWeight: "bold" }}  >
                  收支名稱
                </TableCell>
                <TableCell align="center" style={{ width: "100px", fontWeight: "bold"  }}>
                  收入
                </TableCell>
                <TableCell align="center" style={{ width: "100px", fontWeight: "bold"  }}>
                  支出
                </TableCell>
              </TableRow>
              <TableRow>
                <th
                  colSpan={7}
                  style={{
                    backgroundColor: "#5c84ad",
                    color: "white",
                    height: "33px",
                    textAlign: "center",
                  }}
                >
                  {this.oldyear}
                </th>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.acc.map((x) => {
                const date = new Date(x.date);
                const year = date.getFullYear();
                const month = date.getMonth() + 1;
                const day = date.getDate();
                this.oldyear = year;
                let category;
                if (x.category === "其他項目") {
                  category = "一般項目";
                  // console.log(x.category);
                  category = (
                    <div
                      className="host badge badge-secondary"
                      style={{ backgroundColor: "#ae714f", color: "white" }}
                    >
                      {category}
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

                if (year !== lastYear) {
                  
                  lastYear = year;
                }
                x.amount > 0 ? (income += x.amount) : (cost += x.amount * -1);
                let amountincome;
                let amountcost;

                x.amount > 0
                  ? (amountincome = Number(
                      parseFloat(x.amount).toFixed(3)
                    ).toLocaleString("en", {
                      minimumFractionDigits: 0,
                    }))
                  : (amountincome = "--");
                x.amount > 0
                  ? (amountcost = "--")
                  : (amountcost = Number(
                      parseFloat(Math.abs(x.amount)).toFixed(3)
                    ).toLocaleString("en", {
                      minimumFractionDigits: 0,
                    }));
                clear = income - cost;
                oldbalance = this.state.accounts.balance - income + cost;
                clear > 0 ? (clearfont = "本期淨利") : (clearfont = "本期淨損");
                return (
                  <Link
                    to={`/income/detail?ID=${x.ID}`}
                    style={{ color: "black", display: "contents" }}
                    target="_blank"
                    className="FTable"
                  >
                    <TableRow
                      key={month}
                      style={{ height: "100%", width: "100%" }}
                    >
                      <TableCell align="center">{month}</TableCell>
                      <TableCell align="center">{day}</TableCell>
                      <TableCell align="center">{x.uploadBy}</TableCell>
                      <TableCell align="center">
                        <div>{category}</div>
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        {x.name}
                      </TableCell>
                      <TableCell align="right" style={{color:"green"}} className="fontSize">{amountincome}</TableCell>
                      <TableCell align="right"style={{color:"red"}} className="fontSize">{amountcost}</TableCell>
                    </TableRow>
                  </Link>
                );
              })}
              <TableRow
                style={{ backgroundColor: "#ffe69b", fontSize: "18px" }}
              >
                <TableCell />
                <TableCell className="total" colSpan={4} align="center">
                  合計
                </TableCell>
                <TableCell
                  align="right"
                  className="total"
                  style={{ color: "green" }}
                >
                  NT$&nbsp;
                  {Number(parseFloat(income).toFixed(3)).toLocaleString("en", {
                    minimumFractionDigits: 0,
                  })}
                </TableCell>
                <TableCell
                  align="right"
                  className="total"
                  style={{ color: "red", fontSize: "18px" }}
                >
                  NT$&nbsp;
                  {Number(parseFloat(cost).toFixed(3)).toLocaleString("en", {
                    minimumFractionDigits: 0,
                  })}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer
          component={Paper}
          className="mt-4"
          style={{ width: "40%", margin:"0 auto"}}
        >
          <Table style={{ backgroundColor: "#ae714f", color: "white" }}>
            <TableRow>
              <TableCell className="AllTotal" align="center">
                {clearfont}
              </TableCell>
              <TableCell className="AllTotal" align="center">
                NT$ &nbsp;
                {Number(parseFloat(Math.abs(clear)).toFixed(3)).toLocaleString(
                  "en",
                  {
                    minimumFractionDigits: 0,
                  }
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="AllTotal" align="center">
                上期餘額
              </TableCell>
              <TableCell className="AllTotal" align="center">
                NT$ &nbsp;
                {Number(
                  parseFloat(Math.abs(oldbalance)).toFixed(3)
                ).toLocaleString("en", {
                  minimumFractionDigits: 0,
                })}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="AllTotal"  align="center">
                本期餘額
              </TableCell>
              <TableCell className="AllTotal" align="center">
                NT$ &nbsp;
                {Number(
                  parseFloat(this.state.accounts.balance).toFixed(3)
                ).toLocaleString("en", {
                  minimumFractionDigits: 0,
                })}
              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </>
    );
  }
}
