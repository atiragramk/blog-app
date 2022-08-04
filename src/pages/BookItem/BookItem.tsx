import { useEffect } from "react";
import { ErrorBoundary } from "../../components/ErrorBoundary";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "reactstrap";
import { ErrorMessage } from "../../components/ErrorMessage";
import { bookItemFetch } from "./thunk/bookItem";
import * as selectors from "./selectors/bookItem";
import {
  StyledHeader,
  StyledWrapper,
  StyledText,
  StyledDate,
  StyledLink,
  StyledSpinner,
} from "./styled";
import moment from "moment";
import { bookItemResetAction } from "./reducer/bookItem";
import { AppDispatch } from "../../store";

export default function BookItem() {
  const { routeId } = useParams();
  const loading = useSelector(selectors.bookItemLoadingSelector);
  const error = useSelector(selectors.bookItemErrorSelector);
  const bookData = useSelector(selectors.bookItemDataSelector);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(
    // @ts-ignore
    () => {
    dispatch(bookItemFetch(routeId));
    return () => dispatch(bookItemResetAction());
  }, [dispatch, routeId]);

  return (
    <ErrorBoundary>
      <Container>
        {loading && !error && <StyledSpinner />}
        {!loading && !error && (
          <>
            <StyledWrapper>
              <StyledHeader>{bookData.title}</StyledHeader>
              <StyledText>{bookData.description}</StyledText>
              <StyledDate>
                {moment(bookData.publishDate).format("DD/MM/YYYY")}
              </StyledDate>
            </StyledWrapper>
            <StyledLink to="/books">Back to list</StyledLink>
            <StyledLink to="/statistics">Back to statistics</StyledLink>
          </>
        )}
        {error && !loading && <ErrorMessage />}
      </Container>
    </ErrorBoundary>
  );
}
