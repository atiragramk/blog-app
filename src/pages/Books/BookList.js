import { ErrorBoundary } from "../../components/ErrorBoundary";
import { useEffect } from "react";
import { Container } from "reactstrap";

import { DeleteModal } from "./components/DeleteModal";
import CustomModal from "../../components/Modal";
import { BookCard } from "./components/BookCard";
import { ErrorMessage } from "../../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import * as selectors from "./selectors/bookItem";
import { StyledButton, StyledSpinner, StyledContainer } from "./styled";
import { BookPagination } from "./components/Pagination";
import { bookListFetchStart } from "./reducer/bookList";
import { useState } from "react";
import { bookListDelete } from "./thunk";

export default function BookList() {
  const loading = useSelector(selectors.bookListLoadingSelector);
  const error = useSelector(selectors.bookListErrorSelector);
  const data = useSelector(selectors.bookListDataSelector);
  const { offset, page, pageCount, endOffset } = useSelector(
    selectors.bookListPaginationSelector
  );

  const bookList = data.slice(offset, endOffset);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState();
  const [id, setId] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookListFetchStart(page));
  }, [dispatch, page]);

  const handlePagination = (index) => {
    dispatch(bookListFetchStart(index));
  };

  const handleToggleModal = (id, title) => {
    setOpen(!open);
    setId(id);
    setTitle(title);
  };

  const handleDelete = (id) => {
    dispatch(bookListDelete(id));
    dispatch(bookListFetchStart(page));
    setOpen(!open);
  };

  return (
    <ErrorBoundary>
      <Container>
        {loading && !error && <StyledSpinner />}
        {!loading && !error && pageCount && (
          <>
            <CustomModal
              open={open}
              onConfirm={handleDelete}
              id={id}
              onToggle={handleToggleModal}
            >
              <DeleteModal title={title} />
            </CustomModal>
            <StyledButton color="light">Create book</StyledButton>
            <StyledContainer>
              {bookList.map((book) => {
                return (
                  <BookCard
                    id={book._id}
                    key={book._id}
                    description={book.description}
                    title={book.title}
                    publishDate={book.publishDate}
                    onOpenModal={handleToggleModal}
                  />
                );
              })}
            </StyledContainer>
            <BookPagination
              currentPage={page}
              onPagination={handlePagination}
              pageCount={pageCount}
            />
          </>
        )}
        {error && !loading && <ErrorMessage />}
      </Container>
    </ErrorBoundary>
  );
}
