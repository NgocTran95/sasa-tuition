import classNames from "classnames/bind";

import styles from "./InvoiceDisplay.module.scss";
import { Button } from "@mui/material";

const cx = classNames.bind(styles);
function InvoiceDisplay() {
  return (
    <div className={cx("invoice")}>
      <div className={cx("information")}>
        <div className={cx("year")}>2023</div>
        <div className={cx("name")}>Trần Minh Ngọc</div>
        <div className={cx("subject")}>Toán</div>
        <div className={cx("class")}>8</div>
      </div>
      <Button
        variant="contained"
        color="warning"
        className={cx("download-btn")}
      >
        Tải về
      </Button>
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
    </div>
  );
}

export default InvoiceDisplay;
