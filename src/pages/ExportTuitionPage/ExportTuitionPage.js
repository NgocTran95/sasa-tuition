import classNames from "classnames/bind";
import { CSVLink } from "react-csv";
import { useContext, useMemo } from "react";

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

const cx = classNames.bind(styles);

function ExportTuitionPage() {
  const { students, queryYear, setQueryYear, invoices } = useContext(AppContext);
  const [exportData, setExportData] = useState([]);
  const queryInvoices = useMemo(() => {
    return invoices.filter(invoice => invoice.year === queryYear)
  }, [queryYear, invoices])
  useEffect(() => {
    let temp = [];
    students.forEach((student) => {
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
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "1.4rem", fontWeight: 500 }}>
                Họ và Tên
              </TableCell>
              <TableCell
                sx={{ fontSize: "1.4rem", fontWeight: 500 }}
                align="center"
              >
                Lớp
              </TableCell>
              <TableCell
                sx={{ fontSize: "1.4rem", fontWeight: 500 }}
                align="center"
              >
                Tháng 1
              </TableCell>
              <TableCell
                sx={{ fontSize: "1.4rem", fontWeight: 500 }}
                align="center"
              >
                Tháng 2
              </TableCell>
              <TableCell
                sx={{ fontSize: "1.4rem", fontWeight: 500 }}
                align="center"
              >
                Tháng 3
              </TableCell>
              <TableCell
                sx={{ fontSize: "1.4rem", fontWeight: 500 }}
                align="center"
              >
                Tháng 4
              </TableCell>
              <TableCell
                sx={{ fontSize: "1.4rem", fontWeight: 500 }}
                align="center"
              >
                Tháng 5
              </TableCell>
              <TableCell
                sx={{ fontSize: "1.4rem", fontWeight: 500 }}
                align="center"
              >
                Tháng 6
              </TableCell>
              <TableCell
                sx={{ fontSize: "1.4rem", fontWeight: 500 }}
                align="center"
              >
                Tháng 7
              </TableCell>
              <TableCell
                sx={{ fontSize: "1.4rem", fontWeight: 500 }}
                align="center"
              >
                Tháng 8
              </TableCell>
              <TableCell
                sx={{ fontSize: "1.4rem", fontWeight: 500 }}
                align="center"
              >
                Tháng 9
              </TableCell>
              <TableCell
                sx={{ fontSize: "1.4rem", fontWeight: 500 }}
                align="center"
              >
                Tháng 10
              </TableCell>
              <TableCell
                sx={{ fontSize: "1.4rem", fontWeight: 500 }}
                align="center"
              >
                Tháng 11
              </TableCell>
              <TableCell
                sx={{ fontSize: "1.4rem", fontWeight: 500 }}
                align="center"
              >
                Tháng 12
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exportData.map((student) => (
              <TableRow
                key={student.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ fontSize: "1.3rem", minWidth: "200px" }}>
                  {student.name}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1.3rem" }}>
                  {student.class}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1.3rem" }}>
                  {student.paymentState["Tháng 1"] === "Đã thu" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1.3rem" }}>
                  {student.paymentState["Tháng 2"] === "Đã thu" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1.3rem" }}>
                  {student.paymentState["Tháng 3"] === "Đã thu" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1.3rem" }}>
                  {student.paymentState["Tháng 4"] === "Đã thu" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1.3rem" }}>
                  {student.paymentState["Tháng 5"] === "Đã thu" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1.3rem" }}>
                  {student.paymentState["Tháng 6"] === "Đã thu" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1.3rem" }}>
                  {student.paymentState["Tháng 7"] === "Đã thu" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1.3rem" }}>
                  {student.paymentState["Tháng 8"] === "Đã thu" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1.3rem" }}>
                  {student.paymentState["Tháng 9"] === "Đã thu" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1.3rem" }}>
                  {student.paymentState["Tháng 10"] === "Đã thu" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1.3rem" }}>
                  {student.paymentState["Tháng 11"] === "Đã thu" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1.3rem" }}>
                  {student.paymentState["Tháng 12"] === "Đã thu" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ExportTuitionPage;
