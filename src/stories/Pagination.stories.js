import { BookPagination } from "../components/Pagination/";

export default {
  title: "Components/Pagination",
  component: BookPagination,
};

const Template = (args) => <BookPagination {...args} />;

export const Pagination = Template.bind({});

Pagination.args = {
  currentPage: 0,
  pageCount: 5,
  onClick: {},
};
