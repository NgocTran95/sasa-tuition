import classNames from "classnames/bind";

import styles from "./InvoiceForm.module.scss";
import SelectStudentForm from "../../../components/SelectStudentForm";
import PaymentInfo from "../../../components/PaymentInfo";


const cx = classNames.bind(styles);
function InvoiceForm() {
  return (
    <div className={cx("container")}>
      <SelectStudentForm />
      <PaymentInfo />
    </div>
  );
}

export default InvoiceForm;
