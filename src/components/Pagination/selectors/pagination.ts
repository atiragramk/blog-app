import { createSelector } from "reselect";
import { RootState } from "../../../store/index";

const paginationSelector = (state: RootState) => state.pagination;

export const bookListPaginationSelector = createSelector(
  paginationSelector,
  (pagination) => {
    return {
      page: pagination.page,
      offset: pagination.offset,
      itemsPerPage: pagination.itemsPerPage,
      endOffset: pagination.offset + pagination.itemsPerPage,
    };
  }
);
