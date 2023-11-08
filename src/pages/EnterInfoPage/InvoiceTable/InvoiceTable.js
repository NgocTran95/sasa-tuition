import classNames from "classnames/bind";
import { useContext, useMemo } from "react";

import styles from "./InvoiceTable.module.scss";
import { AppContext } from "../../../context/AppProvider";
import { getMiddleMonth } from "../../../utilities";
import InvoiceRow from "./InvoiceRow/InvoiceRow";
import EditInvoiceModal from "../../../modals/EditInvoiceModal";
import DeleteInvoiceModal from "../../../modals/DeleteInvoiceModal";
const cx = classNames.bind(styles);
function InvoiceTable() {
  const { updateInvoiceStudent, updateInvoiceYear, invoices } =
    useContext(AppContext);
  const studentInvoices = useMemo(() => {
    return invoices
      .filter((invoice) => invoice.year === updateInvoiceYear)
      .filter((invoice) => invoice.studentId === updateInvoiceStudent?.id)
      .sort(
        (a, b) =>
          getMiddleMonth(a.startDate, a.endDate) -
          getMiddleMonth(b.startDate, b.endDate)
      );
  }, [invoices, updateInvoiceStudent, updateInvoiceYear]);
  return (
    <div className={cx("table")}>
      <h2 className={cx("title")}>Bảng thông tin học phí</h2>
      <p className={cx("student-name")}>
        Học sinh: {updateInvoiceStudent?.name}
      </p>
      <div className={cx("row", "head")}>
        <div className={cx("column", "month")}>Tháng</div>
        <div className={cx("column", "payment-date")}>Ngày</div>
        <div className={cx("column", "from")}>Từ</div>
        <div className={cx("column", "to")}>Đến</div>
        <div className={cx("column", "amount")}>Số tiền</div>
        <div className={cx("column", "method")}>PTTT</div>
        <div className={cx("column", "action")}>Sửa</div>
        <div className={cx("column", "action")}>Xóa</div>
      </div>
      {studentInvoices.map((invoice) => (
        <InvoiceRow invoiceData={invoice} key={invoice?.id} />
      ))}
      <EditInvoiceModal />
      <DeleteInvoiceModal />
    </div>
  );
}

export default InvoiceTable;
