import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./Financial.css";
const LastTotal = 10000;

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(month, date, name, unit, item, income, expend) {
  const price = priceRow(income, expend);
  return { month, date, name, unit, item, income, expend, price };
}

function inocmetotal(items) {
  return items.map(({ income }) => income).reduce((sum, i) => sum + i, 0);
}

function expendtotal(items) {
  return items.map(({ expend }) => expend).reduce((sum, i) => sum + i, 0);
}

// const rows = [
//   createRow("01", "07", "109大迎新", "活動", "廠商贊助", 98, 0),
//   createRow("01", "09", "109大迎新", "活動", "文具用品", 0, 4200),
//   createRow("01", "10", "109大迎新", "活動", "廠商贊助", 2333, 0),
//   createRow("01", "17", "109大迎新", "活動", "文具用品", 0, 100),
//   createRow("01", "20", "109大迎新", "活動", "廠商贊助", 4343, 0),
//   createRow("01", "27", "109大迎新", "活動", "文具用品", 0, 200),
// ];

// const inocmeTotal = inocmetotal(rows);
// const expendTotal = expendtotal(rows);

// const AllTotal = inocmeTotal - expendTotal;
// const All = AllTotal + LastTotal;
// console.log(rows);
export class FinancialTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statements: [],
      selected: {},
      accounts: [],
      ContentShow: false,
      class: "",
      AddShow: false,
      review: false,
      id: "",
      name: "",
      date: "",
      acc: [],
    };
  }

  update = () => {
    fetch("http://localhost:4000/api/statement/fetch/all")
      .then((res) => res.json())
      .then((data) => this.setState({ statements: data }));
  };
  fetchContent = async (id) => {
    await fetch(`http://localhost:4000/api/statement/fetch/id/${id}`)
      .then((res) => res.json())
      .then((data) => this.setState({ accounts: data }));
  };

  async componentDidMount() {
    let ary1 = [];
    let ary2 = [];
    let ary3 = [];
    let name = [];
    let date = [];
    let url = window.location.href;
    if (url.indexOf("?") !== -1) {
      ary1 = url.split("?");
      ary2 = ary1[1].split("&");
      ary3 = ary2[0].split("=");
      name = ary2[1].split("=");
      date = ary2[2].split("=")
      console.log(name)
      await this.setState({ id: ary3[1] });
      await this.setState({ name: name[1] });
      await this.setState({ date: date[1] });
      console.log(date);
    }
    await this.fetchContent(this.state.id);
    await this.setState({ acc: this.state.accounts.accounts });
  }

  render() {
    let lastYear = "",
      income = 0,
      cost = 0;
    console.log(this.state.acc.reverse());
    return (
      <>
        {" "}
        <h4 style={{ fontWeight: 'bold' }}>{decodeURI(this.state.name)}</h4>
        <TableContainer component={Paper}>
          <Table className={{ minWidth: 700 }} aria-label="spanning table">
            <TableHead style={{ backgroundColor: "#ffe69b" }}>
              <TableRow>
                <TableCell align="center" style={{ width: "20px" }}>
                  月
                </TableCell>
                <TableCell align="center" style={{ width: "20px" }}>
                  日
                </TableCell>
                <TableCell align="center" style={{ width: "165px" }}>
                  收支名稱
                </TableCell>
                <TableCell align="center" style={{ width: "150px" }}>
                  活動類別
                </TableCell>
                <TableCell align="center" style={{ width: "100px" }}>
                  申請人
                </TableCell>
                <TableCell
                  align="center"
                  style={{ width: "250px" }}
                >
                  摘要
                </TableCell>
                <TableCell align="center">收入</TableCell>
                <TableCell align="center">支出</TableCell>
              </TableRow>
              <TableRow>
                <th
                  colSpan={8}
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
                let { statements } = this.props;
                let category;
                if (x.category == "其他項目") {
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
                x.amount > 0 ? (amountcost = "-") : (amountcost = x.amount);
                return (

                  <TableRow key={month}>
                    <TableCell align="center" >
                      <div className="host badge badge-secondary" style={{ backgroundColor: "#ffe69b", color: "black", fontSize: '16px' }}>
                        {month}
                      </div>

                    </TableCell>
                    <TableCell align="center" >
                      <div className="host badge badge-secondary" style={{ backgroundColor: "#ffe69b", color: "black", fontSize: '16px' }}>
                        {day}
                      </div>

                    </TableCell>
                    <TableCell align="center">{x.name}</TableCell>
                    <TableCell align="center" >
                      <div>
                        {category}
                      </div>
                    </TableCell>
                    <TableCell align="center">{x.uploadBy}</TableCell>
                    <TableCell align="center">{x.content}</TableCell>
                    <TableCell align="center">{amountincome}</TableCell>
                    <TableCell align="center">{amountcost}</TableCell>
                  </TableRow>
                );
              })}

              <TableRow>
                <TableCell />
                <TableCell colSpan={5} align="center">
                  合計
                </TableCell>
                <TableCell align="center" style={{ color: "green" }}>
                  {income}
                </TableCell>
                <TableCell align="center" style={{ color: "red" }}>
                  {cost}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer component={Paper} className="mt-4">
          <Table style={{ backgroundColor: "burlywood", color: "white" }}>
            <TableRow>
              <TableCell colSpan={5} align="center">
                本期淨利(損)
              </TableCell>
              <TableCell colSpan={2} align="center">
                {/* {AllTotal} */}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={5} align="center">
                上期餘額
              </TableCell>
              <TableCell colSpan={2} align="center">
                {LastTotal}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={5} align="center">
                總資產
              </TableCell>
              <TableCell colSpan={2} align="center">
                {/* {All} */}
              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </>
    );
  }
}
