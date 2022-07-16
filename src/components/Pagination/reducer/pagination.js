import { createSlice } from "@reduxjs/toolkit";

import { bookPagination } from "../actions/pagination";

const name = "PAGINATION";

const initialState = {
  page: 0,
  offset: 0,
  itemsPerPage: 9,
};

const paginationSlice = createSlice({
    name,
    initialState,
    reducers: {
        bookPaginationSet: bookPagination
    }
})

export const {bookPaginationSet} = paginationSlice.actions;

export default paginationSlice.reducer;