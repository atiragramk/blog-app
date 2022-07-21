import { initialState } from "../reducer/bookItem";

export const bookItemReset = (state) => {
  return (state = initialState);
};
