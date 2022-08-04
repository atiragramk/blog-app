export type TBook = {
  _id: string;
  title: string;
  description: string;
  pageCount: string;
  publishDate: string;
  createdAt: string;
  updatedAt: string;
};

export type TBookListState = {
  loading: boolean;
  data: TBook[] | [];
  error: boolean | null;
  updateState: TUpdateState;
  createState: TCreateState;
  deleteState: TDeleteState;
};

export type TFetchData = {
  id: string;
};
export type TUpdateState = {
  loading: boolean;
  data: TBook | {};
  error: boolean | null;
  fetchData: TFetchData;
};
export type TDeleteState = {
  loading: boolean;
  data: TBook | null;
  error: boolean | null;
};
export type TCreateState = {
  loading: boolean;
  data: TBook | {};
  error: boolean | null;
};

export type TBookItemState = {
  loading: boolean;
  data: Partial<TBook>;
  error: boolean | null;
};

export type TBookCardProps = {
  data: TBook;
  onEdit: Function;
  onDelete: Function;
};

export type TBookFormProps = {
  data?: Partial<TBook>;
  onSave: Function;
  mode: string;
  name: string;
};
