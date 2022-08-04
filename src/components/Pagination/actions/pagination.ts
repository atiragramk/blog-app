import { PayloadAction } from "@reduxjs/toolkit";
import { TPaginationState } from "../../../types/pagination";

export function bookPagination(
  state: TPaginationState,
  action: PayloadAction<Partial<TPaginationState>>
) {
  return { ...state, ...action.payload };
}
