import { Button, Modal as AntdModal } from "antd";
import { StyledButton } from "./styled";
import PropTypes from "prop-types";

export const Modal = ({
  children,
  onCancel,
  formName,
  loading,
  onSave,
  disable,
}) => {
  return (
    <AntdModal
      visible={true}
      onCancel={onCancel}
      confirmLoading={loading}
      footer={[
        <StyledButton key="cancel" onClick={onCancel}>
          Cancel
        </StyledButton>,
        <Button
          key="submit"
          type="primary"
          disabled={disable}
          danger={!formName}
          loading={loading}
          htmlType="submit"
          form={formName}
          onClick={onSave}
        >
          Confirm
        </Button>,
      ]}
    >
      {children}
    </AntdModal>
  );
};

Modal.defaultProps = {
  onSave: () => {},
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onCancel: PropTypes.func.isRequired,
  formName: PropTypes.string,
  loading: PropTypes.bool,
  onSave: PropTypes.func,
  disable: PropTypes.bool,
};
