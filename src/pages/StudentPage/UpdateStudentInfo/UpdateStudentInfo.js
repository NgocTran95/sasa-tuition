import classNames from "classnames/bind";

import styles from "./UpdateStudentInfo.module.scss";
import SelectStudentForm from "../../../components/SelectStudentForm/SelectStudentForm";

const cx = classNames.bind(styles);
function UpdateStudentInfo() {
  return (
    <div className={cx("container")}>
      <SelectStudentForm />
      <div className={cx('student-info')}>
        
      </div>
    </div>
  );
}

export default UpdateStudentInfo;
