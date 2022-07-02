import { useEffect, useState } from "react";
import { getAllBooks } from "../../api/books";
import { Container } from "reactstrap";
import { BookCard } from "./BookCard";
import { ErrorMessage } from "../ErrorMessage";
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

  const { itemsPerPage } = props;

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
      });
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % dataLength;
    setItemOffset(newOffset);
  };

  if (loading && !bookList.length) {
    return <StyledSpinner />;
  }

  if (error && !loading) {
    return <ErrorMessage />;
  }

  return (
    <Container>
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
            />
          );
        })}
      </StyledContainer>
      <StyledReactPaginate
        breakLabel="..."
        activeClassName="active"
        disabledLinkClassName="disabled"
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </Container>
  );
};
