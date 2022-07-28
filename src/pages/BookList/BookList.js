//@ts-check
import React from "react";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "reactstrap";
import { BookCard } from "./components/BookCard";
import { ErrorMessage } from "../../components/ErrorMessage";
import { ErrorBoundary } from "../../components/ErrorBoundary";
import { StyledButton, StyledContainer, StyledSpinner } from "./styled";
import * as selectors from "./selectors/bookList";
import { BookPagination } from "../../components/Pagination";
import { PreLoader } from "../../components/PreLoader";
import { bookPaginationAction } from "../../components/Pagination/reducer/pagination";
import { bookListPaginationSelector } from "../../components/Pagination/selectors/pagination";
import { modalStateSelector } from "../../store/modal/selectors/modal";
import { modalOpenToggleAction } from "../../store/modal/reducer/modal";
import { CreateBookModal } from "./components/CreateBookModal";
import { UpdateBookModal } from "./components/UpdateBookModal";
import { DeleteBookModal } from "./components/DeleteBookModal";
import {
  bookDeleteItemDataSetAction,
  bookUpdateItemIdSetAction,
  bookListResetAction,
} from "./reducer/bookList";
import {
  bookItemCreate,
  bookItemDelete,
  bookItemUpdate,
  bookListFetch,
} from "./thunk/bookList";
import {
  MODAL_CREATE_NAME,
  MODAL_UPDATE_NAME,
  MODAL_DELETE_NAME,
} from "./constants";
/**
 * Book list component
 * @type {React.FC}
 * @returns {React.ReactElement}
 *
 */
const BookList = () => {
  const loading = useSelector(selectors.bookListLoadingSelector);
  const error = useSelector(selectors.bookListErrorSelector);
  const data = useSelector(selectors.bookListDataSelector);
  const { offset, page, itemsPerPage, endOffset } = useSelector(
    bookListPaginationSelector
  );

  const { open, name } = useSelector(modalStateSelector);

  const bookList = data.slice(offset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const dispatch = useDispatch();

  /**
   * @type {React.EffectCallback}
   */
  useEffect(
    /**
     * Use effect
     * @returns {any}
     */
    () => {
      // @ts-ignore
      dispatch(bookListFetch());
      return () => dispatch(bookListResetAction());
    },
    [dispatch]
  );

  /**
   * Pagination function
   * @param {number} index  - index of current page
   */
  const handlePagination = (index) => {
    const newOffset = (index * itemsPerPage) % data.length;
    dispatch(bookPaginationAction({ page: index, offset: newOffset }));
  };
  /**
   * Create book function
   * @param {{title: string, description: string, pageCount: number}} values - book data
   */
  const handleCreateBook = (values) => {
    // @ts-ignore
    dispatch(bookItemCreate(values));
  };
  /**
   * Update book function
   * @param {{title: string, description: string, pageCount: number, id: string}} values - book data
   */
  const handleUpdateBook = (values) => {
    // @ts-ignore
    dispatch(bookItemUpdate(values));
  };
  /**
   * Delete book function
   * @param {{title: string, description: string, pageCount: number, _id: string}} item - book data
   */
  const handleDeleteBook = (item) => {
    // @ts-ignore
    dispatch(bookItemDelete(item));
  };
  /**
   * Create modal toggle function
   */
  const handleCreateModalOpenToggle = () => {
    dispatch(modalOpenToggleAction({ name: MODAL_CREATE_NAME }));
  };

  /**
   * Edit modal function
   */
  const handleEditModalOpen = useCallback(
    /**
     *
     * @param {string} id
     */
    (id) => {
      dispatch(bookUpdateItemIdSetAction({ id }));
      dispatch(modalOpenToggleAction({ name: MODAL_UPDATE_NAME }));
      // eslint-disable-next-line
    },
    []
  );
  /**
   * Update modal toggle function
   */
  const handleEditModalClose = useCallback(() => {
    dispatch(modalOpenToggleAction({ name: MODAL_UPDATE_NAME }));
    // eslint-disable-next-line
  }, []);

  /**
   * Delete modal function
   */
  const handleDeleteModalOpen = useCallback(
    /**
     *
     * @param {{title: string, description: string, pageCount: number, _id: string}} item - book data
     */
    (item) => {
      dispatch(bookDeleteItemDataSetAction(item));
      dispatch(modalOpenToggleAction({ name: MODAL_DELETE_NAME }));
      // eslint-disable-next-line
    },
    []
  );

  return (
    <ErrorBoundary>
      <Container>
        <StyledButton onClick={handleCreateModalOpenToggle} type="primary">
          Create book
        </StyledButton>
        {
          <>
            <StyledSpinner
              spinning={loading}
              style={{ maxHeight: "none" }}
              size="large"
            >
              <StyledContainer>
                {loading && !error && data.length === 0 && (
                  <>
                    {[...Array(bookList.length || itemsPerPage).keys()].map(
                      (item) => (
                        <PreLoader key={item} />
                      )
                    )}
                  </>
                )}
                {!error && data.length > 0 && (
                  <>
                    {bookList.map(
                      (
                        /** @type {import("prop-types").InferProps<{ _id: import("prop-types").Requireable<string>; title: import("prop-types").Requireable<string>; description: import("prop-types").Requireable<string>; pageCount: import("prop-types").Requireable<string>; publishDate: import("prop-types").Requireable<string>; createdAt: import("prop-types").Requireable<string>; updatedAt: import("prop-types").Requireable<string>; }>} */ book
                      ) => (
                        <BookCard
                          key={book._id}
                          data={book}
                          onEdit={handleEditModalOpen}
                          onDelete={handleDeleteModalOpen}
                        />
                      )
                    )}
                  </>
                )}
              </StyledContainer>
            </StyledSpinner>
            {!loading && !error && data.length > 0 && (
              <BookPagination
                currentPage={page}
                onPagination={handlePagination}
                pageCount={pageCount}
              />
            )}
          </>
        }
        {open && name === MODAL_CREATE_NAME && (
          <CreateBookModal
            onSave={handleCreateBook}
            onCancel={handleCreateModalOpenToggle}
          />
        )}
        {open && name === MODAL_UPDATE_NAME && (
          <UpdateBookModal
            onSave={handleUpdateBook}
            onCancel={handleEditModalClose}
          />
        )}
        {open && name === MODAL_DELETE_NAME && (
          <DeleteBookModal
            onSave={handleDeleteBook}
            onCancel={handleDeleteModalOpen}
          />
        )}
        {error && !loading && <ErrorMessage />}
      </Container>
    </ErrorBoundary>
  );
};

export default BookList;
