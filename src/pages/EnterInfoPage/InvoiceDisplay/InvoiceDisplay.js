import classNames from "classnames/bind";
import { useRef } from "react";

import DownloadButton from '../../../components/DownloadButton';
import styles from "./InvoiceDisplay.module.scss";

const cx = classNames.bind(styles);
function InvoiceDisplay() {
  const invoiceUpdate = useRef(null);
  return (
    <div className={cx("invoice")} id='invoice-update' ref={invoiceUpdate}>
      <div className={cx("information")}>
        <div className={cx("year")}>2023</div>
        <div className={cx("name")}>Trần Minh Ngọc</div>
        <div className={cx("subject")}>Toán</div>
        <div className={cx("class")}>8</div>
      </div>
      <div className={cx("content")}>
        <div className={cx("row")}>
          <div className={cx("item", "payment-time")}>10/10/2023</div>
          <div className={cx("item", "learn-time")}>10/09-10/10</div>
          <div className={cx("item", "tuition-fee")}>500k</div>
          <div className={cx("item", "confirm")}>Đã thu</div>
          <div className={cx("item", "note")}>CK</div>
        </div>
        <div className={cx("row")}>
          <div className={cx("item", "payment-time")}>10/10/2023</div>
          <div className={cx("item", "learn-time")}>10/09-10/10</div>
          <div className={cx("item", "tuition-fee")}>500k</div>
          <div className={cx("item", "confirm")}>Đã thu</div>
          <div className={cx("item", "note")}>CK</div>
        </div>
        <div className={cx("row")}>
          <div className={cx("item", "payment-time")}>10/10/2023</div>
          <div className={cx("item", "learn-time")}>10/09-10/10</div>
          <div className={cx("item", "tuition-fee")}>500k</div>
          <div className={cx("item", "confirm")}>Đã thu</div>
          <div className={cx("item", "note")}>CK</div>
        </div>
        <div className={cx("row")}>
          <div className={cx("item", "payment-time")}>10/10/2023</div>
          <div className={cx("item", "learn-time")}>10/09-10/10</div>
          <div className={cx("item", "tuition-fee")}>500k</div>
          <div className={cx("item", "confirm")}>Đã thu</div>
          <div className={cx("item", "note")}>CK</div>
        </div>
        <div className={cx("row")}>
          <div className={cx("item", "payment-time")}>10/10/2023</div>
          <div className={cx("item", "learn-time")}>10/09-10/10</div>
          <div className={cx("item", "tuition-fee")}>500k</div>
          <div className={cx("item", "confirm")}>Đã thu</div>
          <div className={cx("item", "note")}>CK</div>
        </div>
        <div className={cx("row")}>
          <div className={cx("item", "payment-time")}>10/10/2023</div>
          <div className={cx("item", "learn-time")}>10/09-10/10</div>
          <div className={cx("item", "tuition-fee")}>500k</div>
          <div className={cx("item", "confirm")}>Đã thu</div>
          <div className={cx("item", "note")}>CK</div>
        </div>
        <div className={cx("row")}>
          <div className={cx("item", "payment-time")}>10/10/2023</div>
          <div className={cx("item", "learn-time")}>10/09-10/10</div>
          <div className={cx("item", "tuition-fee")}>500k</div>
          <div className={cx("item", "confirm")}>Đã thu</div>
          <div className={cx("item", "note")}>CK</div>
        </div>
        <div className={cx("row")}>
          <div className={cx("item", "payment-time")}>10/10/2023</div>
          <div className={cx("item", "learn-time")}>10/09-10/10</div>
          <div className={cx("item", "tuition-fee")}>500k</div>
          <div className={cx("item", "confirm")}>Đã thu</div>
          <div className={cx("item", "note")}>CK</div>
        </div>
        <div className={cx("row")}>
          <div className={cx("item", "payment-time")}>10/10/2023</div>
          <div className={cx("item", "learn-time")}>10/09-10/10</div>
          <div className={cx("item", "tuition-fee")}>500k</div>
          <div className={cx("item", "confirm")}>Đã thu</div>
          <div className={cx("item", "note")}>CK</div>
        </div>
        <div className={cx("row")}>
          <div className={cx("item", "payment-time")}>10/10/2023</div>
          <div className={cx("item", "learn-time")}>10/09-10/10</div>
          <div className={cx("item", "tuition-fee")}>500k</div>
          <div className={cx("item", "confirm")}>Đã thu</div>
          <div className={cx("item", "note")}>CK</div>
        </div>
        <div className={cx("row")}>
          <div className={cx("item", "payment-time")}>10/10/2023</div>
          <div className={cx("item", "learn-time")}>10/09-10/10</div>
          <div className={cx("item", "tuition-fee")}>500k</div>
          <div className={cx("item", "confirm")}>Đã thu</div>
          <div className={cx("item", "note")}>CK</div>
        </div>
        <div className={cx("row")}>
          <div className={cx("item", "payment-time")}>10/10/2023</div>
          <div className={cx("item", "learn-time")}>10/09-10/10</div>
          <div className={cx("item", "tuition-fee")}>500k</div>
          <div className={cx("item", "confirm")}>Đã thu</div>
          <div className={cx("item", "note")}>CK</div>
        </div>
      </div>
      <DownloadButton domEl={invoiceUpdate}/>
    </div>
  );
}

export default InvoiceDisplay;
