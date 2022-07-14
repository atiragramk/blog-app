import { ErrorBoundary } from "../../components/ErrorBoundary";
import { useEffect } from "react";
import { Container } from "reactstrap";
import { BookCard } from "./components/BookCard";
import { ErrorMessage } from "../../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import * as selectors from "./selectors/bookItem";
import { StyledButton, StyledSpinner, StyledContainer } from "./styled";
import { BookPagination } from "./components/Pagination";
import { bookListFetchStart } from "./reducer/bookList";

export default function BookList() {
  const loading = useSelector(selectors.bookListLoadingSelector);
  const error = useSelector(selectors.bookListErrorSelector);
  const data = useSelector(selectors.bookListDataSelector);
  const {offset, page, pageCount, endOffset} = useSelector(selectors.bookListPaginationSelector);
  const bookList = data.slice(offset, endOffset);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookListFetchStart(page));
  }, [dispatch, page]);

  const handlePagination = (event, index) => {
    event.preventDefault();
    dispatch(bookListFetchStart(index));
  };
  

  return (
    <ErrorBoundary>
      <Container>
        {loading && !error && <StyledSpinner />}
        {!loading && !error && pageCount && (
          <>
            <StyledButton>Create book</StyledButton>
            <StyledContainer>
              {bookList.map((book) => {
                return (
                  <BookCard
                    id={book.id}
                    key={book.id}
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
        {error && !loading && <ErrorMessage />}
      </Container>
    </ErrorBoundary>
  );
}
