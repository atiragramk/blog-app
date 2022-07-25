import { BookCard } from "../pages/BookList/components/BookCard/BookCard";
import moment from "moment";
import { MemoryRouter } from "react-router-dom";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
