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
  // delete invoices when delete student
  deleteInvoices: [],
  setDeleteInvoices: () => {},
  // select year to query invoices
  queryYear: null,
  setQueryYear: () => {},
  // get all invoices
  queryInvoices: [],
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
  const [deleteInvoices, setDeleteInvoices] = useState([]);
  const [queryYear, setQueryYear] = useState(null);
  const [queryInvoices, setQueryInvoices] = useState([]);
  // Auto fetch student list from server
  useEffect(() => {
    const studentsRef = collection(db, "students");
    const querySnapshot = query(studentsRef, orderBy("class", "asc"));
    const unsubcribed = onSnapshot(querySnapshot, (snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        name: doc.data().name,
        class: doc.data().class,
        createAt: doc.data().createAt,
        id: doc.id,
      }));
      setStudents(documents);
    });
    return () => {
      unsubcribed();
    };
  }, []);

  // Auto fetch student invoices when selected student and year
  useEffect(() => {
    const invoicesRef = collection(db, "invoices");
    if (!!selectedStudent && !!selectedYear) {
      const querySnapshot = query(
        invoicesRef,
        where("studentId", "==", selectedStudent?.id),
        where("year", "==", selectedYear),
        orderBy("paymentDate", "asc")
      );
      const unsubcribed = onSnapshot(querySnapshot, (snapshot) => {
        const documents = snapshot.docs.map((doc) => ({
          studentId: doc.data().studentId,
          year: doc.data().year,
          paymentDate: doc.data().paymentDate,
          startDate: doc.data().startDate,
          endDate: doc.data().endDate,
          amount: doc.data().amount,
          method: doc.data().method,
          createAt: doc.data().createAt,
          invoiceId: doc.id,
        }));
        setInvoices(documents);
      });
      return () => {
        unsubcribed();
      };
    }
  }, [selectedStudent, selectedYear]);

  // Auto fetch delete invoices when select delete student
  useEffect(() => {
    const invoicesRef = collection(db, "invoices");
    if (deleteStudent) {
      const querySnapshot = query(
        invoicesRef,
        where("studentId", "==", deleteStudent?.id),
        orderBy("paymentDate", "asc")
      );
      const unsubcribed = onSnapshot(querySnapshot, (snapshot) => {
        const documents = snapshot.docs.map((doc) => ({
          studentId: doc.data().studentId,
          year: doc.data().year,
          paymentDate: doc.data().paymentDate,
          startDate: doc.data().startDate,
          endDate: doc.data().endDate,
          amount: doc.data().amount,
          method: doc.data().method,
          createAt: doc.data().createAt,
          invoiceId: doc.id,
        }));
        setDeleteInvoices(documents);
      });
      return () => {
        unsubcribed();
      };
    }
  }, [deleteStudent]);

  // auto fetch all invoices from db
  useEffect(() => {
    const invoicesRef = collection(db, "invoices");
    const querySnapshot = query(invoicesRef, where("year", "==", queryYear));
    const unsubcribed = onSnapshot(querySnapshot, (snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        studentId: doc.data().studentId,
        year: doc.data().year,
        paymentDate: doc.data().paymentDate,
        startDate: doc.data().startDate,
        endDate: doc.data().endDate,
        amount: doc.data().amount,
        method: doc.data().method,
        createAt: doc.data().createAt,
        invoiceId: doc.id,
      }));
      setQueryInvoices(documents);
    });
    return () => {
      unsubcribed();
    };
  }, [queryYear]);
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
        deleteInvoices,
        setQueryYear,
        queryInvoices,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
