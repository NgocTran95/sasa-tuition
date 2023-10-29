import classNames from "classnames/bind";
import { Autocomplete, TextField } from "@mui/material";
import { useContext } from "react";

import styles from "./SelectClassForm.module.scss";
import { AppContext } from "../../context/AppProvider";
import { classOptions } from "../../constants/index";

const cx = classNames.bind(styles);
function SelectClassForm() {
  const { selectedClass, setSelectedClass } = useContext(AppContext);
  const defaultProps = {
    options: classOptions,
    getOptionLabel: (option) => option.label,
  };
  return (
    <div className={cx("container")}>
      <h2 className={cx("title")}>Chọn lớp để cập nhật</h2>
      <div className={cx("form-control")}>
        <label className={cx("input-label")} htmlFor="selectClass">
          Chọn lớp:{" "}
        </label>
        <Autocomplete
          name="selectClass"
          id="selectClass"
          {...defaultProps}
          value={selectedClass}
          onChange={(event, newValue) => {
            setSelectedClass(newValue);
          }}
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
    </div>
  );
}

export default SelectClassForm;
