import {
  ColorType,
  ColorsActionTypes,
  COLORS_FETCH_ASYNC,
  COLORS_FETCH_ERROR,
  COLORS_FETCH_FILL,
  COLORS_FETCH_START,
  COLORS_FETCH_STOP,
} from "../types/colorsTypes";

export function colorsFetchStart(): ColorsActionTypes {
  return {
    type: COLORS_FETCH_START,
  };
}

export function colorsFetchStop(): ColorsActionTypes {
  return {
    type: COLORS_FETCH_STOP,
  };
}

export function colorsFetchError(): ColorsActionTypes {
  return {
    type: COLORS_FETCH_ERROR,
    error: true,
  };
}

export function colorsFetchFill(payload: ColorType[]): ColorsActionTypes {
  return {
    type: COLORS_FETCH_FILL,
    payload,
  };
}

export function colorsFetchAsyncAction(): ColorsActionTypes {
  return {
    type: COLORS_FETCH_ASYNC,
  };
}
