import { createSlice } from "@reduxjs/toolkit";

import { bookListFetch } from "../thunk/bookList";

const initialState = {
  data: [],
  error: null,
  loading: true,
};

const name = "BOOK_LIST";

const bookListSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(bookListFetch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(bookListFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(bookListFetch.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});


export default bookListSlice.reducer;
