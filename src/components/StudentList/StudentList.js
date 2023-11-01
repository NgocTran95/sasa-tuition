import classNames from "classnames/bind";
import { useContext, useMemo } from "react";

import styles from "./StudentList.module.scss";
import { AppContext } from "../../context/AppProvider";
import StudentRow from "./StudentRow/StudentRow";
import DeleteStudentModal from "../../modals/DeleteStudentModal/DeleteStudentModal";

const cx = classNames.bind(styles);
function StudentList() {
  const { selectedClass, students, deleteStudent } = useContext(AppContext);
  const studentList = useMemo(
    () => students.filter((student) => student.class === selectedClass?.value),
    [selectedClass, students]
  );
  return (
    <div className={cx("students-info")}>
      <h2 className={cx("title")}>Danh sách học sinh</h2>
      <div className={cx("students-list")}>
        <div className={cx("row")}>
          <div className={cx("header", "column", "num-oder")}>STT</div>
          <div className={cx("header", "column", "name")}>Họ và Tên</div>
          <div className={cx("header", "column", "class")}>Lớp</div>
          <div className={cx("header", "column", "edit")}>Cập nhật</div>
          <div className={cx("header", "column", "delete")}>Xóa</div>
        </div>
        {studentList.length === 0 ? (
          <div className={cx('notification')}>Không có dữ liệu</div>
        ) : (
          studentList.map((student, index) => (
            <StudentRow student={student} index={index} key={student.id}/>
          ))
        )}
      </div>
      <DeleteStudentModal student={deleteStudent}/>
    </div>
  );
}

export default StudentList;
