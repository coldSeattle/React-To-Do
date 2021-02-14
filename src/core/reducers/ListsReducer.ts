/* eslint-disable no-fallthrough */
import { Reducer } from "redux";
import {
  ListEmbedColorAndTasksType,
  ListsActionTypes,
  LISTS_ADD_SYNC,
  LISTS_REMOVE_ITEM_SYNC,
  LISTS_REMOVE_ITEM_ASYNC,
  UPDATE_LIST_TITLE_SYNC,
  LISTS_FETCH_START,
  LISTS_FETCH_ASYNC,
  LISTS_FETCH_ERROR,
  LISTS_FETCH_STOP,
  LISTS_FETCH_SYNC,
} from "../types/listsTypes";
import {
  ADD_NEW_TASK_SYNC,
  EDIT_TASK_NAME_SYNC,
  REMOVE_TASK_SYNC,
  SET_COMPLETED_SYNC,
  TasksTypes,
} from "../types/tasksTypes";

export type ListsState = {
  lists: ListEmbedColorAndTasksType[];
  error: boolean;
  loading: boolean;
};

const initialState: ListsState = {
  lists: [],
  error: false,
  loading: false,
};

export const ListsReducer: Reducer<ListsState> = (
  state = initialState,
  action: ListsActionTypes | TasksTypes
): ListsState => {
  switch (action.type) {
    case LISTS_FETCH_START:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case LISTS_FETCH_STOP:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case LISTS_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case LISTS_FETCH_SYNC:
      return {
        ...state,
        loading: false,
        error: false,
        lists: action.payload,
      };
    case LISTS_FETCH_ASYNC:
      return state;
    case LISTS_REMOVE_ITEM_SYNC:
      return {
        ...state,
        lists: state.lists.filter((item) => item.id !== action.payload.id),
      };
    case LISTS_REMOVE_ITEM_ASYNC:
      return state;
    case LISTS_ADD_SYNC:
      return {
        ...state,
        lists: [...state.lists, action.payload],
      };
    case UPDATE_LIST_TITLE_SYNC:
      return {
        ...state,
        lists: state.lists.map((item) =>
          item.id == Number(action.payload.listId)
            ? { ...item, name: action.payload.title }
            : item
        ),
      };
    case ADD_NEW_TASK_SYNC:
      // eslint-disable-next-line no-case-declarations
      const updatedList = state.lists.filter((item) => {
        if (item.id == action.payload.listId) {
          item.tasks.push(action.payload);
        }
        return item;
      });
      return {
        ...state,
        lists: updatedList,
      };
    case REMOVE_TASK_SYNC:
      // eslint-disable-next-line no-case-declarations
      const newList = state.lists.map((item) => {
        if (item.id === action.payload.listId) {
          item.tasks = item.tasks.filter(
            (task) => task.id !== action.payload.id
          );
        }
        return item;
      });
      return {
        ...state,
        lists: newList,
      };
    case SET_COMPLETED_SYNC:
      // eslint-disable-next-line no-case-declarations
      const setCompleted = state.lists.map((list) => {
        if (list.id === action.payload.listId) {
          list.tasks = list.tasks.map((task) => {
            if (task.id === action.payload.id) {
              task.completed = action.payload.completed;
            }
            return task;
          });
        }
        return list;
      });
      return {
        ...state,
        lists: setCompleted,
      };
    case EDIT_TASK_NAME_SYNC:
      // eslint-disable-next-line no-case-declarations
      const editTaskName = state.lists.map((list) => {
        if (list.id === action.payload.listId) {
          list.tasks = list.tasks.map((task) => {
            if (task.id === action.payload.id) {
              task.text = action.payload.text;
            }
            return task;
          });
        }
        return list;
      });
      return {
        ...state,
        lists: editTaskName,
      };
    default:
      return state;
  }
};
