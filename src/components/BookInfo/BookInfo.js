import { useEffect, useState } from "react";
import { getBook } from "../../api/books";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import { ErrorMessage } from "../ErrorMessage";
import {
  StyledHeader,
  StyledWrapper,
  StyledText,
  StyledDate,
  StyledLink,
  StyledSpinner,
} from "./styled";
import moment from "moment";

export const BookInfo = () => {
  const [bookInfo, setBookInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { routeId } = useParams();

  useEffect(() => {
    getBook(routeId)
      .then((response) => {
        setBookInfo(response);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [routeId]);

  const { description, title, publishDate } = bookInfo;
  const date = moment(publishDate).format("DD/MM/YYYY");

  return (
    <Container>
      {loading && !Object.keys(bookInfo).length && !error && <StyledSpinner />}
      {!loading && bookInfo && !error && (
        <>
          <StyledWrapper>
            <StyledHeader>{title}</StyledHeader>
            <StyledText>{description}</StyledText>
            <StyledDate>{date}</StyledDate>
          </StyledWrapper>
          <StyledLink to="/books">Back to list</StyledLink>
        </>
      )}
      {error && !loading && <ErrorMessage />}
    </Container>
  );
};
