import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllBooks } from "../../../api/books";

export const bookListStatisticFetch = createAsyncThunk(
  "bookListStatisticFetch",
  async () => {
    return await getAllBooks();
  }
);
