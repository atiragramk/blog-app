import { TBookListState } from "../../../types/pages";
import { initialState } from "../reducer/statistic";

export const bookListStatisticsReset = (state: Partial<TBookListState>) => {
  return (state = initialState);
};
