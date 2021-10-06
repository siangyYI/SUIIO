import React from "react";
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

const rows = [
  createRow("01", "07", "109大迎新", "活動", "廠商贊助", 98, 0),
  createRow("01", "09", "109大迎新", "活動", "文具用品", 0, 4200),
  createRow("01", "10", "109大迎新", "活動", "廠商贊助", 2333, 0),
  createRow("01", "17", "109大迎新", "活動", "文具用品", 0, 100),
  createRow("01", "20", "109大迎新", "活動", "廠商贊助", 4343, 0),
  createRow("01", "27", "109大迎新", "活動", "文具用品", 0, 200),
];

const inocmeTotal = inocmetotal(rows);
const expendTotal = expendtotal(rows);

const AllTotal = inocmeTotal - expendTotal;
const All = AllTotal + LastTotal;

export const FinancialTable = (props) => {
  const classes = useStyles();

  return (
    <>
      {" "}
      <h4>109 一月財報</h4>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead style={{ backgroundColor: "#ffe69b" }}>
            <TableRow>
              <TableCell align="center" style={{ width: "20px" }}>
                月
              </TableCell>
              <TableCell align="center" style={{ width: "20px" }}>
                日
              </TableCell>
              <TableCell align="left" style={{ width: "150px" }}>
                活動類別
              </TableCell>
              <TableCell align="left" style={{ width: "100px" }}>
                申請人
              </TableCell>
              <TableCell
                align="left"
                style={{ width: "250px", fontWeight: "bold" }}
              >
                摘要
              </TableCell>
              <TableCell align="center">收入</TableCell>
              <TableCell align="center">支出</TableCell>
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
                2019年
              </th>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.accounts.map(x => {

              { const date = new Date(x.date) }
              { const year = this.date.getFullYear() }
              { const month = this.getMonth() + 1 }
              { const day = this.getDate() }
              <TableRow key={x.month}>
                <TableCell align="center">
                  {x.month}
                </TableCell>
                <TableCell align="center">
                  {x.date}
                </TableCell>
                <TableCell align="left">
                  {x.name}
                </TableCell>
                <TableCell align="left">
                  {x.unit}
                </TableCell>
                <TableCell align="left" style={{ fontWeight: "bold" }}>
                  {x.item}
                </TableCell>
                <TableCell align="right">
                  {x.income}
                </TableCell>
                <TableCell align="right">
                  {x.expend}
                </TableCell>
              </TableRow>
            })}

            <TableRow>
              <TableCell />
              <TableCell colSpan={4} align="right">
                合計
              </TableCell>
              <TableCell align="right" style={{ color: "green" }}>
                {inocmeTotal}
              </TableCell>
              <TableCell align="right" style={{ color: "red" }}>
                {expendTotal}
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
              {AllTotal}
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
              {All}
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </>
  );
}
