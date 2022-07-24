import { useSelector } from "react-redux";
import { Modal } from "../../../../components/Modal";
import { bookListCreateStateSelector } from "../../selectors/bookList";
import { BookForm } from "../BookForm/BookForm";
import PropTypes from "prop-types";
import { StyledSpin } from "../DeleteBookModal/styled";

export const CreateBookModal = ({ onSave, onCancel }) => {
  const { loading } = useSelector(bookListCreateStateSelector);

  return (
    <Modal onCancel={onCancel} formName="create" loading={loading}>
      <StyledSpin spinning={loading}>
        <BookForm mode="create" onSave={onSave} name="create" />
      </StyledSpin>
    </Modal>
  );
};

CreateBookModal.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
