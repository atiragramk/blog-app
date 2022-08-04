import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../../../components/Modal";
import { bookListUpdateStateSelector } from "../../selectors/bookList";
import { bookItemUpdateDataFetch } from "../../thunk/bookList";
import { BookForm } from "../BookForm/BookForm";
import { StyledSpin } from "../DeleteBookModal/styled";
import { Typography } from "antd";
import PropTypes from "prop-types";
import { bookListUpdateResetAction } from "../../reducer/bookList";
import { AppDispatch } from "../../../../store";
import { TModalProps } from "../../../../types/modal";

export const UpdateBookModal: React.FC<TModalProps> = ({ onSave, onCancel }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { fetchData, data, loading } = useSelector(bookListUpdateStateSelector);
  const { Text } = Typography;

  useEffect(
    // @ts-ignore
    () => {
    dispatch(bookItemUpdateDataFetch(fetchData));
    return () => dispatch(bookListUpdateResetAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal
      loading={loading}
      onCancel={onCancel}
      formName="edit"
      disable={!data}
      onSave={onSave}
    >
      <StyledSpin size="default" spinning={loading}>
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
