import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Spinner, Button } from "reactstrap";
export const BookInfo = () => {
  const [bookInfo, setBookInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const url = `https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`;
    axios.get(url).then((response) => {
      setBookInfo(response.data);
      setLoading(false);
    });
  }, [id]);

  const { description, title, publishDate } = bookInfo;
  const date = new Date(publishDate).toLocaleString();
  return (
    <Container>
      <Button href="/book">Back to list</Button>
      {loading ? (
        Spinner
      ) : (
        <>
          <h2>{title}</h2>
          <p>{description}</p>
          <span>{date}</span>
        </>
      )}
    </Container>
  );
};
