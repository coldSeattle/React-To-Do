import { SagaIterator } from "redux-saga";
import { call, put, takeEvery } from "redux-saga/effects";
import { root } from "../../config/api";
import {
  colorsFetchError,
  colorsFetchFill,
  colorsFetchStart,
  colorsFetchStop,
} from "../actions/ColorsActions";
import { COLORS_FETCH_ASYNC } from "../types/colorsTypes";

export async function colorsFetchAxios() {
  return await root.get("/db/colors").then((res) => res);
}

export function* workerColorsFetch() {
  try {
    yield colorsFetchStart();
    const { data } = yield call(colorsFetchAxios);
    console.log("data", data);
    yield put(colorsFetchFill(data));
    yield colorsFetchStop();
  } catch (error) {
    colorsFetchError();
  }
}

export function* watchColorsFetch(): SagaIterator {
  yield takeEvery(COLORS_FETCH_ASYNC, workerColorsFetch);
}
