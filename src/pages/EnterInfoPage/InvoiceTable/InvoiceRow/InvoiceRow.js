import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@mui/material";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";

import styles from "./InvoiceRow.module.scss";
import { formatShortDate, getMiddleMonth } from "../../../../utilities";
import { AppContext } from "../../../../context/AppProvider";

const cx = classNames.bind(styles);
function InvoiceRow({ invoiceData, invoiceKey }) {
  const { setEditInvoiceModal, setDeleteInvoiceModal, setEditInvoice } =
    useContext(AppContext);
  return (
    <div key={invoiceKey}>
      <div className={cx("row")}>
        <div className={cx("column", "month")}>
          {getMiddleMonth(invoiceData?.startDate, invoiceData?.endDate)}
        </div>
        <div className={cx("column", "payment-date")}>
          {formatShortDate(invoiceData?.paymentDate)}
        </div>
        <div className={cx("column", "from")}>
          {formatShortDate(invoiceData?.startDate)}
        </div>
        <div className={cx("column", "to")}>
          {formatShortDate(invoiceData?.endDate)}
        </div>
        <div className={cx("column", "amount")}>{invoiceData?.amount}</div>
        <div className={cx("column", "method")}>
          {invoiceData?.method === "Tiền mặt" ? "Cash" : "CK"}
        </div>
        <div className={cx("column", "action")}>
          <IconButton
            sx={{ minHeight: "45px", aspectRatio: 1 }}
            onClick={() => {
              setEditInvoice(invoiceData);
              setEditInvoiceModal(true);
            }}
          >
            <FontAwesomeIcon icon={faPencil} />
          </IconButton>
        </div>
        <div className={cx("column", "action")}>
          <IconButton
            sx={{ minHeight: "45px", aspectRatio: 1 }}
            onClick={() => {
              setEditInvoice(invoiceData);
              setDeleteInvoiceModal(true);
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default InvoiceRow;
