import { combineReducers, Reducer } from "redux";
import { ListsReducer as lists, ListsState } from "./ListsReducer";
import { ColorsReducer as colors, ColorsState } from "./ColorsReducer";

export interface AppState {
  lists: ListsState;
  colors: ColorsState;
}

export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  lists,
  colors,
});

// export type AppState = ReturnType<typeof rootReducer>;
