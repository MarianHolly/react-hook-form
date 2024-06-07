import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    level: "junior",
    main_language: "javascript",
    framework: "react",
    design: "tailwind_css",
  },
  reducers: {
    chooseLevel(state, action) {
      state.level = action.payload;
    },
    chooseLanguage(state, action) {
      state.main_language = action.payload;
    },
    chooseFramework(state, action) {
      state.framework = action.payload;
    },
    chooseDesign(state, action) {
      state.design = action.payload;
    },
  },
});

export const { chooseLevel, chooseDevelopment, chooseLanguage, chooseFramework, chooseDesign } =
  formSlice.actions;

export default formSlice.reducer;
