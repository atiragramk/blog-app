import {
  BOOK_LIST_FETCH_IN_PROGRESS,
  BOOK_LIST_FETCH_SUCCESS,
  BOOK_LIST_FETCH_ERROR,
  BOOK_LIST_SET_PAGE,
  BOOK_LIST_SET_OFFSET,
  BOOK_LIST_SET_PAGE_COUNT
} from "../action-types/bookList";

const initialState = {
  data: [],
  error: null,
  loading: true,
  page: 0,
  offset: 0,
  itemsPerPage: 9,
  pageCount: null,
};

const bookListReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_LIST_FETCH_IN_PROGRESS: {
      return { ...state, loading: true, error: null };
    }

    case BOOK_LIST_FETCH_SUCCESS: {
      const { data } = action.payload;
      return { ...state, data, loading: false };
    }

    case BOOK_LIST_FETCH_ERROR:
      return { ...state, loading: false, error: true };

    case BOOK_LIST_SET_PAGE: {
      const { page } = action.payload;
      return {...state, page};
    }
    case BOOK_LIST_SET_OFFSET: {
      const { offset } = action.payload;
      return {...state, offset};
    }

    case BOOK_LIST_SET_PAGE_COUNT: {
      const { pageCount } = action.payload;
      return {...state, pageCount};
    }

    default:
      return state;
  }
};

export default bookListReducer;
