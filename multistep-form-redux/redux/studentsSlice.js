const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  currentStep: 1,
  formData: {},
};

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    updateFormData: (state) => {
      state.formData = { ...state.formData, ...state.payload };
    },
  },
});

export const { setCurrentStep, updateFormData } = studentsSlice.actions;

export default studentsSlice.reducer;
