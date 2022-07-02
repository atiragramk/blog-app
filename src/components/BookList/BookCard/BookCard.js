import {
  StyledCard,
  StyledLink,
  StyledWrapper,
  StyledCardTitle,
  StyledCardText,
  StyledDate,
} from "./styled";
import { CardBody } from "reactstrap";
import moment from "moment";

export const BookCard = (props) => {
  const { id, title, description, publishDate } = props;
  const shortText = `${description.slice(0, 130)}...`;
  const date = moment(publishDate).format("DD/MM/YYYY");

  return (
    <StyledCard>
      <CardBody>
        <StyledCardTitle tag="h3">{title}</StyledCardTitle>
        <StyledCardText tag="p">{shortText}</StyledCardText>
        <StyledWrapper>
          <StyledDate>{date}</StyledDate>
          <StyledLink to={`/books/${id}`}>More</StyledLink>
        </StyledWrapper>
      </CardBody>
    </StyledCard>
  );
};
