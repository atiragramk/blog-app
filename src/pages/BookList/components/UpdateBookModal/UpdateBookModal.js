import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../../../components/Modal";
import { bookListUpdateStateSelector } from "../../selectors/bookList";
import { bookItemUpdateDataFetch } from "../../thunk/bookList";
import { BookForm } from "../BookForm/BookForm";
import { StyledSpin } from "../DeleteBookModal/styled";
import { Typography } from "antd";
import PropTypes from "prop-types";

export const UpdateBookModal = ({ onSave, onCancel }) => {
  const dispatch = useDispatch();
  const { fetchData, data, loading } = useSelector(bookListUpdateStateSelector);
  const { Text } = Typography;

  useEffect(() => {
    dispatch(bookItemUpdateDataFetch(fetchData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal
      loading={loading}
      form="edit"
      onCancel={onCancel}
      formName="edit"
      disable={!data}
    >
      <StyledSpin size="middle" spinning={loading}>
        {Object.keys(data).length > 0 && (
          <BookForm mode="edit" onSave={onSave} data={data} name="edit" />
        )}
        {!data && <Text type="danger"> Something went wrong</Text>}
      </StyledSpin>
    </Modal>
  );
};

UpdateBookModal.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
