import { Reducer } from "redux";
import {
  ColorType,
  ColorsActionTypes,
  COLORS_FETCH_ASYNC,
  COLORS_FETCH_ERROR,
  COLORS_FETCH_FILL,
  COLORS_FETCH_START,
  COLORS_FETCH_STOP,
} from "../types/colorsTypes";

export type ColorsState = {
  colors: ColorType[];
  error: boolean;
  loading: boolean;
};

const initialState: ColorsState = {
  colors: [],
  error: false,
  loading: false,
};

export const ColorsReducer: Reducer<ColorsState> = (
  state = initialState,
  action: ColorsActionTypes
): ColorsState => {
  switch (action.type) {
    case COLORS_FETCH_START:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case COLORS_FETCH_STOP:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case COLORS_FETCH_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case COLORS_FETCH_FILL:
      return {
        ...state,
        error: false,
        loading: false,
        colors: action.payload,
      };
    case COLORS_FETCH_ASYNC:
      return state;
    default:
      return state;
  }
};
