import { createSlice } from "@reduxjs/toolkit";
import { bookListStatisticFetch } from "../thunk/statistic";
import { bookListStatisticsReset } from "../actions/statistics";
import { TBookListState } from "../../../types/pages";

export const initialState: Partial<TBookListState> = {
  data: [],
  error: null,
  loading: true,
};

const name = "BOOK_STATISTIC";

const bookListStatisticSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    bookListStatisticsReset,
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

export const { bookListStatisticsReset: bookListStatisticsResetAction } =
  bookListStatisticSlice.actions;

export default bookListStatisticSlice.reducer;
