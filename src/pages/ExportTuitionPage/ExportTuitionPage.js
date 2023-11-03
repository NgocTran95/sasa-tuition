import classNames from "classnames";
import { CSVLink } from "react-csv";
import { useContext } from "react";

import styles from "./ExportTuitionPage.module.scss";
import { AppContext } from "../../context/AppProvider";
import { useState } from "react";
import { useEffect } from "react";
import { getMiddleMonth } from "../../utilities";

const cx = classNames.bind(styles);

function ExportTuitionPage() {
  const { students, allInvoices } = useContext(AppContext);
  const [exportData, setExportData] = useState([]);

  useEffect(() => {
    let temp = [];
    students.forEach((student) => {
      let paymentState = {};
      for (let i = 1; i <= 12; i++) {
        paymentState[`Tháng ${i}`] = "";
      }
      let studentInvoices = allInvoices.filter(
        (invoice) => invoice.studentId === student.id
      );
      studentInvoices.forEach((invoice) => {
        const month = getMiddleMonth(invoice.startDate, invoice.endDate);
        paymentState[`Tháng ${month}`] = "Đã thu";
      });
      temp.push({
        name: student.name,
        class: student.class,
        paymentState,
      });
    });
    setExportData(temp);
  }, [students, allInvoices]);

  const headers = [
    {
      lable: "Họ và Tên",
      key: "name",
    },
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
    <div className={cx("container")}>
      {
        <CSVLink data={exportData} headers={headers}>
          Xuất file
        </CSVLink>
      }
    </div>
  );
}

export default ExportTuitionPage;
