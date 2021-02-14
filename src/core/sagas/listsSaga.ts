import { SagaIterator } from "redux-saga";
import { call, put, takeEvery } from "redux-saga/effects";
import { root } from "../../config/api";
import {
  ListsAddFillAction,
  listsFetchError,
  listsFetchFill,
  listsFetchStart,
  listsFetchStop,
  ListsRemoveItemAction,
  updateListTiteAction,
} from "../actions/ListsActions";
import {
  ListsAddAsyncActionType,
  ListsRemoveItemAsyncActionType,
  LISTS_ADD_ASYNC,
  LISTS_FETCH_ASYNC,
  LISTS_REMOVE_ITEM_ASYNC,
  UpdateListTitleAsyncActionType,
  UPDATE_LIST_TITLE_ASYNC,
} from "../types/listsTypes";

//fetch list item sagas/workers/watchers

export async function listsFetchAxios() {
  return await root
    .get("/db/lists?_expand=color&_embed=tasks")
    .then((res) => res);
}

export function* workerListsFetch() {
  try {
    yield listsFetchStart();
    const { data } = yield call(listsFetchAxios);
    console.log("data", data);
    yield put(listsFetchFill(data));
    yield listsFetchStop();
  } catch (error) {
    listsFetchError();
  }
}

export function* watchListsFetch(): SagaIterator {
  yield takeEvery(LISTS_FETCH_ASYNC, workerListsFetch);
}

//remove list  sagas/workers/watchers

export async function listsRemoveItemAxios({ id }: { id: number }) {
  return await root.delete("/db/lists/" + id).then((res) => res);
}

export function* workerListsRemoveItem(action: ListsRemoveItemAsyncActionType) {
  try {
    yield listsFetchStart();
    const { data } = yield call(listsRemoveItemAxios, {
      id: action.payload.id,
    });
    console.log("data", data);
    yield put(ListsRemoveItemAction({ id: action.payload.id }));
    yield listsFetchStop();
  } catch (error) {
    listsFetchError();
  }
}

export function* watchListsRemoveItem(): SagaIterator {
  yield takeEvery(LISTS_REMOVE_ITEM_ASYNC, workerListsRemoveItem);
}

// add list sagas/workers/watchers

export async function listsAddItemAxios({
  name,
  colorId,
}: {
  colorId: number;
  name: string;
}) {
  return await root.post("/db/lists/", { name, colorId }).then((res) => res);
}

export function* workerListsAddItem(action: ListsAddAsyncActionType) {
  try {
    yield listsFetchStart();
    const { data } = yield call(listsAddItemAxios, {
      colorId: action.paylaod.colorId,
      name: action.paylaod.name,
    });
    console.log("data", data);
    yield put(
      ListsAddFillAction({
        name: data.name,
        colorId: data.colorId,
        id: data.id,
        tasks: [],
        color: {
          hex: action.paylaod.color.hex,
          name: action.paylaod.color.name,
          id: action.paylaod.color.id,
        },
        // color: data.color
      })
    );
    yield listsFetchStop();
  } catch (error) {
    listsFetchError();
  }
}

export function* watchListsAddItem(): SagaIterator {
  yield takeEvery(LISTS_ADD_ASYNC, workerListsAddItem);
}

// edit list title patch request

export async function updateListTitleAxios({
  title,
  listId,
}: {
  title: string;
  listId: string;
}) {
  return await root
    .patch("/db/lists/" + listId, { name: title })
    .then((res) => res);
}

export function* workerUpdateListTitle(action: UpdateListTitleAsyncActionType) {
  try {
    yield listsFetchStart();
    const { data } = yield call(updateListTitleAxios, {
      title: action.payload.title,
      listId: action.payload.listId,
    });
    console.log("data", data);
    yield put(
      updateListTiteAction({
        title: data.name,
        listId: data.id,
      })
    );
    yield listsFetchStop();
  } catch (error) {
    listsFetchError();
  }
}

export function* watchUpdateListTitle(): SagaIterator {
  yield takeEvery(UPDATE_LIST_TITLE_ASYNC, workerUpdateListTitle);
}
