import classNames from "classnames/bind";
import { TextField, Autocomplete } from "@mui/material";
import { useForm } from "react-hook-form";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useContext } from "react";

import styles from "./PaymentInfo.module.scss";
import UpdateButton from "../UpdateButton";
import { AppContext } from '../../context/AppProvider';
import { db } from "../../firebase/config";
import { toast } from "react-toastify";
import { generateRandomId } from "../../utilities";

const paymentOptions = [{ label: "Chuyển khoản" }, { label: "Tiền mặt" }];
const cx = classNames.bind(styles);
function PaymentInfo() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const { selectedStudent } = useContext(AppContext);

  const onSubmit = async(data) => {
    const { paymentDate } = data;
    const year = +paymentDate.slice(0, 4);
    const invoicesRef = doc(collection(db, "invoices"));
    await setDoc(invoicesRef, {
      uid: generateRandomId(20),
      studentUid: selectedStudent.uid,
      year,
      ...data,
      createAt: serverTimestamp(),
    }).then(() => toast.success('Cập nhật thông tin hóa đơn thành công.'))
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
          onSelect={() => setError('method', null)}
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
      <UpdateButton sx={{ mt: 1, width: '100%', minHeight: '45px', fontSize: '1.4rem'}} onClick={handleSubmit(onSubmit)} />
    </form>
  );
}

export default PaymentInfo;
