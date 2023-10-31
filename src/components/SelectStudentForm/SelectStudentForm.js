import classNames from "classnames/bind";
import { Autocomplete, TextField } from "@mui/material";
import { useContext } from "react";

import styles from "./SelectStudentForm.module.scss";
import { AppContext } from "../../context/AppProvider";

const cx = classNames.bind(styles);
function SelectStudentForm() {
  const {
    students,
    selectedStudent,
    setSelectedStudent,
    selectedYear,
    setSelectedYear,
  } = useContext(AppContext);
  console.log(selectedStudent, selectedYear);
  return (
    <div className={cx("container")}>
      <h2 className={cx("title")}>Chọn học sinh</h2>
      <div className={cx("form-control")}>
        <label className={cx("input-label")} htmlFor="selectStudent">
          Họ và tên:{" "}
        </label>
        <Autocomplete
          options={students}
          getOptionLabel={(option) => option.name + " - Lớp " + option.class}
          isOptionEqualToValue={(option, value) => option.label === value.label}
          onChange={(e, value) => setSelectedStudent(value)}
          renderInput={(params) => (
            <TextField
              placeholder="Chọn học sinh..."
              {...params}
              inputProps={{ ...params.inputProps, style: { fontSize: 14 } }}
            />
          )}
        />
      </div>
      <div className={cx("form-control")}>
        <label className={cx("input-label")} htmlFor="selectYear">
          Năm:{" "}
        </label>
        <TextField
          type="number"
          sx={{ fontSize: '1.4rem', width: "100%" }}
          onChange={(e) => setSelectedYear(+e.target.value)}
        />
      </div>
    </div>
  );
}

export default SelectStudentForm;
