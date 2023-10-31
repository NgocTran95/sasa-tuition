import { createContext, useState, useEffect } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
} from "firebase/firestore";

import { db } from "../firebase/config";

const defaultContextValue = {
  students: [],
  // select student to update invoice
  selectedStudent: {},
  setSelectedStudent: () => {},
  // select year
  selectedYear: null,
  setSelectedYear: () => {},
  // invoice list
  invoices: [],
  // select class
  selectedClass: null,
  setSelectedClass: () => {},
  // modal toggle
  openModal: false,
  setOpenModal: () => {},
  //delete student
  deleteStudent: null,
  setDeleteStudent: () => {},
};

export const AppContext = createContext(defaultContextValue);

function AppProvider({ children }) {
  const [students, setStudents] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState({});
  const [selectedYear, setSelectedYear] = useState(null);
  const [invoices, setInvoices] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [deleteStudent, setDeleteStudent] = useState(null);
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
  });
  useEffect(() => {
    const invoicesRef = collection(db, "invoices");
    if (!!selectedStudent && !!selectedYear) {
      const querySnapshot = query(
        invoicesRef,
        where("studentUid", "==", selectedStudent?.uid),
        where("year", "==", selectedYear),
        orderBy("paymentDate", "asc")
      );
      const unsubcribed = onSnapshot(querySnapshot, (snapshot) => {
        const documents = snapshot.docs.map((doc) => ({
          studentUid: doc.data().studentUid,
          year: doc.data().year,
          paymentDate: doc.data().paymentDate,
          startDate: doc.data().startDate,
          endDate: doc.data().endDate,
          amount: doc.data().amount,
          method: doc.data().method,
          createAt: doc.data().createAt,
        }));
        setInvoices(documents);
      });
      return () => {
        unsubcribed();
      };
    }
  }, [selectedStudent, selectedYear]);
  return (
    <AppContext.Provider
      value={{
        students,
        selectedStudent,
        setSelectedStudent,
        selectedYear,
        setSelectedYear,
        invoices,
        selectedClass,
        setSelectedClass,
        openModal,
        setOpenModal,
        deleteStudent,
        setDeleteStudent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
