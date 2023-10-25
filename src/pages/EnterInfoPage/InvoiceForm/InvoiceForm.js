import classNames from "classnames/bind";
import {
  TextField,
  Autocomplete,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";

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
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className={cx("form")} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={cx("title")}>Điền thông tin học phí</h2>
      <div className={cx("form-control")}>
        <label className={cx("input-label")} htmlFor="studentName">
          Họ và tên:{" "}
        </label>
        <TextField
          type="text"
          id="studentName"
          name="studentName"
          placeholder="Nhập họ và tên học sinh..."
          fullWidth
          {...register('studentName', { required: 'Bạn chưa nhập tên học sinh'})}
        />
        {errors.studentName && errors.studentName.type === "required" && (
        <span className={cx('error-msg')}>{errors.studentName.message}</span>
      )}
      </div>
      <div className={cx("form-control")}>
        <label className={cx("input-label")} htmlFor="class">
          Lớp:{" "}
        </label>
        <Autocomplete name="class" id="class" options={classOptions} isOptionEqualToValue={(option,value) => option.value === value.value } renderInput={(params) => <TextField {...params} {...register('class', { required: 'Bạn chưa nhập thông tin lớp'})}/>}/>
        {errors.class && errors.class.type === "required" && (
        <span className={cx('error-msg')}>{errors.class.message}</span>
      )}
      </div>
      <div className={cx("form-control")}>
        <label className={cx("input-label")} htmlFor="payment-date">
          Thời gian nộp học phí:{" "}
        </label>
        <TextField type="date" id="payment-date" name="payment-date"  fullWidth {...register('payment-date', { required: 'Bạn chưa nhập ngày nộp học phí'})}/>
      </div>
      <div className="form-control">
        <p className={cx("input-label")}>Thời gian học:</p>
        <div className={cx("learn-date-part")}>
          <label className={cx("input-label")} htmlFor="start-date">
            Từ:{" "}
          </label>
          <TextField type="date" id="start-date" name="start-date"  fullWidth {...register('start-date', { required: 'Bạn chưa nhập ngày bắt đầu học'})}/>
        </div>
        <div className={cx("learn-date-part")}>
          <label className={cx("input-label")} htmlFor="end-date">
            Đến:{" "}
          </label>
          <TextField type="date" id="end-date" name="end-date"  fullWidth {...register('end-date', { required: 'Bạn chưa nhập ngày kết thúc học'})}/>
        </div>
      </div>
      <div className={cx("form-control")}>
        <label className={cx("input-label")} htmlFor="amount">
          Học phí:{" "}
        </label>
        <TextField type="number" id="amount" name="amount"  fullWidth {...register('amount', { required: 'Bạn chưa nhập số tiền đóng học phí'})}/>
        <span>{"(VNĐ)"}</span>
      </div>
      <div className={cx("form-control")}>
        <label className={cx("input-label")} htmlFor="method">
          Phương thức thanh toán:{" "}
        </label>
        <Autocomplete name="method" id="method" options={paymentOptions} renderInput={(params) => <TextField {...params} {...register('method')}/>}/>
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
        onClick={handleSubmit(onSubmit)}
      >
        Cập nhật
      </Button>
    </form>
  );
}

export default InvoiceForm;
