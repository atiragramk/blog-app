import { createSlice } from "@reduxjs/toolkit";
import { bookItemFetch } from "../thunk/bookItem";
import { bookItemReset } from "../actions/bookItem";

export const initialState = {
  data: {},
  error: null,
  loading: true,
};

const name = "BOOK_ITEM";

const bookItemSlice = createSlice({
  name,
  initialState,
  reducers: {
    bookItemReset,
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
export const { bookItemReset: bookItemResetAction } = bookItemSlice.actions;

export default bookItemSlice.reducer;
