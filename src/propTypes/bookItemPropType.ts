import PropTypes from "prop-types";

export const bookItemDataPropType = PropTypes.shape({
  _id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  pageCount: PropTypes.string,
  publishDate: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
});
