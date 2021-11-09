import * as React from "react";
import Table from "@material-ui/core//Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import MessageFile from "./MessageFile";

export default function DenseTable() {
  return (
    <>
      <h4 className="m-4" style={{ fontWeight: "bold" }}>
        留言紀錄
      </h4>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell
                colSpan={5}
                align="center"
                style={{
                  borderBottom: "5px solid #e2e2e2",
                  fontSize: "15px",
                  height: "50px",
                }}
              >
                109 四月財報
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <MessageFile />
            <MessageFile />
            <MessageFile />
          </TableBody>
          <TableHead>
            <TableRow>
              <TableCell
                colSpan={5}
                align="center"
                style={{
                  borderBottom: "5px solid #e2e2e2",
                  fontSize: "15px",
                  height: "50px",
                }}
              >
                109 三月財報
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  <MessageFile />
                  <MessageFile />
                </TableBody>
              </Table>
            </Box>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
