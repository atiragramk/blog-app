import { getBook } from "../../api/books";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import { ErrorMessage } from "../ErrorMessage";
import { useLocation } from "react-router-dom";
import {
  StyledHeader,
  StyledWrapper,
  StyledText,
  StyledDate,
  StyledLink,
  StyledSpinner,
} from "./styled";
import moment from "moment";
import { useAxios } from "../../hooks";

export const BookInfo = () => {

  const { routeId } = useParams();
  const { data, error, loading} = useAxios(() => getBook(routeId))

  const location = useLocation();
  const { offset } = location.state;

  const { description, title, publishDate } = data;
  const date = moment(publishDate).format("DD/MM/YYYY");

  return (
    <Container>
      {loading && !error && <StyledSpinner />}
      {!loading && !error && (
        <>
          <StyledWrapper>
            <StyledHeader>{title}</StyledHeader>
            <StyledText>{description}</StyledText>
            <StyledDate>{date}</StyledDate>
          </StyledWrapper>
          <StyledLink state={{ offset: offset }} to="/books">
            Back to list
          </StyledLink>
        </>
      )}
      {error && !loading && <ErrorMessage />}
    </Container>
  );
};
