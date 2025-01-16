import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  branches: [],
  selectedBranch: {
    id: "865cfad1-cf88-4900-bb56-f767b4f39aaf",
    name: "ekbatan",
  },
};

const branchesSlice = createSlice({
  name: "branches",
  initialState,
  reducers: {
    setBranches(state, action) {
      state.branches = action.payload; // جایگزینی کامل آرایه
    },
    setSelectedBranch(state, action) {
      state.selectedBranch = action.payload;
    },
  },
});

export const { setBranches, setSelectedBranch } = branchesSlice.actions;

export default branchesSlice.reducer;
