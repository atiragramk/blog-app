import { useEffect, useMemo, useState } from "react";
import { getAllBooks } from "../../api/books";
import { BookTable } from "./BookTable";
import { ErrorMessage } from "../ErrorMessage";
import { StyledContainer, StyledSpinner } from "./styled";
import moment from "moment";

export const Statistic = () => {
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllBooks()
      .then((response) => {
        setBookList(response);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
    <StyledContainer>
      {loading && !bookList.length && !error && <StyledSpinner />}
      {bookList && !loading && !error && (
        <BookTable columns={columns} data={bookList} />
      )}
      {error && !loading && <ErrorMessage />}
    </StyledContainer>
  );
};
