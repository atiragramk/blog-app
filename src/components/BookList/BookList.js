import { useEffect, useState } from "react";
import axios from "axios";
import {
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Row,
  Container,
  Spinner,
} from "reactstrap";
import { PaginationMenu } from "./Pagination";
import { StyledButton, StyledCard, StyledLink, StyledWrapper } from "./styled";
export const BookList = () => {
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const url = "https://fakerestapi.azurewebsites.net/api/v1/Books";
    axios.get(url).then((response) => {
      setBookList(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <StyledButton className="btn btn-outline-dark">Create book</StyledButton>
      <Row xs="3" className="justify-content-center">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {bookList
              .filter((book) => book.id < limit)
              .map((book) => {
                const { id, description, title, publishDate } = book;
                const shortDescr = `${description.slice(0, 130)}...`;
                const date = new Date(publishDate).toLocaleString();
                return (
                  <StyledCard key={id}>
                    <CardBody>
                      <CardTitle tag="h4">{title}</CardTitle>
                      <CardText>{shortDescr}</CardText>
                      <CardSubtitle>{date}</CardSubtitle>
                      <StyledWrapper>
                        <StyledLink to={`/book/${id}`}>More</StyledLink>
                        <StyledLink to="#">Edit</StyledLink>
                        <StyledLink to="#">Delete</StyledLink>
                      </StyledWrapper>
                    </CardBody>
                  </StyledCard>
                );
              })}
            <PaginationMenu />
          </>
        )}
      </Row>
    </Container>
  );
};
