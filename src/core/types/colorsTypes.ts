export type ColorType = {
  id: number;
  hex: string;
  name: string;
};

export type ColorsType = {
  lists: ColorType[];
};

// fetch lists for first mount rendering

export const COLORS_FETCH_START = "COLORS_FETCH_START";
export type ColorsFetchStartActionType = {
  type: typeof COLORS_FETCH_START;
};

export const COLORS_FETCH_STOP = "COLORS_FETCH_STOP";
export type ColorsFetchStopActionType = {
  type: typeof COLORS_FETCH_STOP;
};

export const COLORS_FETCH_ERROR = "COLORS_FETCH_ERROR";
export type ColorsFetchErrorActionType = {
  type: typeof COLORS_FETCH_ERROR;
  error: true;
};

export const COLORS_FETCH_FILL = "COLORS_FETCH_FILL";
export type ColorsFetchFillActionType = {
  type: typeof COLORS_FETCH_FILL;
  payload: ColorType[];
};

export const COLORS_FETCH_ASYNC = "COLORS_FETCH_ASYNC";
export type ColorsFetchAsyncActionType = {
  type: typeof COLORS_FETCH_ASYNC;
};

export type ColorsActionTypes =
  | ColorsFetchStartActionType
  | ColorsFetchStopActionType
  | ColorsFetchErrorActionType
  | ColorsFetchFillActionType
  | ColorsFetchAsyncActionType;
