import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "../features/student/studentSlice";

export const store = configureStore({
  reducer: {
    student: studentSlice,
  },
});
