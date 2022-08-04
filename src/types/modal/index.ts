import React from "react";
import { ReactNode } from "react";
import { TBookFormProps } from "../pages";

export type TModal = {
  open?: boolean;
  name?: string | null;
};

export type TModalProps = {
  children?: ReactNode;
  onCancel: React.MouseEventHandler | Function;
  formName?: string | undefined;
  loading?: boolean;
  onSave: React.MouseEventHandler | Function;
  disable?: boolean | undefined;
};

export type TDeleteModalProps = {
  onCancel: React.MouseEventHandler | Function;
  onSave: Function;
};
