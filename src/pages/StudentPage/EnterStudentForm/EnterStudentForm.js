import classNames from "classnames/bind";
import { TextField, Autocomplete } from "@mui/material";
import { useForm } from "react-hook-form";

import styles from "./EnterStudentForm.module.scss";
import { classOptions } from "../../../constants";
import UpdateButton from "../../../components/UpdateButton";

const cx = classNames.bind(styles);
function EnterStudentForm() {
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
      <h2 className={cx("title")}>Điền thông tin học sinh</h2>
      <div className={cx("form-control")}>
        <label className={cx("input-label")} htmlFor="enterStudentName">
          Tên học sinh:
        </label>
        <TextField
          type="text"
          name="enterStudentName"
          id="enterStudentName"
          placeholder="Nhập họ và tên học sinh..."
          inputProps={{ style: { fontSize: 14 } }}
          fullWidth
          {...register("enterStudentName", {
            required: "Bạn chưa nhập họ tên học sinh",
          })}
        />
        {errors.enterStudentName &&
          errors.enterStudentName.type === "required" && (
            <span className={cx("error-msg")}>
              {errors.enterStudentName.message}
            </span>
          )}
      </div>
      <div className={cx("form-control")}>
        <label className={cx("input-label")} htmlFor="enterClass">
          Lớp:
        </label>
        <Autocomplete
          name="enterClass"
          id="enterClass"
          options={classOptions}
          isOptionEqualToValue={(option, value) => option.label === value.label}
          renderInput={(params) => (
            <TextField
              placeholder="Chọn lớp..."
              {...params}
              inputProps={{ ...params.inputProps, style: { fontSize: 14 } }}
              {...register("enterClass", {
                required: "Bạn chưa nhập lớp",
              })}
            />
          )}
        />
        {errors.enterClass && errors.enterClass.type === "required" && (
          <span className={cx("error-msg")}>{errors.enterClass.message}</span>
        )}
      </div>
      <UpdateButton onClick={handleSubmit(onSubmit)} content={"Thêm mới"} />
    </form>
  );
}

export default EnterStudentForm;
