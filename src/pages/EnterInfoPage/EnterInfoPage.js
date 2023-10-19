import classNames from "classnames/bind";
import { Button } from "@mui/material";

import styles from "./EnterInfoPage.module.scss";
import InvoiceForm from './InvoiceForm';
import { useState } from "react";

const cx = classNames.bind(styles);
function EnterInfoPage() {
  return (
    <section className={cx("container")}>
      <InvoiceForm />
      <div className={cx("invoice")} id="invoice">
        <div className={cx('content')}>
          <div className={cx('row')}>
            <div className={cx('item','payment-time')}>10/10/2023</div>
            <div className={cx('item','learn-time')}>10/09-10/10</div>
            <div className={cx('item','tuition-fee')}>500k</div>
            <div className={cx('item','confirm')}>Đã thu</div>
            <div className={cx('item','note')}>CK</div>
          </div>
          <div className={cx('row')}>
            <div className={cx('item','payment-time')}>10/10/2023</div>
            <div className={cx('item','learn-time')}>10/09-10/10</div>
            <div className={cx('item','tuition-fee')}>500k</div>
            <div className={cx('item','confirm')}>Đã thu</div>
            <div className={cx('item','note')}>CK</div>
          </div>
          <div className={cx('row')}>
            <div className={cx('item','payment-time')}>10/10/2023</div>
            <div className={cx('item','learn-time')}>10/09-10/10</div>
            <div className={cx('item','tuition-fee')}>500k</div>
            <div className={cx('item','confirm')}>Đã thu</div>
            <div className={cx('item','note')}>CK</div>
          </div>
          <div className={cx('row')}>
            <div className={cx('item','payment-time')}>10/10/2023</div>
            <div className={cx('item','learn-time')}>10/09-10/10</div>
            <div className={cx('item','tuition-fee')}>500k</div>
            <div className={cx('item','confirm')}>Đã thu</div>
            <div className={cx('item','note')}>CK</div>
          </div>
          <div className={cx('row')}>
            <div className={cx('item','payment-time')}>10/10/2023</div>
            <div className={cx('item','learn-time')}>10/09-10/10</div>
            <div className={cx('item','tuition-fee')}>500k</div>
            <div className={cx('item','confirm')}>Đã thu</div>
            <div className={cx('item','note')}>CK</div>
          </div>
          <div className={cx('row')}>
            <div className={cx('item','payment-time')}>10/10/2023</div>
            <div className={cx('item','learn-time')}>10/09-10/10</div>
            <div className={cx('item','tuition-fee')}>500k</div>
            <div className={cx('item','confirm')}>Đã thu</div>
            <div className={cx('item','note')}>CK</div>
          </div>
          <div className={cx('row')}>
            <div className={cx('item','payment-time')}>10/10/2023</div>
            <div className={cx('item','learn-time')}>10/09-10/10</div>
            <div className={cx('item','tuition-fee')}>500k</div>
            <div className={cx('item','confirm')}>Đã thu</div>
            <div className={cx('item','note')}>CK</div>
          </div>
          <div className={cx('row')}>
            <div className={cx('item','payment-time')}>10/10/2023</div>
            <div className={cx('item','learn-time')}>10/09-10/10</div>
            <div className={cx('item','tuition-fee')}>500k</div>
            <div className={cx('item','confirm')}>Đã thu</div>
            <div className={cx('item','note')}>CK</div>
          </div>
          <div className={cx('row')}>
            <div className={cx('item','payment-time')}>10/10/2023</div>
            <div className={cx('item','learn-time')}>10/09-10/10</div>
            <div className={cx('item','tuition-fee')}>500k</div>
            <div className={cx('item','confirm')}>Đã thu</div>
            <div className={cx('item','note')}>CK</div>
          </div>
          <div className={cx('row')}>
            <div className={cx('item','payment-time')}>10/10/2023</div>
            <div className={cx('item','learn-time')}>10/09-10/10</div>
            <div className={cx('item','tuition-fee')}>500k</div>
            <div className={cx('item','confirm')}>Đã thu</div>
            <div className={cx('item','note')}>CK</div>
          </div>
          <div className={cx('row')}>
            <div className={cx('item','payment-time')}>10/10/2023</div>
            <div className={cx('item','learn-time')}>10/09-10/10</div>
            <div className={cx('item','tuition-fee')}>500k</div>
            <div className={cx('item','confirm')}>Đã thu</div>
            <div className={cx('item','note')}>CK</div>
          </div>
          <div className={cx('row')}>
            <div className={cx('item','payment-time')}>10/10/2023</div>
            <div className={cx('item','learn-time')}>10/09-10/10</div>
            <div className={cx('item','tuition-fee')}>500k</div>
            <div className={cx('item','confirm')}>Đã thu</div>
            <div className={cx('item','note')}>CK</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnterInfoPage;
