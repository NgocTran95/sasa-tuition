import classNames from "classnames/bind";
import { useContext, useMemo } from "react";

import styles from "./UpdateStudentInfo.module.scss";
import SelectClassForm from "../../../components/SelectClassForm/SelectClassForm";
import { AppContext } from "../../../context/AppProvider";

const cx = classNames.bind(styles);
function UpdateStudentInfo() {
  const { selectedClass, students } = useContext(AppContext);
  const studentList = useMemo(() => students.filter(
    (student) => student.class === selectedClass?.value
  ), [selectedClass, students]);
  return (
    <div className={cx("container")}>
      <SelectClassForm />
      <div className={cx("students-info")}>
        <h2 className={cx('title')}>Danh sách học sinh</h2>
        {studentList.map((student) => (
          <div>{student.name}</div>
        ))}
      </div>
    </div>
  );
}

export default UpdateStudentInfo;
