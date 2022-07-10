import { createSelector } from "reselect";

const bookStatisticStateSelector = (state) => state.bookListStatistic;

export const bookStatisticLoadingSelector = createSelector(
    bookStatisticStateSelector,
    (bookListStatistic) => bookListStatistic.loading
  );
  
  export const bookStatisticDataSelector = createSelector(
    bookStatisticStateSelector,
    (bookListStatistic) => bookListStatistic.data
  );
  
  export const bookStatisticErrorSelector = createSelector(
    bookStatisticStateSelector,
    (bookListStatistic) => bookListStatistic.error
  );