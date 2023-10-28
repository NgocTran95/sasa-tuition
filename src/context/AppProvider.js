import { createContext, useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";

const AppContextDefaultValue = {
    students: [],
    setStudents: () => {},
}

export const AppContext = createContext(AppContextDefaultValue);

function AppProvider ({ children }) {
    const [students, setStudents] = useState([]);
    // Get student list
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
    return (
        <AppContext.Provider value={{
            students
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;

