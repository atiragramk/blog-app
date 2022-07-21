import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage } from "../../components/ErrorMessage";
import { StyledContainer, StyledSpinner, StyledLink } from "./styled";
import { ErrorBoundary } from "../../components/ErrorBoundary";
import * as selectors from "./selectors/bookItem";
import { bookListStatisticFetch } from "./thunk/statistic";
import moment from "moment";
import { Table, Typography } from "antd";
import { bookListStatisticsResetAction } from "./reducer/statistic";

export default function Statistics() {
  const loading = useSelector(selectors.bookStatisticLoadingSelector);
  const error = useSelector(selectors.bookStatisticErrorSelector);
  const bookData = useSelector(selectors.bookStatisticDataSelector);
  const { Title } = Typography;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookListStatisticFetch());
    return () => dispatch(bookListStatisticsResetAction());
  }, [dispatch]);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
      render: (value) => (
        <StyledLink to={`/books/${value}`}>{value}</StyledLink>
      ),
    },
    {
      title: "BOOK TITLE",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "DESCRIPTION",
      dataIndex: "description",
      key: "description",
      render: (value) =>
        value.length > 130 ? `${value.slice(0, 130)}...` : value,
    },
    {
      title: "PAGES",
      dataIndex: "pageCount",
      key: "pageCount",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.pageCount - b.pageCount,
    },
    {
      title: "CREATE DATE",
      dataIndex: "publishDate",
      key: "publishDate",
      render: (value) => moment(value).format("DD/MM/YYYY"),
    },
  ];

  return (
    <ErrorBoundary>
      <StyledContainer>
        {loading && !error && <StyledSpinner />}
        {!loading && !error && (
          <Table
            bordered
            columns={columns}
            dataSource={bookData}
            loading={loading}
            rowKey={(record) => record._id}
            title={() => (
              <Title
                style={{ display: "flex", justifyContent: "center" }}
                level={4}
              >
                BOOK STATISTIC
              </Title>
            )}
            pagination={{
              pageSize: 50,
              position: ["bottomCenter"],
            }}
          />
        )}

        {error && !loading && <ErrorMessage />}
      </StyledContainer>
    </ErrorBoundary>
  );
}
