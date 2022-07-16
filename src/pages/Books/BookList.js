import { useEffect } from "react";
import { Container } from "reactstrap";
import { DeleteModal } from "./components/Modal/DeleteModal";
import { BookCard } from "./components/BookCard";
import { ErrorMessage } from "../../components/ErrorMessage";
import { ErrorBoundary } from "../../components/ErrorBoundary";
import { StyledButton, StyledSpinner, StyledContainer } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { createModalSelector } from "./components/Modal/selectors/modal";
import * as selectors from "./selectors/bookList";
import { BookPagination } from "../../components/Pagination";
import { bookListFetch } from "./thunk/bookList";
import { bookPaginationSet } from "../../components/Pagination/reducer/pagination";
import { bookListPaginationSelector } from "../../components/Pagination/selectors/pagination";
import CreateModal from "./components/Modal/CreateModal";
import UpdateModal from "./components/Modal/UpdateModal";
import { createModalOpen } from "./components/Modal/reducer/createModal";

export default function BookList() {
  const loading = useSelector(selectors.bookListLoadingSelector);
  const error = useSelector(selectors.bookListErrorSelector);
  const data = useSelector(selectors.bookListDataSelector);
  const { offset, page, itemsPerPage, endOffset } = useSelector(
    bookListPaginationSelector
  );

  const { open } = useSelector(createModalSelector);

  const bookList = data.slice(offset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookListFetch());
  }, [dispatch]);

  const handlePagination = (index) => {
    const newOffset = (index * itemsPerPage) % data.length;
    dispatch(bookPaginationSet({ page: index, offset: newOffset }));
  };

  const handleOpenCreateModal = () => {
    dispatch(createModalOpen(open));
  };

  return (
    <ErrorBoundary>
      <Container>
        {loading && !error && <StyledSpinner />}
        {!loading && !error && data.length > 0 && (
          <>
            <StyledButton onClick={handleOpenCreateModal} color="light">
              Create book
            </StyledButton>
            <StyledContainer>
              {bookList.map((book) => {
                return (
                  <BookCard
                    id={book._id}
                    key={book._id}
                    description={book.description}
                    title={book.title}
                    publishDate={book.publishDate}
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
        <CreateModal form="create" />
        {/* <UpdateModal form="update" /> */}
        <DeleteModal />
        {error && !loading && <ErrorMessage />}
      </Container>
    </ErrorBoundary>
  );
}
