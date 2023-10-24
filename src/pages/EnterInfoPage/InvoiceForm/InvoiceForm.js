import classNames from "classnames/bind";
import {
  TextField,
  Autocomplete,
  FormControl,
  Button,
  Container,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { validateEnterInfoSchema } from "../../../validateForm/validateSchema";
import styles from "./InvoiceForm.module.scss";

const classOptions = [
  { label: "Lớp 6", value: 6 },
  { label: "Lớp 7", value: 7 },
  { label: "Lớp 8", value: 8 },
  { label: "Lớp 9", value: 9 },
];
const paymentOptions = [{ label: "Chuyển khoản" }, { label: "Tiền mặt" }];

const cx = classNames.bind(styles);
function InvoiceForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validateEnterInfoSchema) });

  const updateInvoice = (data) => {
    console.log(data);
  };
  return (
    <form className={cx("form")} onSubmit={handleSubmit(updateInvoice)}>
      <h2 className={cx("title")}>Điền thông tin học phí</h2>
      <div className={cx("form-control")}>
        <label className={cx("input-label")} htmlFor="student-name">
          Họ và tên:{" "}
        </label>
        <input
          type="text"
          id="student-name"
          autoComplete="student-name"
          placeholder="Enter student name..."
        />
      </div>
      <div className={cx("form-control")}>
        <label className={cx("input-label")} htmlFor="class">
          Lớp:{" "}
        </label>
        <select name="class" id="class">
          {classOptions.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      <div className={cx("form-control")}>
        <label className={cx("input-label")} htmlFor="payment-date">
          Thời gian nộp học phí:{" "}
        </label>
        <input type="date" id="payment-date" name="payment-date" />
      </div>
      <div className="form-control">
        <p className={cx("input-label")}>Thời gian học:</p>
        <div className={cx("learn-date-part")}>
          <label className={cx("input-label")} htmlFor="start-date">
            Từ:{" "}
          </label>
          <input type="date" id="start-date" name="start-date" />
        </div>
        <div className={cx("learn-date-part")}>
          <label className={cx("input-label")} htmlFor="end-date">
            Đến:{" "}
          </label>
          <input type="date" id="end-date" name="end-date" />
        </div>
      </div>
      <div className={cx("form-control")}>
        <label className={cx("input-label")} htmlFor="amount">
          Học phí:{" "}
        </label>
        <input
          type="number"
          id="amount"
          autoComplete="amount"
          placeholder="Enter tuition payment..."
        />
        <span>{"(VNĐ)"}</span>
      </div>
      <div className={cx("form-control")}>
        <label className={cx("input-label")} htmlFor="payment-method">
          Phương thức thanh toán:{" "}
        </label>
        <select name="payment-method" id="payment-method">
          {paymentOptions.map((option) => (
            <option value={option.label}>{option.label}</option>
          ))}
        </select>
      </div>
      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{
          minHeight: "50px",
          width: "100%",
          marginTop: "10px",
          fontSize: "1.5rem",
        }}
        onClick={handleSubmit(updateInvoice)}
      >
        Cập nhật
      </Button>
    </form>
  );
}

export default InvoiceForm;
