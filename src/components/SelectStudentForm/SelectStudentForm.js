import classNames from "classnames/bind";
import { Autocomplete, TextField } from "@mui/material";

import { useContext } from "react";

import styles from "./SelectStudentForm.module.scss";
import { AppContext } from "../../context/AppProvider";

const cx = classNames.bind(styles);
function SelectStudentForm() {

  const { students, setSelectedStudent, selectedStudent } = useContext(AppContext);
  const defaultProps = {
    options: students,
    getOptionLabel: (option) => option.name + ' - Lớp ' + option.class,
  };
  return (
    <div className={cx("container")}>
      <h2 className={cx("title")}>Chọn học sinh</h2>
      <div className={cx("form-control")}>
        <label className={cx("input-label")} htmlFor="selectStudent">
          Họ và tên:{" "}
        </label>
        <Autocomplete
          name="selectStudent"
          id="selectStudent"
          {...defaultProps}
          onChange={(event, newValue) => {
            setSelectedStudent(newValue);
          }}
          value={selectedStudent}
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
