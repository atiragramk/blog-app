import { CardBody } from "reactstrap";
import moment from "moment";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { bookItemDataPropType } from "../../../../propTypes/bookItemPropType";

import {
  StyledCard,
  StyledLink,
  StyledWrapper,
  StyledCardTitle,
  StyledCardText,
  StyledDate,
  StyledButton,
} from "./styled";
import React from "react";

export const BookCard = ({ data, onEdit, onDelete }) => {
  const { _id: id, title, description, publishDate } = data;
  const shortText =
    description.length > 130 ? `${description.slice(0, 130)}...` : description;
  const date = moment(publishDate).format("DD/MM/YYYY");

  return (
    <StyledCard size="small">
      <CardBody>
        <StyledButton onClick={() => onEdit(id)} type="default" edit="edit">
          <EditOutlined />
        </StyledButton>
        <StyledButton onClick={() => onDelete(data)} type="default">
          <DeleteOutlined />
        </StyledButton>

        <StyledCardTitle tag="h5">{title}</StyledCardTitle>
        <StyledCardText tag="p">{shortText}</StyledCardText>
        <StyledWrapper>
          <StyledDate>{date}</StyledDate>
          <StyledLink to={`/books/${id}`}>More</StyledLink>
        </StyledWrapper>
      </CardBody>
    </StyledCard>
  );
};

BookCard.defaultProps = {
  data: {
    _id: "",
    title: "",
    description: "",
    publishDate: "",
  },
};

BookCard.propTypes = {
  data: bookItemDataPropType.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
