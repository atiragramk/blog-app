import { useSelector } from "react-redux";
import { Modal } from "../../../../components/Modal";
import { bookListDeleteStateSelector } from "../../selectors/bookList";
import { StyledSpin } from "./styled";
import { Space, Typography } from "antd";
import PropTypes from "prop-types";

export const DeleteBookModal = ({ onSave, onCancel }) => {
  const { loading, data } = useSelector(bookListDeleteStateSelector);

  const { Title, Text } = Typography;

  return (
    <Modal onCancel={onCancel} onSave={() => onSave(data)} loading={loading}>
      <StyledSpin spinning={loading}>
        {data && (
          <Space direction="vertical">
            <Title level={5}>
              Are you sure that you want to delete{" "}
              <Text underline italic>
                {data.title}
              </Text>
              ?
            </Title>

            <Text>
              The item will be deleted immediately. You can not undo this
              action.
            </Text>
          </Space>
        )}
      </StyledSpin>
    </Modal>
  );
};

DeleteBookModal.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
