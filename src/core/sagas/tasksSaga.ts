import { SagaIterator } from "redux-saga";
import { call, put, takeEvery } from "redux-saga/effects";
import { root } from "../../config/api";
import {
  AddNewTaskSyncAction,
  editTaskSyncAction,
  RemoveTaskSyncAction,
  SetCompletedPropSyncAction,
} from "../actions/TasksActions";
import {
  AddNewTaskAsyncActionType,
  ADD_NEW_TASK_ASYNC,
  EditTaskNameAsyncActionType,
  EDIT_TASK_NAME_ASYNC,
  RemoveTaskAsyncActionType,
  REMOVE_TASK_ASYNC,
  SetCompletedAsyncActionType,
  SetCompletedType,
  SET_COMPLETED_ASYNC,
  CreateTaskType,
} from "../types/tasksTypes";

export async function AddNewTaskRequest({
  text,
  completed,
  listId,
}: CreateTaskType) {
  return await root.post("/db/tasks", { listId, text, completed });
}

export function* workerAddNewTask(action: AddNewTaskAsyncActionType) {
  try {
    const { data } = yield call(AddNewTaskRequest, {
      listId: action.payload.listId,
      text: action.payload.text,
      completed: action.payload.completed,
    });
    yield put(AddNewTaskSyncAction(data));
    console.log("new TASKKK^--", data);
  } catch (error) {
    console.log("task error", error);
  }
}

export function* watchAddNewTask(): SagaIterator {
  yield takeEvery(ADD_NEW_TASK_ASYNC, workerAddNewTask);
}

// remove task Request

export async function removeTaskRequest({ id }: { id: number }) {
  return await root.delete("/db/tasks/" + id);
}

export function* workerRemoveTask(action: RemoveTaskAsyncActionType) {
  try {
    yield call(removeTaskRequest, { id: action.payload.id });
    yield put(RemoveTaskSyncAction(action.payload));
  } catch (error) {
    console.log("remove error", error);
  }
}

export function* watchRemoveTask(): SagaIterator {
  yield takeEvery(REMOVE_TASK_ASYNC, workerRemoveTask);
}

// set completed prop

export async function setCompletedRequest({ completed, id }: SetCompletedType) {
  return await root.patch("/db/tasks/" + id, { completed });
}

export function* workerSetCompleted(action: SetCompletedAsyncActionType) {
  try {
    yield call(setCompletedRequest, {
      id: action.payload.id,
      listId: action.payload.listId,
      completed: action.payload.completed,
    });
    yield put(SetCompletedPropSyncAction(action.payload));
  } catch (error) {
    console.log("set completed error", error);
  }
}

export function* watchSetCompleted(): SagaIterator {
  yield takeEvery(SET_COMPLETED_ASYNC, workerSetCompleted);
}

// edit task name request

export async function editTaskNameRequest({
  text,
  id,
}: {
  text: string;
  id: number;
}) {
  return await root.patch("/db/tasks/" + id, { text });
}

export function* workerEditTaskName(action: EditTaskNameAsyncActionType) {
  try {
    yield call(editTaskNameRequest, {
      id: action.payload.id,
      text: action.payload.text,
    });
    yield put(editTaskSyncAction(action.payload));
  } catch (error) {
    console.log("set completed error", error);
  }
}

export function* watchEditTaskName(): SagaIterator {
  yield takeEvery(EDIT_TASK_NAME_ASYNC, workerEditTaskName);
}
