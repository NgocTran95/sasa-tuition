import classNames from "classnames/bind";
import { Autocomplete, IconButton, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { updateDoc, doc } from "firebase/firestore";
import { useContext } from "react";

import styles from "./StudentRow.module.scss";
import { db } from "../../../../firebase/config";
import { minimumClassOptions } from "../../../../constants";
import { AppContext } from "../../../../context/AppProvider";
import { toast } from "react-toastify";
import UpdateButton from "../../../../components/UpdateButton";

const cx = classNames.bind(styles);
function StudentRow({ student, index }) {
  const { students, setDeleteStudentModal , setDeleteStudent } = useContext(AppContext);
  const [edit, setEdit] = useState(false);

  const toggleEdit = () => {
    setEdit((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const updateStudent = async (data) => {
    const { class: classStr, name } = data;
    const studentClass = classStr === 'Đã TN' ? "Đã tốt nghiệp" : +classStr;
    const graduatedYear = classStr === 'Đã TN' ? new Date().getFullYear() : null;
    const isExist = students.some(
      (student) => student.name === name && student.class === studentClass
    );
    if (isExist) {
      toast.error("Dữ liệu đã tồn tại.");
    } else {
      await updateDoc(doc(db, "students", student.id), {
        name: data.name,
        class: studentClass,
        graduatedYear,
      }).finally(() => {
        setEdit(false);
        toast.success("Đã cập nhật thành công");
      });
    }
  };
  return (
    <div>
      <div className={cx("row")}>
        <div className={cx("column", "num-oder")}>{index + 1}</div>
        <div className={cx("column", "name")}>{student.name}</div>
        <div className={cx("column", "class")}>{student.class}</div>
        <div className={cx("column", "edit")}>
          <IconButton
            className={cx("edit-btn")}
            sx={{ minHeight: "45px", aspectRatio: 1 }}
            onClick={toggleEdit}
          >
            <FontAwesomeIcon icon={faPencil} />
          </IconButton>
        </div>
        <div className={cx("column", "delete")}>
          <IconButton
            className={cx("edit-btn")}
            sx={{ minHeight: "45px", aspectRatio: 1 }}
            onClick={() => {
              setDeleteStudent(student);
              setDeleteStudentModal(true);
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </IconButton>
        </div>
      </div>
      {/*Edit Field to update student info */}
      {edit && (
        <form className={cx("row")} onSubmit={handleSubmit(updateStudent)}>
          <div className={cx("column", "num-oder")}>Cập nhật</div>
          <div className={cx("column", "edit-name")}>
            <TextField
              inputProps={{ style: { fontSize: 14 } }}
              type="text"
              required
              fullWidth
              defaultValue={student?.name}
              {...register("name", { required: "Thiếu tên" })}
            />
            {errors.name && errors.name.type === "required" && (
              <span className={cx("error-msg")}>{errors.name.message}</span>
            )}
          </div>
          <div className={cx("column", "edit-class")}>
            <Autocomplete
              options={minimumClassOptions}
              isOptionEqualToValue={(option, value) =>
                option.value === value.value
              }
              defaultValue={student.class === "Đã tốt nghiệp" ? 'Đã TN' : student.class}
              sx={{ height: "100%" }}
              onSelect={() => setError("class", null)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  inputProps={{ ...params.inputProps, style: { fontSize: 14 } }}
                  {...register("class", { required: "Thiếu lớp" })}
                />
              )}
            />
            {errors.class && errors.class.type === "required" && (
              <span className={cx("error-msg")}>{errors.class.message}</span>
            )}
          </div>
          <div className={cx("column", "edit-btn-container")}>
            <UpdateButton
              type="submit"
              className={cx("edit-btn")}
              sx={{
                minHeight: "45px",
                width: "60%",
                fontSize: "1rem",
              }}
              onClick={handleSubmit(updateStudent)}
              content="OK"
            />
          </div>
        </form>
      )}
    </div>
  );
}

export default StudentRow;
