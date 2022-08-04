export type TPaginationProps = {
  currentPage: number;
  pageCount: number;
  onPagination: Function;
};

export type TPaginationState = {
  page: number;
  offset: number;
  itemsPerPage: number;
};
