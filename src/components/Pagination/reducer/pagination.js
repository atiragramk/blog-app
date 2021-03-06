import { createSlice } from "@reduxjs/toolkit";

import { bookPagination } from "../actions/pagination";

const name = "PAGINATION";

export const initialState = {
  page: 0,
  offset: 0,
  itemsPerPage: 9,
};

const paginationSlice = createSlice({
  name,
  initialState,
  reducers: {
    bookPagination,
  },
});

export const { bookPagination: bookPaginationAction } = paginationSlice.actions;

export default paginationSlice.reducer;
