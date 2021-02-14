import { useList } from "./ListsSelectors";
import _ from "lodash";

export const useTasks = () => {
  const { lists } = useList();
  const tasks = _.chain(lists).map((item) => item.tasks);
  return {
    tasks,
  };
};
