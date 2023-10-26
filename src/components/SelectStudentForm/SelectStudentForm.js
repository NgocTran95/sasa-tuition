import classNames from "classnames/bind";
import { Autocomplete, TextField } from "@mui/material";

import styles from "./SelectStudentForm.module.scss";
import { studentOptions } from "../../constants";

const cx = classNames.bind(styles);
function SelectStudentForm() {
  return (
    <div className={cx("container")}>
      <h2 className={cx("title")}>Chọn học sinh</h2>
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
