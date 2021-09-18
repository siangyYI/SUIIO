import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const LastTotal = 10000;

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(date, name, unit,item,income,expend) {
  const price = priceRow(income, expend);
  return { date, name, unit,item,income,expend,price };
}

function inocmetotal(items) {
  return items.map(({ income }) => income).reduce((sum, i) => sum + i, 0);
}

function expendtotal(items) {
  return items.map(({ expend }) => expend).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('01', "109大迎新",	"活動",	"廠商贊助",	98,2),
  createRow('16', "109大迎新",	"活動",	"文具用品"	,1,	4200),
];

const inocmeTotal = inocmetotal(rows);
const expendTotal = expendtotal(rows);

const AllTotal = inocmeTotal - expendTotal;
const All = AllTotal - LastTotal;

export default function FinancialTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={6}>
            109 一月財報
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">日期</TableCell>
            <TableCell align="right">活動名稱</TableCell>
            <TableCell align="right">申請單位</TableCell>
            <TableCell align="right">收支項目</TableCell>
            <TableCell align="right">收入</TableCell>
            <TableCell align="right">支出</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.date}>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.unit}</TableCell>
              <TableCell align="right">{row.item}</TableCell>
              <TableCell align="right">{row.income}</TableCell>
              <TableCell align="right">{row.expend}</TableCell>

            </TableRow>
          ))}

          <TableRow >
            <TableCell/>
            <TableCell colSpan={3}  align="right">合計</TableCell>
            <TableCell align="right" style={{color:"green"}}>{inocmeTotal}</TableCell>
            <TableCell align="right" style={{color:"red"}}>{expendTotal}</TableCell>

          </TableRow>
          <TableRow>
            <TableCell colSpan={3} align="center">本期淨利(損)</TableCell>
            <TableCell colSpan={3} align="center">{AllTotal}</TableCell>

          </TableRow>
          <TableRow>
            <TableCell colSpan={3} align="center">上期餘額</TableCell>
            <TableCell colSpan={3} align="center">{LastTotal}</TableCell>

          </TableRow>
          <TableRow>
            <TableCell colSpan={3} align="center">Total</TableCell>
            <TableCell colSpan={3} align="center">{All}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
