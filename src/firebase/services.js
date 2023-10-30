import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "./config";

export const getStudentId = async (uid) => {
  const q = query(collection(db, "students"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
  }));
};
