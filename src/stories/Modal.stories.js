import { Modal } from "../components/Modal";
import { BookForm } from "../pages/BookList/components/BookForm";

export default {
  title: "Components/Modal",
  component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const ModalCreate = Template.bind({});

ModalCreate.args = {
  onSave: () => {},
  formName: "create",
  disable: false,
  children: <BookForm formName="create" />,
  loading: false,
  onCancel: () => {},
};

export const ModalUpdate = Template.bind({});

ModalUpdate.args = {
  onSave: () => {},
  formName: "edit",
  disable: false,
  children: (
    <BookForm
      name="edit"
      mode="edit"
      data={{
        title: "Harry Potter",
        description: "Magic adventures of young boy and his friends",
        pageCount: "500",
      }}
    />
  ),
  loading: false,
  onCancel: () => {},
};

export const ModalDelete = Template.bind({});

ModalDelete.args = {
  onSave: () => {},
  formName: "",
  disable: false,
  loading: false,
  onCancel: () => {},
};
