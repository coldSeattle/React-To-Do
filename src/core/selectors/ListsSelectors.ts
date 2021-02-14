import { useSelector } from "react-redux";
import { ListsState } from "../reducers/ListsReducer";
import { AppState } from "../reducers/rootReducer";

export const useList = (): ListsState => {
  const { error, loading, lists } = useSelector<AppState, ListsState>(
    (state) => state.lists
  );

  return {
    error,
    loading,
    lists,
  };
};
