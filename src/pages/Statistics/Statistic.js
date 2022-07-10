import { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BookTable } from "./components/BookTable";
import { ErrorMessage } from "../../components/ErrorMessage";
import { StyledContainer, StyledSpinner } from "./styled";
import { ErrorBoundary } from "../../components/ErrorBoundary";
import * as selectors from "./selectors/bookItem";
import { bookStatisticFetchStart } from "./actions/bookList";
import moment from "moment";

export default function Statistics() {
  const loading = useSelector(selectors.bookStatisticLoadingSelector);
  const error = useSelector(selectors.bookStatisticErrorSelector);
  const bookData = useSelector(selectors.bookStatisticDataSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookStatisticFetchStart());
  }, [dispatch]);

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "NAME",
        accessor: "title",
      },
      {
        Header: "DESCRIPTION",
        accessor: "description",
        Cell: ({ cell: { value } }) => `${value.slice(0, 130)}...`,
      },
      {
        Header: "PAGES",
        accessor: "pageCount",
      },
      {
        Header: "CREATE DATE",
        accessor: "publishDate",
        Cell: ({ cell: { value } }) => moment(value).format("DD/MM/YYYY"),
      },
    ],
    []
  );

  return (
    <ErrorBoundary>
      <StyledContainer>
        {loading && !error && <StyledSpinner />}
        {!loading && !error && <BookTable columns={columns} data={bookData} />}
        {error && !loading && <ErrorMessage />}
      </StyledContainer>
    </ErrorBoundary>
  );
}
