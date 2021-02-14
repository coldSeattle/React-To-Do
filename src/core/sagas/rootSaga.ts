import { all } from "redux-saga/effects";
import { watchColorsFetch } from "./colorsSaga";
import {
  watchListsAddItem,
  watchListsFetch,
  watchListsRemoveItem,
  watchUpdateListTitle,
} from "./listsSaga";
import {
  watchAddNewTask,
  watchEditTaskName,
  watchRemoveTask,
  watchSetCompleted,
} from "./tasksSaga";

export function* rootSaga(): Generator {
  yield all([
    watchListsFetch(),
    watchListsRemoveItem(),
    watchColorsFetch(),
    watchListsAddItem(),
    watchUpdateListTitle(),
    watchAddNewTask(),
    watchRemoveTask(),
    watchSetCompleted(),
    watchEditTaskName(),
  ]);
}
