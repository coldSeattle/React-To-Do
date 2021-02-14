import React, { FC, MutableRefObject, ReactElement } from "react";
import { ReactComponent as AllTasksSvg } from '../../../assets/svg/alltasks.svg';
import styles from "./index.module.scss";
import { ListItem } from "./LIstItem/ListItem";
export type ListFCType = {
  handleRemoveListItem: (id: number) => void,
  refUL: MutableRefObject<HTMLUListElement>
};

export const List: FC<ListFCType> =
  ({
    handleRemoveListItem,
    refUL
  }: ListFCType): ReactElement => {
    return <>
      <div className={styles.AllTasks}>
        <AllTasksSvg className={styles.AllTasksIcon} />
        <p className={styles.AllTasksTitle}>All Tasks</p>
      </div>
      <ul ref={refUL} className={styles.lists}>
        <ListItem
          handleRemoveListItem={handleRemoveListItem}
        />
      </ul>
    </>
  }