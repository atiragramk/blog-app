import { BookCard } from "../pages/BookList/components/BookCard/BookCard";
import moment from "moment";
import { MemoryRouter } from "react-router-dom";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

export default {
  title: "Components/BookItem",
  component: BookCard,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 4 },
  },
};

const Template = (args) => <BookCard {...args} />;

export const BookItem = Template.bind({});

BookItem.args = {
  data: {
    title: "Harry Potter",
    description: "Magic adventures of young boy and his friend",
    publishDate: moment(),
  },
  onEdit: () => {},
  onDelete: () => {},
};

export const EmptyBookItem = Template.bind({});

EmptyBookItem.args = {
  onEdit: () => {},
  onDelete: () => {},
};

const TemplateList = ({ numberOfChildren, ...args }) => (
  <Container
    style={{
      display: "flex",
      justifyContent: "center",
      padding: "0",
      flexDirection: "row",
      flexWrap: "wrap",
    }}
  >
    {[...Array(numberOfChildren).keys()].map((n) => (
      <BookCard {...args} />
    ))}
  </Container>
);

export const BookCardList = TemplateList.bind({});

BookCardList.args = {
  data: {
    title: "Harry Potter",
    description: "Magic adventures of young boy and his friend",
    publishDate: moment(),
  },
  onEdit: () => {},
  onDelete: () => {},
};
