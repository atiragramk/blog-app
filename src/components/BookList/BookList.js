import { useEffect, useState } from "react";
import { getAllBooks } from "../../api/books";
import { Container } from "reactstrap";
import { BookCard } from "./BookCard";
import { ErrorMessage } from "../ErrorMessage";
import { useLocation } from "react-router-dom";
import {
  StyledButton,
  StyledSpinner,
  StyledContainer,
  StyledReactPaginate,
} from "./styled";

export const BookList = (props) => {
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [dataLength, setDataLength] = useState(0);
  const [forsePage, setForcePage] = useState(0);

  const { itemsPerPage } = props;
  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    if (state) {
      const { offset } = state;
      setItemOffset(offset);
      const page = Math.floor(offset / itemsPerPage);
      setForcePage(page);
    }
  }, [state, itemsPerPage]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    getAllBooks()
      .then((response) => {
        setDataLength(response.length);
        setPageCount(Math.ceil(response.length / itemsPerPage));
        setBookList(response.slice(itemOffset, endOffset));
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % dataLength;
    setItemOffset(newOffset);
  };

  return (
    <Container>
      {loading && !error && !bookList.length && <StyledSpinner />}
      {bookList && !loading && !error && (
        <>
          <StyledButton>Create book</StyledButton>
          <StyledContainer>
            {bookList.map((book) => {
              const { id, description, title, publishDate } = book;
              return (
                <BookCard
                  id={id}
                  key={id}
                  description={description}
                  title={title}
                  publishDate={publishDate}
                  offset={itemOffset}
                />
              );
            })}
          </StyledContainer>
          <StyledReactPaginate
            breakLabel="..."
            forcePage={forsePage}
            activeClassName="active"
            disabledLinkClassName="disabled"
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        </>
      )}
      {error && !loading && <ErrorMessage />}
    </Container>
  );
};
