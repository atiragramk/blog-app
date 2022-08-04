import React, { ReactNode } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input, Typography } from "antd";
import PropTypes from "prop-types";
import { bookItemDataPropType } from "../../../../propTypes/bookItemPropType";
import { TBook, TBookFormProps } from "../../../../types/pages";

const createBookSchema = yup.object().shape({
  title: yup.string().required("This field is required"),
  description: yup.string().required("This field is required"),
  pageCount: yup
    .number()
    .typeError("Value must be a number")
    .required("This field is required")
    .integer("Value must be an integer")
    .positive("Value must be a positive number."),
});

export const BookForm: React.FC<TBookFormProps> = (props) => {
  const { mode, data, name, onSave } = props;
  const { Text, Title } = Typography;
  const { TextArea } = Input;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createBookSchema),
  });

  const onSubmit = async (values: Partial<TBook>) => {
    try {
      if (!data) {
        onSave(values);
      } else {
        onSave({ ...values, id: data._id });
      }
    } catch (error) {}
  };


  return (
    <>
      {mode === "create" && <Title level={3}>Create Book</Title>}
      {mode === "edit" && <Title level={3}>Update Book</Title>}
      <form onSubmit={handleSubmit(onSubmit)} id={name}>
        <label>Book Title</label>
        <Controller
          render={({ field }) => <Input {...field} />}
          name="title"
          control={control}
          defaultValue={data?.title || ""}
        />
        {errors.title && (
          <Text style={{ display: "block" }} type="danger">
            {errors.title.message as ReactNode}
          </Text>
        )}
        <label>Description</label>
        <Controller
          render={({ field }) => (
            <TextArea style={{ height: "80px" }} {...field} />
          )}
          name="description"
          control={control}
          defaultValue={data?.description || ""}
        />
        {errors.description && (
          <Text style={{ display: "block" }} type="danger">
            {errors.description.message as ReactNode}
          </Text>
        )}

        <label>Page Count</label>
        <Controller
          render={({ field }) => <Input {...field} />}
          name="pageCount"
          control={control}
          defaultValue={data?.pageCount}
        />
        {errors.pageCount && (
          <Text style={{ display: "block" }} type="danger">
            {errors.pageCount.message as ReactNode}
          </Text>
        )}
      </form>
    </>
  );
};

BookForm.defaultProps = {
  mode: "create",
  name: "create",
  onSave: () => {},
};

// BookForm.propTypes = {
//   mode: PropTypes.string.isRequired,
//   data: bookItemDataPropType.isRequired,
//   name: PropTypes.string.isRequired,
//   onSave: PropTypes.func.isRequired,
// };
