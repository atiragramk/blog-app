import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBook } from "../../../api/books";

const initialState = {
  data: {},
  error: null,
  loading: true,
};

export const bookItemFetch = createAsyncThunk("bookItemFetch", async (id) => {
  return await getBook(id);
});

const bookItemSlice = createSlice({
  name: "bookItem",
  initialState,
  reducers: {
    bookItemFetchStart() {},
  },
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

export const { bookItemFetchStart } = bookItemSlice.actions;
export default bookItemSlice.reducer;
