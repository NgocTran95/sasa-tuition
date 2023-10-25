import classNames from "classnames/bind";

import styles from "./InvoiceForm.module.scss";
import StudentForm from "../../../components/StudentForm";
import PaymentInfo from "../../../components/PaymentInfo";


const cx = classNames.bind(styles);
function InvoiceForm() {
  return (
    <div className={cx("container")}>
      <StudentForm />
      <PaymentInfo />
    </div>
  );
}

export default InvoiceForm;
