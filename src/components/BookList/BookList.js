import { useEffect, useState } from "react";
import { getAllBooks } from "../../api/books";
import { Container } from "reactstrap";
import { BookCard } from "./BookCard";
import { ErrorMessage } from "../ErrorMessage";
import { useLocation } from "react-router-dom";
import {
  StyledButton,
  StyledSpinner,
  StyledContainer
} from "./styled";
import { useAxios } from "../../hooks";
import { BookPagination } from "./Pagination";

export const BookList = () => {
  
  const [bookList, setBookList] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState();
  const [dataLength, setDataLength] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(0);
  const { request, error, loading } = useAxios(getAllBooks);

  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    if (state) {
      const { offset } = state;
      setItemOffset(offset);
      const page = Math.floor(offset / itemsPerPage);
      setCurrentPage(page);
    }
  }, [state, itemsPerPage]);

  useEffect(() => {

    const endOffset = itemOffset + itemsPerPage;
    request().then(data => {
      setDataLength(data.length);
      setBookList(data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.length / itemsPerPage));
    });
    
  }, [itemOffset, itemsPerPage, request, pageCount]);

  const handlePagination = (event, index) => {
    event.preventDefault();
    const newOffset = (index * itemsPerPage) % dataLength;
    setCurrentPage(index)
    setItemOffset(newOffset);
  };

  return (
    <Container>
      {loading && !error && <StyledSpinner />}
      {!loading && !error && pageCount && (
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
          <BookPagination currentPage={currentPage} 
          onPagination={handlePagination}
          pageCount={pageCount}/>
        </>
      )}
      {error && !loading && <ErrorMessage />}
    </Container>
  );
};
