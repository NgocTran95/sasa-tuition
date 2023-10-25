import classNames from "classnames/bind";
import { TextField, Autocomplete, Button } from "@mui/material";
import { useForm } from "react-hook-form";

import styles from "./PaymentInfo.module.scss";

const paymentOptions = [{ label: "Chuyển khoản" }, { label: "Tiền mặt" }];
const cx = classNames.bind(styles);
function PaymentInfo() {
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
        <label className={cx("input-label")} htmlFor="paymentDate">
          Thời gian nộp học phí:{" "}
        </label>
        <TextField
          type="date"
          id="paymentDate"
          name="paymentDate"
          inputProps={{ style: { fontSize: 14 } }}
          fullWidth
          {...register("paymentDate", {
            required: "Bạn chưa nhập ngày nộp học phí",
          })}
        />
        {errors.paymentDate && errors.paymentDate.type === "required" && (
          <span className={cx("error-msg")}>{errors.paymentDate.message}</span>
        )}
      </div>
      <div className="form-control">
        <p className={cx("input-label")}>Thời gian học:</p>
        <div className={cx("learn-date")}>
          <div className={cx("learn-date-part")}>
            <label className={cx("input-label")} htmlFor="startDate">
              Từ:{" "}
            </label>
            <TextField
              type="date"
              id="startDate"
              name="startDate"
              inputProps={{ style: { fontSize: 14 } }}
              fullWidth
              {...register("startDate", {
                required: "Bạn chưa nhập ngày bắt đầu học",
              })}
            />
            {errors.startDate && errors.startDate.type === "required" && (
              <span className={cx("error-msg")}>
                {errors.startDate.message}
              </span>
            )}
          </div>
          <div className={cx("learn-date-part")}>
            <label className={cx("input-label")} htmlFor="endDate">
              Đến:{" "}
            </label>
            <TextField
              type="date"
              id="endDate"
              name="endDate"
              inputProps={{ style: { fontSize: 14 } }}
              fullWidth
              {...register("endDate", {
                required: "Bạn chưa nhập ngày kết thúc học",
              })}
            />
            {errors.endDate && errors.endDate.type === "required" && (
              <span className={cx("error-msg")}>{errors.endDate.message}</span>
            )}
          </div>
        </div>
      </div>
      <div className={cx("form-control")}>
        <label className={cx("input-label")} htmlFor="amount">
          Học phí:{" "}
        </label>
        <TextField
          type="number"
          id="amount"
          name="amount"
          inputProps={{ style: { fontSize: 14 } }}
          fullWidth
          {...register("amount", {
            required: "Bạn chưa nhập số tiền đóng học phí",
          })}
        />
        <span>{"(VNĐ)"}</span>
        {errors.amount && errors.amount.type === "required" && (
          <span className={cx("error-msg")}>{errors.amount.message}</span>
        )}
      </div>
      <div className={cx("form-control")}>
        <label className={cx("input-label")} htmlFor="method">
          Phương thức thanh toán:{" "}
        </label>
        <Autocomplete
          name="method"
          id="method"
          options={paymentOptions}
          isOptionEqualToValue={(option, value) => option.label === value.label}
          renderInput={(params) => (
            <TextField
              {...params}
              inputProps={{ ...params.inputProps, style: { fontSize: 14 } }}
              {...register("method", {
                required: "Bạn chưa nhập phương thức thanh toán",
              })}
            />
          )}
        />
        {errors.method && errors.method.type === "required" && (
          <span className={cx("error-msg")}>{errors.method.message}</span>
        )}
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

export default PaymentInfo;
