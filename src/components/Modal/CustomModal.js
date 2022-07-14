import React from "react";
import { Button, Modal } from "antd";

const CustomModal = (props) => {
  const { open, onToggle, onConfirm, id } = props;
  return (
    <>
      <Modal
        visible={open}
        onCancel={onToggle}
        footer={[
          <Button key="cancel" onClick={onToggle}>
            Cancel
          </Button>,
          <Button key="confirm" type="primary" danger onClick={() => onConfirm(id)}>
            Confirm
          </Button>,
        ]}
      >
        {props.children}
      </Modal>
    </>
  );
};

export default CustomModal;
