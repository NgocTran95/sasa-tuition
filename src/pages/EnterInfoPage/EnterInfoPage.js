import classNames from "classnames/bind";
import { Button } from "@mui/material";

import styles from "./EnterInfoPage.module.scss";
import InvoiceForm from './InvoiceForm';
import InvoiceDisplay from "./InvoiceDisplay";
import { useState } from "react";

const cx = classNames.bind(styles);
function EnterInfoPage() {
  return (
    <section className={cx("container")}>
      <InvoiceForm />
      <InvoiceDisplay />
    </section>
  );
}

export default EnterInfoPage;
