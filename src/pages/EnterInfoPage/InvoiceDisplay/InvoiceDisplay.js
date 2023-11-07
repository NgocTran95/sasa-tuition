import classNames from "classnames/bind";
import { useContext, useMemo, useRef } from "react";

import DownloadButton from "../../../components/DownloadButton";
import styles from "./InvoiceDisplay.module.scss";
import { AppContext } from "../../../context/AppProvider";
import {
  formatLearnProcess,
  formatPaymentDate,
  getMiddleMonth,
} from "../../../utilities";

const cx = classNames.bind(styles);
function InvoiceDisplay() {
  const invoiceUpdate = useRef(null);
  const { addInvoiceStudent, addInvoiceYear, invoices } =
    useContext(AppContext);
  const displayInvoices = useMemo(
    () =>
      invoices
        .filter((invoice) => invoice.studentId === addInvoiceStudent?.id)
        .filter((invoice) => invoice.year === addInvoiceYear)
        .sort(
          (a, b) =>
            getMiddleMonth(a.startDate, a.endDate) -
            getMiddleMonth(b.startDate, b.endDate)
        ),
    [invoices, addInvoiceStudent, addInvoiceYear]
  );
  return (
    <div className={cx("invoice")} id="invoice-update" ref={invoiceUpdate}>
      <div className={cx("information")}>
        <div className={cx("year")}>{addInvoiceYear || ""}</div>
        <div className={cx("name")}>{addInvoiceStudent?.name || ""}</div>
        <div className={cx("subject")}>{!!addInvoiceYear && "Toán"}</div>
        <div className={cx("class")}>{addInvoiceStudent?.class || ""}</div>
      </div>
      <div className={cx("content")}>
        {displayInvoices.map((invoice) => (
          <div className={cx("row")} key={invoice.createAt}>
            <div className={cx("item", "payment-time")}>
              {formatPaymentDate(invoice?.paymentDate)}
            </div>
            <div className={cx("item", "learn-time")}>
              {formatLearnProcess(invoice?.startDate, invoice?.endDate)}
            </div>
            <div className={cx("item", "tuition-fee")}>
              {invoice.amount / 1000}k
            </div>
            <div className={cx("item", "confirm")}>Đã thu</div>
            <div className={cx("item", "note")}>
              {invoice.method === "Chuyển khoản" ? "CK" : "Cash"}
            </div>
          </div>
        ))}
      </div>
      <DownloadButton domEl={invoiceUpdate} />
    </div>
  );
}

export default InvoiceDisplay;
