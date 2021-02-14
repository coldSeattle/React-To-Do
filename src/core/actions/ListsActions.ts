import {
  ListEmbedColorAndTasksType,
  ListEmbedColorType,
  ListsActionTypes,
  LISTS_ADD_ASYNC,
  LISTS_ADD_SYNC,
  LISTS_FETCH_ASYNC,
  LISTS_FETCH_ERROR,
  LISTS_FETCH_SYNC,
  LISTS_FETCH_START,
  LISTS_FETCH_STOP,
  LISTS_REMOVE_ITEM_SYNC,
  LISTS_REMOVE_ITEM_ASYNC,
  UPDATE_LIST_TITLE_SYNC,
  UPDATE_LIST_TITLE_ASYNC,
} from "../types/listsTypes";

// fetch lists for first mount rendering

export function listsFetchStart(): ListsActionTypes {
  return {
    type: LISTS_FETCH_START,
  };
}

export function listsFetchStop(): ListsActionTypes {
  return {
    type: LISTS_FETCH_STOP,
  };
}

export function listsFetchError(): ListsActionTypes {
  return {
    type: LISTS_FETCH_ERROR,
    error: true,
  };
}

export function listsFetchFill(
  payload: ListEmbedColorAndTasksType[]
): ListsActionTypes {
  return {
    type: LISTS_FETCH_SYNC,
    payload,
  };
}

export function listsFetchAsyncAction(): ListsActionTypes {
  return {
    type: LISTS_FETCH_ASYNC,
  };
}

// remove list item action creators

export function ListsRemoveItemAction(payload: {
  id: number;
}): ListsActionTypes {
  return {
    type: LISTS_REMOVE_ITEM_SYNC,
    payload,
  };
}
export function ListsRemoveItemAsycnAction(payload: {
  id: number;
}): ListsActionTypes {
  return {
    type: LISTS_REMOVE_ITEM_ASYNC,
    payload,
  };
}

// add list

export function ListsAddFillAction(
  payload: ListEmbedColorAndTasksType
): ListsActionTypes {
  return {
    type: LISTS_ADD_SYNC,
    payload,
  };
}

export function ListsAddAsyncAction(
  payload: ListEmbedColorType
): ListsActionTypes {
  return {
    type: LISTS_ADD_ASYNC,
    paylaod: payload,
  };
}

export function updateListTiteAction(payload: {
  title: string;
  listId: string;
}): ListsActionTypes {
  return {
    type: UPDATE_LIST_TITLE_SYNC,
    payload,
  };
}

export function updateListTiteAsyncAcion(payload: {
  title: string;
  listId: string;
}): ListsActionTypes {
  return {
    type: UPDATE_LIST_TITLE_ASYNC,
    payload,
  };
}
