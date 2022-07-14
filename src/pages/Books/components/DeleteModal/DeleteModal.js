import { Typography } from 'antd';


export const DeleteModal = (props) => {
  const { title } = props;
  const { Text, Title} = Typography;

  return (
    <>
     <Title level={4}>Are you sure that you want to <Text type="danger">delete</Text> {title}?</Title>
     <Text>This item will be deleted immediately. You can not undo this action</Text>
    </>
  );
};
