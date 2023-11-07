import classNames from "classnames/bind";
import { useContext } from "react";

import styles from "./InvoiceForm.module.scss";
import SelectStudentForm from "../../../components/SelectStudentForm";
import PaymentInfo from "../../../components/PaymentInfo";
import { AppContext } from "../../../context/AppProvider";


const cx = classNames.bind(styles);
function InvoiceForm() {
  const { setAddInvoiceStudent, setAddInvoiceYear } = useContext(AppContext)
  return (
    <div className={cx("container")}>
      <SelectStudentForm setStudent={setAddInvoiceStudent} setYear={setAddInvoiceYear}/>
      <PaymentInfo />
    </div>
  );
}

export default InvoiceForm;
