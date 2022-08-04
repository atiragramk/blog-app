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
import { TBook } from "../../types/pages";
import { AppDispatch } from "../../store";


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

  const dispatch: AppDispatch = useDispatch();

  
  useEffect(
    // @ts-ignore
    () => {
      dispatch(bookListFetch());
      return () => dispatch(bookListResetAction());
    },
    [dispatch]
  );


  const handlePagination = (index: number) => {
    const newOffset = (index * itemsPerPage) % data.length;
    dispatch(bookPaginationAction({ page: index, offset: newOffset }));
  };

  const handleCreateBook = (values: Partial<TBook>) => {
    dispatch(bookItemCreate(values));
  };

  const handleUpdateBook = (values: TBook) => {
    dispatch(bookItemUpdate(values));
  };

  const handleDeleteBook = (item: TBook) => {
    dispatch(bookItemDelete(item));
  };

  const handleCreateModalOpenToggle = () => {
    dispatch(modalOpenToggleAction({ name: MODAL_CREATE_NAME }));
  };


  const handleEditModalOpen = useCallback(
    (id: string) => {
      dispatch(bookUpdateItemIdSetAction({ id }));
      dispatch(modalOpenToggleAction({ name: MODAL_UPDATE_NAME }));
      // eslint-disable-next-line
    },
    []
  );

  const handleEditModalClose = useCallback(() => {
    dispatch(modalOpenToggleAction({ name: MODAL_UPDATE_NAME }));
    // eslint-disable-next-line
  }, []);

  const handleDeleteModalOpen = useCallback(

    (item:TBook) => {
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
                      (book) => (
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
