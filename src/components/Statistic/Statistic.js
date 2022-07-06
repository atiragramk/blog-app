import { useMemo } from "react";
import { getAllBooks } from "../../api/books";
import { useAxios } from "../../hooks";
import { BookTable } from "./BookTable";
import { ErrorMessage } from "../ErrorMessage";
import { StyledContainer, StyledSpinner } from "./styled";
import moment from "moment";

export const Statistic = () => {

  const { data, loading, error } = useAxios(getAllBooks);

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
      {loading && !error && <StyledSpinner />}
      {!loading && !error && (
        <BookTable columns={columns} data={data} />
      )}
      {error && !loading && <ErrorMessage />}
    </StyledContainer>
  );
};
