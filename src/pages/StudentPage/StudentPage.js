import classNames from "classnames/bind";

import styles from "./StudentPage.module.scss";
import EnterStudentForm from "../../components/EnterStudentForm/EnterStudentForm";
const cx = classNames.bind(styles);
function StudentPage() {
  return (
    <div className={cx("container")}>
      <EnterStudentForm />
    </div>
  );
}

export default StudentPage;
