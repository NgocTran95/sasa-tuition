import classNames from "classnames/bind";
import { useContext, useRef } from "react";

import DownloadButton from "../../../components/DownloadButton";
import styles from "./InvoiceDisplay.module.scss";
import { AppContext } from "../../../context/AppProvider";
import { formatLearnProcess, formatPaymentDate } from "../../../utilities";

const cx = classNames.bind(styles);
function InvoiceDisplay() {
  const invoiceUpdate = useRef(null);
  const { selectedStudent, selectedYear, invoices } = useContext(AppContext);
  return (
    <div className={cx("invoice")} id="invoice-update" ref={invoiceUpdate}>
      <div className={cx("information")}>
        <div className={cx("year")}>{selectedYear || ""}</div>
        <div className={cx("name")}>{selectedStudent?.name || ""}</div>
        <div className={cx("subject")}>{!!selectedYear && "Toán"}</div>
        <div className={cx("class")}>{selectedStudent?.class || ""}</div>
      </div>
      <div className={cx("content")}>
        {invoices.map((invoice) => (
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
            <div className={cx("item", "note")}>{invoice.method === 'Chuyển khoản' ? 'CK': 'Cash'}</div>
          </div>
        ))}
      </div>
      <DownloadButton domEl={invoiceUpdate} />
    </div>
  );
}

export default InvoiceDisplay;
