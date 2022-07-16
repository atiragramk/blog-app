import { Button, Modal } from "antd";
import { BookForm } from "../../BookForm/BookForm";
import { useSelector, useDispatch} from "react-redux";
import { createModalOpen } from "../reducer/createModal";
import { createModalSelector } from "../selectors/modal";

const CreateModal = (props) => {
  
  const {form} = props;
  const dispatch = useDispatch();
  const {open, loading} = useSelector(createModalSelector);

  const handleOpen = () => {
    dispatch(createModalOpen(open));
  };

  return (
    <>
      <Modal
        visible={open}
        onCancel={handleOpen}
        confirmLoading={loading}
        footer={[
          <Button key="cancel" onClick={handleOpen}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            form={form}
            htmlType="submit"
          >
            Confirm
          </Button>,
        ]}
      >
        <BookForm formId={form} />
      </Modal>
    </>
  );
};

export default CreateModal;
