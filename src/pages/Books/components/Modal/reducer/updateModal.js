import { createSlice } from "@reduxjs/toolkit";

import { bookItemUpdate } from "../thunk/modal";
import {updateOpen} from "../actions/modal"
const name = "CREATE_MODAL";

const initialState = {
  open: false,
  loading: false,
  error: null,
};

const updateModalSlice = createSlice({
  name,
  initialState,
  reducers: {
    updateModalOpen: updateOpen,
  },
  extraReducers: (builder) => {
    builder
      .addCase(bookItemUpdate.pending, (state) => {
        state.loadingModal = true;
        state.errorModal = null;
      })
      .addCase(bookItemUpdate.fulfilled, (state) => {
        state.loadingModal = false;
      })
      .addCase(bookItemUpdate.rejected, (state) => {
        state.loadingModal = false;
        state.errorModal = true;
      });
  },
});

export const { updateModalOpen } = updateModalSlice.actions;

export default updateModalSlice.reducer;
