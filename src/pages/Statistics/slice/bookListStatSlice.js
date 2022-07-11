import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllBooks } from "../../../api/books";

const initialState = {
  data: [],
  error: null,
  loading: true,
};

export const bookListStatisticFetch = createAsyncThunk("bookListStatisticFetch", async () => {
  return await getAllBooks();
});

const bookListStatisticSlice = createSlice({
  name: "bookListStatistic",
  initialState,
  reducers: {
    bookListStatisticFetchStart() {},
  },
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

export const { bookListStatisticFetchStart } = bookListStatisticSlice.actions;

export default bookListStatisticSlice.reducer;
