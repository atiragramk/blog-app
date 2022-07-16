import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllBooks } from "../../../api/books";

const name = "BOOK_STATISTIC_FETCH";

export const bookListStatisticFetch = createAsyncThunk(name, async () => {
  return await getAllBooks();
});
