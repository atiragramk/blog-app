import { PayloadAction } from "@reduxjs/toolkit";
import { TModal } from "../../../types/modal";

export const modalOpenToggle = (
  state: TModal,
  action: PayloadAction<TModal | undefined>
) => {
  state.open = !state.open;
  state.name = action.payload?.name;
};
