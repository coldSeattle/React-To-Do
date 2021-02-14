export interface ListType {
  id: number;
  name: string;
  colorId: number;
}

export type ColorType = {
  id: number;
  hex: string;
  name: string;
};

export interface SelecedColorType extends ColorType {
  colorId: number;
}

export interface ListembedTasksType extends ListType {
  tasks: TaskType[];
}

export interface ListEmbedColorType extends ListType {
  color: ColorType;
}

export interface TaskType {
  listId: number;
  text: string;
  completed: boolean;
  id: number;
}

export interface ListEmbedColorAndTasksType extends ListType {
  tasks: TaskType[];
  color: ColorType;
}

export type ListsType = {
  lists: ListEmbedColorAndTasksType[];
};

// fetch lists for first mount rendering

export const LISTS_FETCH_START = "LISTS_FETCH_START";
export type ListsFetchStartActionType = {
  type: typeof LISTS_FETCH_START;
};

export const LISTS_FETCH_STOP = "LISTS_FETCH_STOP";
export type ListsFetchStopActionType = {
  type: typeof LISTS_FETCH_STOP;
};

export const LISTS_FETCH_ERROR = "LISTS_FETCH_ERROR";
export type ListsFetchErrorActionType = {
  type: typeof LISTS_FETCH_ERROR;
  error: true;
};

export const LISTS_FETCH_SYNC = "LISTS_FETCH_SYNC";
export type ListsFetchFillActionType = {
  type: typeof LISTS_FETCH_SYNC;
  payload: ListEmbedColorAndTasksType[];
};

export const LISTS_FETCH_ASYNC = "LISTS_FETCH_ASYNC";
export type ListsFetchAsyncActionType = {
  type: typeof LISTS_FETCH_ASYNC;
};

// remove list

export const LISTS_REMOVE_ITEM_SYNC = "LISTS_REMOVE_ITEM_SYNC";
export type ListsRemoveItemActionType = {
  type: typeof LISTS_REMOVE_ITEM_SYNC;
  payload: { id: number };
};

export const LISTS_REMOVE_ITEM_ASYNC = "LISTS_REMOVE_ITEM_ASYNC";
export type ListsRemoveItemAsyncActionType = {
  type: typeof LISTS_REMOVE_ITEM_ASYNC;
  payload: { id: number };
};

// add list

export const LISTS_ADD_SYNC = "LISTS_ADD_SYNC";
export type ListsAddFillActionType = {
  type: typeof LISTS_ADD_SYNC;
  payload: ListEmbedColorAndTasksType;
};

export const LISTS_ADD_ASYNC = "LISTS_ADD_ASYNC";
export type ListsAddAsyncActionType = {
  type: typeof LISTS_ADD_ASYNC;
  paylaod: ListEmbedColorType;
};

// update list title (editable list title)

export const UPDATE_LIST_TITLE_SYNC = "UPDATE_LIST_TITLE_SYNC";
export type UpdateListTiteActionType = {
  type: typeof UPDATE_LIST_TITLE_SYNC;
  payload: { title: string; listId: string };
};

export const UPDATE_LIST_TITLE_ASYNC = "UPDATE_LIST_TITLE_ASYNC";
export type UpdateListTitleAsyncActionType = {
  type: typeof UPDATE_LIST_TITLE_ASYNC;
  payload: { title: string; listId: string };
};

export type ListsActionTypes =
  | ListsFetchStartActionType
  | ListsFetchStopActionType
  | ListsFetchErrorActionType
  | ListsFetchFillActionType
  | ListsFetchAsyncActionType
  | ListsRemoveItemActionType
  | ListsRemoveItemAsyncActionType
  | ListsAddFillActionType
  | ListsAddAsyncActionType
  | UpdateListTiteActionType
  | UpdateListTitleAsyncActionType;
