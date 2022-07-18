import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input, Typography } from "antd";

const CreateBookSchema = yup.object().shape({
  title: yup.string().required("This field is required"),
  description: yup.string().required("This field is required"),
  pageCount: yup
    .number()
    .required("This field is required")
    .integer("Value must be an integer")
    .positive("Value must be a positive number."),
});

export const BookForm = (props) => {
  const { mode, data, name, onSave } = props;
  const { Text, Title } = Typography;
  const { TextArea } = Input;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreateBookSchema),
  });

  const onSubmit = async (values) => {
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
      {mode === "update" && <Title level={3}>Update Book</Title>}
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
            {errors.title.message}
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
            {errors.description.message}
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
            {errors.pageCount.message}
          </Text>
        )}
      </form>
    </>
  );
};
