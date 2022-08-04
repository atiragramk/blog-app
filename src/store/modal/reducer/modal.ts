import { createSlice } from "@reduxjs/toolkit";
import { TModal } from "../../../types/modal";

import { modalOpenToggle } from "../actions/modal";

const MODAL_SLICE_NAME = "MODAL_SLICE";

export const initialState: TModal = { open: false, name: null };

const modalSlice = createSlice({
  name: MODAL_SLICE_NAME,
  initialState,
  reducers: { modalOpenToggle },
});

export const { modalOpenToggle: modalOpenToggleAction } = modalSlice.actions;

export default modalSlice.reducer;
