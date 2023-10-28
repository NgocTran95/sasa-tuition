import classNames from "classnames/bind";
import { TextField, Autocomplete } from "@mui/material";
import { useForm } from "react-hook-form";
import { doc, collection, query, orderBy, onSnapshot, setDoc, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import styles from "./EnterStudentForm.module.scss";
import { classOptions } from "../../../constants";
import UpdateButton from "../../../components/UpdateButton";
import { db } from "../../../firebase/config";
import { generateRandomId } from "../../../utilities";

const cx = classNames.bind(styles);
function EnterStudentForm() {
  const [students, setStudents] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    const studentsRef = collection(db, "students");
    const querySnapshot = query(studentsRef, orderBy("createAt", "asc"));
    const unsubcribed = onSnapshot(querySnapshot, (snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        uid: doc.data().uid,
        name: doc.data().name,
        class: doc.data().class,
        createAt: doc.data().createAt,
      }));
      setStudents(documents);
    });
    return () => {
      unsubcribed();
    };
  },);
  const onSubmit = async ({ enterStudentName, enterClass }) => {
    const studentClass = +enterClass.slice(-1);
    const studentRef = doc(collection(db, 'students'));
    const isExist = students.some((student) => student.name === enterStudentName && student.class === studentClass);
    if (isExist) {
      toast.error('Dữ liệu đã tồn tại!')
    } else {
      await setDoc(studentRef, {
        uid: generateRandomId(12),
        name: enterStudentName,
        class: studentClass,
        createAt: serverTimestamp(),
      }).then(toast.success(`Thêm thành công ${enterStudentName} - lớp ${studentClass}`))
    }
  };
  return (
    <form className={cx("form")} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={cx("title")}>Điền thông tin học sinh</h2>
      <div className={cx("form-control")}>
        <label className={cx("input-label")} htmlFor="enterStudentName">
          Tên học sinh:
        </label>
        <TextField
          type="text"
          name="enterStudentName"
          id="enterStudentName"
          placeholder="Nhập họ và tên học sinh..."
          inputProps={{ style: { fontSize: 14 } }}
          fullWidth
          {...register("enterStudentName", {
            required: "Bạn chưa nhập họ tên học sinh",
          })}
        />
        {errors.enterStudentName &&
          errors.enterStudentName.type === "required" && (
            <span className={cx("error-msg")}>
              {errors.enterStudentName.message}
            </span>
          )}
      </div>
      <div className={cx("form-control")}>
        <label className={cx("input-label")} htmlFor="enterClass">
          Lớp:
        </label>
        <Autocomplete
          name="enterClass"
          id="enterClass"
          options={classOptions}
          isOptionEqualToValue={(option, value) => option.label === value.label}
          renderInput={(params) => (
            <TextField
              placeholder="Chọn lớp..."
              {...params}
              inputProps={{ ...params.inputProps, style: { fontSize: 14 } }}
              {...register("enterClass", {
                required: "Bạn chưa nhập lớp",
              })}
            />
          )}
        />
        {errors.enterClass && errors.enterClass.type === "required" && (
          <span className={cx("error-msg")}>{errors.enterClass.message}</span>
        )}
      </div>
      <UpdateButton onClick={handleSubmit(onSubmit)} content={"Thêm mới"} />
    </form>
  );
}

export default EnterStudentForm;
