import { createContext, useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

import { db } from "../firebase/config";

const defaultContextValue = {
  students: [],
  // select student to add invoice
  addInvoiceStudent: {},
  setAddInvoiceStudent: () => {},
  // select year to add invoice
  addInvoiceYear: null,
  setAddInvoiceYear: () => {},
  // select student to update invoice
  updateInvoiceStudent: {},
  setUpdateInvoiceStudent: () => {},
  // select year to add invoice
  updateInvoiceYear: null,
  setUpdateInvoiceYear: () => {},
  // all invoices
  invoices: [],
  // select class
  selectedClass: null,
  setSelectedClass: () => {},
  // delete student modal toggle
  deleteStudentModal: false,
  setDeleteStudentModal: () => {},
  //delete student
  deleteStudent: null,
  setDeleteStudent: () => {},
  // select year to query invoices
  queryYear: null,
  setQueryYear: () => {},
  // edit invoice modal toggle
  editInvoiceModal: false,
  setEditInvoiceModal: () => {},
  // delete invoice modal toggle
  deleteInvoiceModal: false,
  setDeleteInvoiceModal: () => {},
  // set edit invoice
  editInvoice: null,
  setEditInvoice: () => {},
};

export const AppContext = createContext(defaultContextValue);

function AppProvider({ children }) {
  const [students, setStudents] = useState([]);

  const [selectedClass, setSelectedClass] = useState(null);

  const [addInvoiceStudent, setAddInvoiceStudent] = useState({});
  const [addInvoiceYear, setAddInvoiceYear] = useState(null);
  const [updateInvoiceStudent, setUpdateInvoiceStudent] = useState({});
  const [updateInvoiceYear, setUpdateInvoiceYear] = useState(null);

  const [invoices, setInvoices] = useState([]);

  const [deleteStudentModal, setDeleteStudentModal] = useState(false);
  const [deleteStudent, setDeleteStudent] = useState(null);

  const [editInvoiceModal, setEditInvoiceModal] = useState(false);
  const [deleteInvoiceModal, setDeleteInvoiceModal] = useState(false);
  const [editInvoice, setEditInvoice] = useState(null);

  const [queryYear, setQueryYear] = useState(null);
  // Fetch students from db
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
  // Fetch all invoices from db
  useEffect(() => {
    const invoicesRef = collection(db, "invoices");
    const querySnapshot = query(invoicesRef);
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
  }, []);
  return (
    <AppContext.Provider
      value={{
        students,
        invoices,
        addInvoiceStudent,
        setAddInvoiceStudent,
        addInvoiceYear,
        setAddInvoiceYear,
        updateInvoiceStudent,
        setUpdateInvoiceStudent,
        updateInvoiceYear,
        setUpdateInvoiceYear,
        selectedClass,
        setSelectedClass,
        deleteStudentModal,
        setDeleteStudentModal,
        editInvoiceModal,
        setEditInvoiceModal,
        deleteInvoiceModal,
        setDeleteInvoiceModal,
        editInvoice,
        setEditInvoice,
        deleteStudent,
        setDeleteStudent,
        queryYear,
        setQueryYear,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
