import { TaskType } from "../types/listsTypes";
import {
  ADD_NEW_TASK_ASYNC,
  ADD_NEW_TASK_SYNC,
  EDIT_TASK_NAME_ASYNC,
  EDIT_TASK_NAME_SYNC,
  REMOVE_TASK_ASYNC,
  REMOVE_TASK_SYNC,
  SetCompletedType,
  SET_COMPLETED_ASYNC,
  SET_COMPLETED_SYNC,
  CreateTaskType,
  TasksTypes,
} from "../types/tasksTypes";

export function AddNewTaskAsyncAction(payload: CreateTaskType): TasksTypes {
  return {
    type: ADD_NEW_TASK_ASYNC,
    payload,
  };
}

export function AddNewTaskSyncAction(payload: TaskType): TasksTypes {
  return {
    type: ADD_NEW_TASK_SYNC,
    payload,
  };
}

// remove task action creators

export function RemoveTaskSyncAction(payload: TaskType): TasksTypes {
  return {
    type: REMOVE_TASK_SYNC,
    payload,
  };
}

export function RemoveTaskAsyncAction(payload: TaskType): TasksTypes {
  return {
    type: REMOVE_TASK_ASYNC,
    payload,
  };
}

// set completed prop

export function SetCompletedPropSyncAction(
  payload: SetCompletedType
): TasksTypes {
  return {
    type: SET_COMPLETED_SYNC,
    payload,
  };
}

export function SetCompletedPropAsyncAction(
  payload: SetCompletedType
): TasksTypes {
  return {
    type: SET_COMPLETED_ASYNC,
    payload,
  };
}

// edit task
export function editTaskSyncAction(payload: TaskType): TasksTypes {
  return {
    type: EDIT_TASK_NAME_SYNC,
    payload,
  };
}

export function editTaskAsyncAction(payload: TaskType): TasksTypes {
  return {
    type: EDIT_TASK_NAME_ASYNC,
    payload,
  };
}
