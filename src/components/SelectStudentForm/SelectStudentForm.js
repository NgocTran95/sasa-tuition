import classNames from "classnames/bind";
import { Autocomplete, TextField } from "@mui/material";

import styles from "./SelectStudentForm.module.scss";

const classOptions = [
  { label: "Lớp 6", value: 6 },
  { label: "Lớp 7", value: 7 },
  { label: "Lớp 8", value: 8 },
  { label: "Lớp 9", value: 9 },
];

const studentOptions = [
  { label: "Trần Minh Ngọc" },
  { label: "Hồ Thị Sa" },
  { label: "Hồ Thị Pha" },
  { label: "Trần Thị Ánh Hồng" },
];

const cx = classNames.bind(styles);
function SelectStudentForm() {
  return (
    <div className={cx("container")}>
      <h2 className={cx("title")}>Nhập thông tin học sinh</h2>
      <div className={cx("form-control")}>
        <label className={cx("input-label")} htmlFor="class">
          Lớp:{" "}
        </label>
        <Autocomplete
          name="class"
          id="class"
          options={classOptions}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          renderInput={(params) => (
            <TextField
              placeholder="Chọn lớp..."
              {...params}
              inputProps={{ ...params.inputProps, style: { fontSize: 14 } }}
            />
          )}
        />
      </div>
      <div className={cx("form-control")}>
        <label className={cx("input-label")} htmlFor="studentName">
          Họ và tên:{" "}
        </label>
        <Autocomplete
          name="studentName"
          id="studentName"
          options={studentOptions}
          isOptionEqualToValue={(option, value) => option.label === value.label}
          renderInput={(params) => (
            <TextField
              placeholder="Chọn học sinh..."
              {...params}
              inputProps={{ ...params.inputProps, style: { fontSize: 14 } }}
            />
          )}
        />
      </div>
    </div>
  );
}

export default SelectStudentForm;
