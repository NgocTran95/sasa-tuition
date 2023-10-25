import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: "",
  name: "",
  class: 0,
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setStudentInfo: (state, { payload }) => {
      state.uid = payload.uid;
      state.name = payload.name;
      state.class = payload.class;
    },
  },
});

export const { setStudentInfo } = studentSlice.actions;
export default studentSlice.reducer;
