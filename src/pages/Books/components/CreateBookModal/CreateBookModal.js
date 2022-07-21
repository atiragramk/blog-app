import { useSelector } from "react-redux";
import { Modal } from "../../../../components/Modal";
import { bookListCreateStateSelector } from "../../selectors/bookList";
import { BookForm } from "../BookForm/BookForm";
import PropTypes from "prop-types";

export const CreateBookModal = ({ onSave, onCancel }) => {
  const { loading } = useSelector(bookListCreateStateSelector);

  return (
    <Modal onCancel={onCancel} formName="create" loading={loading}>
      <BookForm mode="create" onSave={onSave} name="create" />
    </Modal>
  );
};

CreateBookModal.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
