import classNames from "classnames/bind";

import styles from "./EnterStudentForm.module.scss";
import { TextField } from "@mui/material";

const cx = classNames.bind(styles);
function EnterStudentForm() {
  return <form>
    <div className={cx('form-control')}>
        <label className={cx('input-label')}>Tên học sinh:</label>
        <TextField type="text" />
    </div>
  </form>;
}

export default EnterStudentForm;
