import { Button, Modal as AntdModal, Typography } from "antd";
import { StyledButton } from "./styled";
import PropTypes from "prop-types";

const { Text } = Typography;
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
        <StyledButton
          key="cancel"
          loading={loading}
          onClick={onCancel}
          disabled={loading}
        >
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
  formName: "",
  disable: false,
  children: <Text>Modal window</Text>,
  loading: false,
  onCancel: () => {},
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onCancel: PropTypes.func.isRequired,
  formName: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  onSave: PropTypes.func,
  disable: PropTypes.bool,
};
