import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { createModalSelector, updateModalSelector } from "../Modal/selectors/modal";
import { createModalOpen } from "../Modal/reducer/createModal";
import { updateModalOpen } from "../Modal/reducer/updateModal";
import { bookItemCreate, bookItemUpdate} from "../Modal/thunk/modal";

const CreateBookSchema = yup.object().shape({
  title: yup.string().required("This field is required"),
  description: yup.string().required("This field is required"),
  pageCount: yup
    .number()
    .required("This field is required")
    .positive("Value must be a positive number.")
    .integer("Value must be an integer"),
});

export const BookForm = (props) => {


  const { formId, data } = props;
  const { Text, Title } = Typography;
  const { TextArea } = Input;

  const dispatch = useDispatch();
  const { open } = useSelector(createModalSelector);
  const {updateOpen} = useSelector(updateModalSelector);

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreateBookSchema)
  });

  const onSubmit = async (values) => {
    try {
      if (formId === "create") {
        await dispatch(bookItemCreate(values));
        dispatch(createModalOpen(open));
        reset();
      } else {
        await dispatch(bookItemUpdate({
          data: values,
          id: data._id
        }))
        dispatch(updateModalOpen(updateOpen))
      }
    } catch (error) {}
  };

  return (
    <>
      {formId === "create" && <Title level={3}>Create Book</Title>}
      {formId === "update" && <Title level={3}>Update Book</Title>}
      <form onSubmit={handleSubmit(onSubmit)} id={formId}>
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
