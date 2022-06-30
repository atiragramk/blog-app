import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "reactstrap";
import { StyledContainer, StyleTable } from "./styled";

export const Statistic = () => {
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = "https://fakerestapi.azurewebsites.net/api/v1/Books";
    axios.get(url).then((response) => {
      setBookList(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <StyledContainer>
      {loading ? (
        <Spinner />
      ) : (
        <StyleTable striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Create Date</th>
            </tr>
          </thead>
          <tbody>
            {bookList.map((book) => {
              const { id, description, title, publishDate } = book;
              const shortDescr = `${description.slice(0, 130)}...`;
              const date = new Date(publishDate).toLocaleString();
              return (
                <>
                  <tr>
                    <th>{id}</th>
                    <td>{title}</td>
                    <td>{shortDescr}</td>
                    <td>{date}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </StyleTable>
      )}
    </StyledContainer>
  );
};
