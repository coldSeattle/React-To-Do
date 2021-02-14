import { TaskType } from "./listsTypes";

export interface CreateTaskType {
  listId: number;
  text: string;
  completed: boolean;
}

// add new task

export const ADD_NEW_TASK_SYNC = "ADD_NEW_TASK_SYNC";
export type AddNewTaskSyncActionType = {
  type: typeof ADD_NEW_TASK_SYNC;
  payload: TaskType;
};

export const ADD_NEW_TASK_ASYNC = "ADD_NEW_TASK_ASYNC";
export type AddNewTaskAsyncActionType = {
  type: typeof ADD_NEW_TASK_ASYNC;
  payload: CreateTaskType;
};

// remove task

export const REMOVE_TASK_SYNC = "REMOVE_TASK_SYNC";
export type RemoveTaskSyncActionType = {
  type: typeof REMOVE_TASK_SYNC;
  payload: TaskType;
};

export const REMOVE_TASK_ASYNC = "REMOVE_TASK_ASYNC";
export type RemoveTaskAsyncActionType = {
  type: typeof REMOVE_TASK_ASYNC;
  payload: TaskType;
};

// changing completed prop

export type SetCompletedType = {
  id: number;
  listId: number;
  completed: boolean;
};

export const SET_COMPLETED_SYNC = "SET_COMPLETED_SYNC";
export type SetCompletedActionType = {
  type: typeof SET_COMPLETED_SYNC;
  payload: SetCompletedType;
};

export const SET_COMPLETED_ASYNC = "SET_COMPLETED_ASYNC";
export type SetCompletedAsyncActionType = {
  type: typeof SET_COMPLETED_ASYNC;
  payload: SetCompletedType;
};

// editable task name
export const EDIT_TASK_NAME_SYNC = "EDIT_TASK_NAME_SYNC";
export type EditTaskNameSyncActionType = {
  type: typeof EDIT_TASK_NAME_SYNC;
  payload: TaskType;
};

export const EDIT_TASK_NAME_ASYNC = "EDIT_TASK_NAME_ASYNC";
export type EditTaskNameAsyncActionType = {
  type: typeof EDIT_TASK_NAME_ASYNC;
  payload: TaskType;
};

export type TasksTypes =
  | AddNewTaskSyncActionType
  | AddNewTaskAsyncActionType
  | RemoveTaskSyncActionType
  | RemoveTaskAsyncActionType
  | SetCompletedActionType
  | SetCompletedAsyncActionType
  | EditTaskNameSyncActionType
  | EditTaskNameAsyncActionType;
