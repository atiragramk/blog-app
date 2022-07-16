import { Button, Modal, Typography } from "antd";
import { bookItemDataSelector } from "../../../../SingleBook/selectors/bookItem";
import { useSelector, useDispatch } from "react-redux";
import { deleteModalOpen } from "../reducer/deleteModal";
import { bookItemDelete } from "../thunk/modal";
import {deleteModalSelector} from "../selectors/modal"


export const DeleteModal = () => {

  const data = useSelector(bookItemDataSelector);
  
  const {deleteOpen, deleteLoading} = useSelector(deleteModalSelector);
  const dispatch = useDispatch();
  const { Text, Title } = Typography;

  const handleToogleOpen = () => {
    dispatch(deleteModalOpen(deleteOpen));
  }

  const handleDelete = async () => {
    await dispatch(bookItemDelete(data._id))
    dispatch(deleteModalOpen(deleteOpen));
  }


  return (
    <Modal
      visible={deleteOpen}
      onCancel={handleToogleOpen}
      confirmLoading={deleteLoading}
      footer={[
        <Button key="cancel" onClick={handleToogleOpen}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={deleteLoading}
          danger
          onClick={handleDelete}
        >
          Confirm
        </Button>,
      ]}
    >
      <Title level={4}>
        Are you sure that you want to <Text type="danger">delete</Text>
        <Text underline> {data.title}</Text>?
      </Title>
      <Text>
        This item will be deleted immediately. You can not undo this action
      </Text>
    </Modal>
  );
};
