import { createSlice } from "@reduxjs/toolkit";
import { bookListStatisticFetch } from "../thunk";

const initialState = {
  data: [],
  error: null,
  loading: true,
};

const name = "BOOK_STATISTIC";

const bookListStatisticSlice = createSlice({
  name: name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(bookListStatisticFetch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(bookListStatisticFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(bookListStatisticFetch.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});


export default bookListStatisticSlice.reducer;
