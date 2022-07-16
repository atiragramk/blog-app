import { createSlice } from "@reduxjs/toolkit";

import { bookItemCreate } from "../thunk/modal";
import {createOpen, createLoadingSet} from "../actions/modal"
const name = "CREATE_MODAL";

const initialState = {
  open: false,
  loading: false,
  error: null,
};

const createModalSlice = createSlice({
  name,
  initialState,
  reducers: {
    createModalOpen: createOpen,
    createModalLoading: createLoadingSet
  },
  extraReducers: (builder) => {
    builder
      .addCase(bookItemCreate.pending, (state) => {
        state.loadingModal = true;
        state.errorModal = null;
      })
      .addCase(bookItemCreate.fulfilled, (state) => {
        state.loadingModal = false;
      })
      .addCase(bookItemCreate.rejected, (state) => {
        state.loadingModal = false;
        state.errorModal = true;
      });
  },
});

export const { createModalOpen, createModalLoading} = createModalSlice.actions;

export default createModalSlice.reducer;
