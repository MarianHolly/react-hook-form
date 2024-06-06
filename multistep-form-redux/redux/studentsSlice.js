const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  currentStep: 1,
  formData: {},
};

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
});

export const {} = studentsSlice.actions;

export default studentsSlice.reducer;
