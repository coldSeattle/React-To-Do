import { useSelector } from "react-redux";
import { ColorsState } from "../reducers/ColorsReducer";
import { AppState } from "../reducers/rootReducer";

export const useColors = (): ColorsState => {
    const { colors,loading,error } = useSelector<AppState, ColorsState>(state => state.colors);

    return {
        colors,
        loading,
        error
    }
}