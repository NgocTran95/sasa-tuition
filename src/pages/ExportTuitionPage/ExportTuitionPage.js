import classNames from "classnames/bind";
import { CSVLink } from "react-csv";
import { useContext, useMemo } from "react";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

import styles from "./ExportTuitionPage.module.scss";
import { AppContext } from "../../context/AppProvider";
import { useState } from "react";
import { useEffect } from "react";
import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  Box,
  TextField,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { getMiddleMonth } from "../../utilities";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const cx = classNames.bind(styles);

function ExportTuitionPage() {
  const { students, queryYear, setQueryYear, invoices } =
    useContext(AppContext);
  const [exportData, setExportData] = useState([]);
  const queryInvoices = useMemo(() => {
    return invoices.filter((invoice) => invoice.year === queryYear);
  }, [queryYear, invoices]);
  useEffect(() => {
    let temp = [];
    students
      .filter((student) => student.class !== "Đã tốt nghiệp")
      .forEach((student) => {
        let paymentState = {};
        for (let i = 1; i <= 12; i++) {
          paymentState[`Tháng ${i}`] = "";
        }
        let studentInvoices = queryInvoices.filter(
          (invoice) => invoice.studentId === student.id
        );
        studentInvoices.forEach((invoice) => {
          const month = getMiddleMonth(invoice.startDate, invoice.endDate);
          paymentState[`Tháng ${month}`] = "Đã thu";
        });
        temp.push({
          name: student.name,
          class: student.class,
          id: student.id,
          paymentState,
        });
      });
    setExportData(temp);
  }, [students, queryInvoices]);
  const headers = [
    { label: "Họ và Tên", key: "name" },
    { label: "Lớp", key: "class" },
    { label: "Tháng 1", key: "paymentState[Tháng 1]" },
    { label: "Tháng 2", key: "paymentState[Tháng 2]" },
    { label: "Tháng 3", key: "paymentState[Tháng 3]" },
    { label: "Tháng 4", key: "paymentState[Tháng 4]" },
    { label: "Tháng 5", key: "paymentState[Tháng 5]" },
    { label: "Tháng 6", key: "paymentState[Tháng 6]" },
    { label: "Tháng 7", key: "paymentState[Tháng 7]" },
    { label: "Tháng 8", key: "paymentState[Tháng 8]" },
    { label: "Tháng 9", key: "paymentState[Tháng 9]" },
    { label: "Tháng 10", key: "paymentState[Tháng 10]" },
    { label: "Tháng 11", key: "paymentState[Tháng 11]" },
    { label: "Tháng 12", key: "paymentState[Tháng 12]" },
  ];
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
          mt: 2,
        }}
      >
        <h3 className={cx("title")}>Thống kê học phí</h3>
        <CSVLink
          data={exportData}
          headers={headers}
          filename="Tinh-hinh-dong-hoc-phi.csv"
          className={cx("download-btn")}
        >
          Tải xuống
        </CSVLink>
      </Box>
      <label className={cx("input-label")} htmlFor="selectYear">
        Năm:{" "}
      </label>
      <TextField
        type="number"
        sx={{ fontSize: "1.4rem", width: "100%" }}
        onChange={(e) => setQueryYear(+e.target.value)}
      />
      <TableContainer component={Paper} sx={{ mt: 2, maxHeight: "60vh" }}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableCell
                sx={{ fontSize: "1.4rem", fontWeight: 500, padding: "8px" }}
              >
                Họ và Tên
              </StyledTableCell>
              <StyledTableCell
                sx={{ fontSize: "1.4rem", fontWeight: 500 }}
                align="center"
              >
                Lớp
              </StyledTableCell>
              <StyledTableCell
                sx={{ fontSize: "1.4rem", fontWeight: 500 }}
                align="center"
              >
                Tháng 1
              </StyledTableCell>
              <StyledTableCell
                sx={{ fontSize: "1.4rem", fontWeight: 500 }}
                align="center"
              >
                Tháng 2
              </StyledTableCell>
              <StyledTableCell
                sx={{ fontSize: "1.4rem", fontWeight: 500 }}
                align="center"
              >
                Tháng 3
              </StyledTableCell>
              <StyledTableCell
                sx={{ fontSize: "1.4rem", fontWeight: 500 }}
                align="center"
              >
                Tháng 4
              </StyledTableCell>
              <StyledTableCell
                sx={{ fontSize: "1.4rem", fontWeight: 500 }}
                align="center"
              >
                Tháng 5
              </StyledTableCell>
              <StyledTableCell
                sx={{ fontSize: "1.4rem", fontWeight: 500 }}
                align="center"
              >
                Tháng 6
              </StyledTableCell>
              <StyledTableCell
                sx={{ fontSize: "1.4rem", fontWeight: 500 }}
                align="center"
              >
                Tháng 7
              </StyledTableCell>
              <StyledTableCell
                sx={{ fontSize: "1.4rem", fontWeight: 500 }}
                align="center"
              >
                Tháng 8
              </StyledTableCell>
              <StyledTableCell
                sx={{ fontSize: "1.4rem", fontWeight: 500 }}
                align="center"
              >
                Tháng 9
              </StyledTableCell>
              <StyledTableCell
                sx={{ fontSize: "1.4rem", fontWeight: 500 }}
                align="center"
              >
                Tháng 10
              </StyledTableCell>
              <StyledTableCell
                sx={{ fontSize: "1.4rem", fontWeight: 500 }}
                align="center"
              >
                Tháng 11
              </StyledTableCell>
              <StyledTableCell
                sx={{ fontSize: "1.4rem", fontWeight: 500 }}
                align="center"
              >
                Tháng 12
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exportData.map((student) => (
              <StyledTableRow
                key={student.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell sx={{ fontSize: "1.3rem", minWidth: "100px" }}>
                  {student.name}
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ fontSize: "1.3rem" }}>
                  {student.class}
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ fontSize: "1.3rem" }}>
                  {student.paymentState["Tháng 1"] === "Đã thu" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ fontSize: "1.3rem" }}>
                  {student.paymentState["Tháng 2"] === "Đã thu" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ fontSize: "1.3rem" }}>
                  {student.paymentState["Tháng 3"] === "Đã thu" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ fontSize: "1.3rem" }}>
                  {student.paymentState["Tháng 4"] === "Đã thu" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ fontSize: "1.3rem" }}>
                  {student.paymentState["Tháng 5"] === "Đã thu" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ fontSize: "1.3rem" }}>
                  {student.paymentState["Tháng 6"] === "Đã thu" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ fontSize: "1.3rem" }}>
                  {student.paymentState["Tháng 7"] === "Đã thu" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ fontSize: "1.3rem" }}>
                  {student.paymentState["Tháng 8"] === "Đã thu" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ fontSize: "1.3rem" }}>
                  {student.paymentState["Tháng 9"] === "Đã thu" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ fontSize: "1.3rem" }}>
                  {student.paymentState["Tháng 10"] === "Đã thu" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ fontSize: "1.3rem" }}>
                  {student.paymentState["Tháng 11"] === "Đã thu" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ fontSize: "1.3rem" }}>
                  {student.paymentState["Tháng 12"] === "Đã thu" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ExportTuitionPage;
