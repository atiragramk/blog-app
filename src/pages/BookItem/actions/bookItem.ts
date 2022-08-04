import { TBookItemState } from "../../../types/pages";
import { initialState } from "../reducer/bookItem";

export const bookItemReset = (state: TBookItemState) => {
  return (state = initialState);
};
