// searchDesireSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDesiredFromMenuItems } from "../../Services/fetchDesiredFromMenuItems";

// Async thunk to fetch desired menu items
export const fetchSearchDesireItems = createAsyncThunk(
  "searchDesire/fetchSearchDesireItems",
  async ({ branchId, query }) => {
    const response = await fetchDesiredFromMenuItems(branchId, query);
    return response;
  },
);

const searchDesireSlice = createSlice({
  name: "searchDesire",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {
    clearSearchDesireItems: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchDesireItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSearchDesireItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchSearchDesireItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearSearchDesireItems } = searchDesireSlice.actions;

export default searchDesireSlice.reducer;
