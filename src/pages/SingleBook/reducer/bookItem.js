import { createSlice } from "@reduxjs/toolkit";
import { bookItemFetch } from "../thunk";

const initialState = {
  data: {},
  error: null,
  loading: true,
};

const name = "BOOK_ITEM"


const bookItemSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(bookItemFetch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(bookItemFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(bookItemFetch.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default bookItemSlice.reducer;
