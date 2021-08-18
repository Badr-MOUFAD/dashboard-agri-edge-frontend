import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeSection: "Map of clusters"
};

export const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    changeActiveSection: (state, action) => {
      state.activeSection = action.payload;
    }
  }
});

export const appSelectors = {
  activeSection: (state) => state.app.activeSection
};

export const { changeActiveSection } = appSlice.actions;

export default appSlice.reducer;
