import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Icon } from "semantic-ui-react";
import user from "../../../Image/user.png";

// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(date, name, project) {
  return {
    date,
    name,
    project,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <Icon disabled name="angle up" />
            ) : (
              <Icon disabled name="angle down" />
            )}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.date}
        </TableCell>
        <TableCell align="right">{row.name}</TableCell>
        <TableCell align="right">{row.project}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="d-flex flex-row py-2">
                        <div className="d-flex flex-column mr-4">
                          <img
                            src={user}
                            alt="member"
                            width="30pt"
                            height="30pt"
                            class="d-flex align-items-center"
                          ></img>
                          <div>小詹</div>
                        </div>
                        <div className="d-flex flex-column">
                          <div>2021/05/15 下午09:15:24</div>
                          {/* </MessageHead> */}
                          <div>大迎新紅包是甚麼??</div>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="d-flex flex-row py-2">
                        <div className="d-flex flex-column mr-4">
                          <img
                            src={user}
                            alt="member"
                            width="30pt"
                            height="30pt"
                            class="d-flex align-items-center"
                          ></img>
                          <div>小詹</div>
                        </div>
                        <div className="d-flex flex-column">
                          <div>2021/05/15 下午09:15:24</div>
                          {/* </MessageHead> */}
                          <div>大迎新紅包是甚麼??</div>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>{" "}
                  <TableRow>
                    <TableCell>
                      <div className="d-flex flex-row py-2">
                        <div className="d-flex flex-column mr-4">
                          <img
                            src={user}
                            alt="member"
                            width="30pt"
                            height="30pt"
                            class="d-flex align-items-center"
                          ></img>
                          <div>小詹</div>
                        </div>
                        <div className="d-flex flex-column">
                          <div>2021/05/15 下午09:15:24</div>
                          {/* </MessageHead> */}
                          <div>大迎新紅包是甚麼??</div>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData("2021-05-13", "小詹", "109 四月財報"),
  createData("2021-02-19", "詹一", "109 二月財報"),
  createData("2021-01-01", "小詹", "109 一月財報"),
];

export default function ReportTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>留言日期</TableCell>
            <TableCell align="right">成員名稱</TableCell>
            <TableCell align="right">報表名稱</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.date} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
