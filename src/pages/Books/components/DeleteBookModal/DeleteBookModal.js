import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../../../components/Modal";
import { bookListDeleteStateSelector } from "../../selectors/bookList";

export const DeleteBookModal = ({ onSave, onCancel }) => {
  const { loading, data } = useSelector(bookListDeleteStateSelector);

  return (
    <Modal onCancel={onCancel} onSave={() => onSave(data)} formName="edit">
      {loading && <div>Loading</div>}
      <div>Do you want to delete item {data.title}</div>
    </Modal>
  );
};
