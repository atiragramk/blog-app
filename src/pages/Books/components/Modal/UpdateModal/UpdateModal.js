import { Button, Modal } from "antd";
import { BookForm } from "../../BookForm/BookForm";
import { useSelector, useDispatch } from "react-redux";
import { updateModalOpen } from "../reducer/updateModal";
import { updateModalSelector } from "../selectors/modal";
import { bookItemDataSelector } from "../../../../SingleBook/selectors/bookItem";

const UpdateModal = (props) => {
    
  const data = useSelector(bookItemDataSelector);

  const { form } = props;
  const dispatch = useDispatch();
  const { updateOpen, updateLoading } = useSelector(updateModalSelector);

  const handleOpen = () => {
    dispatch(updateModalOpen(updateOpen));
  };

  return (
    <>
      <Modal
        visible={updateOpen}
        onCancel={handleOpen}
        confirmLoading={updateLoading}
        footer={[
          <Button key="cancel" onClick={handleOpen}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={updateLoading}
            form={form}
            htmlType="submit"
          >
            Confirm
          </Button>,
        ]}
      >
        <BookForm formId={form} data={data} />
      </Modal>
    </>
  );
};

export default UpdateModal;
