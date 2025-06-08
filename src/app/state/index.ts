import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialStateTypes {
  isSideBarCollapsed: boolean;
  isDarkMode: boolean;
}

const initialState: initialStateTypes = {
  isDarkMode: false,
  isSideBarCollapsed: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSideBarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSideBarCollapsed = action.payload;
    },
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setIsDarkMode, setIsSideBarCollapsed } = globalSlice.actions;
// xuất các action từ reducers trong createSlice
export default globalSlice.reducer;
// gắn các reducere này vào redux Store
