import React, { FC, ReactElement, useContext, useRef } from "react";
import _ from 'lodash'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ActiveItemContext } from "../../../App";

import { ReactComponent as EditSvg } from "../../../assets/svg/edit.svg";
import { updateListTiteAsyncAcion } from "../../../core/actions/ListsActions";
import { useList } from "../../../core/selectors/ListsSelectors";
import { Input } from "../../elements/Input/Input";
import { AddTask } from "../AddTask/AddTask";
import styles from "./index.module.scss";
import { Task } from "./Task/Task";
import { ListType, TaskType } from "../../../core/types/listsTypes";

export type InputOnChangeEvent = React.ChangeEvent<HTMLInputElement>

export const ListContent: FC = (): ReactElement => {

  const { lists } = useList();
  const history = useHistory()
  const dispatch = useDispatch();
  const { activeItem, setActiveItem } = useContext(ActiveItemContext)

  const [tasks, setTasks] = React.useState<any>()

  const [inputVal, setInputVal] = React.useState('');
  const InputRef = useRef({ readOnly: true }) as React.MutableRefObject<HTMLInputElement>;


  const handleEditableListTitle = () => {
    InputRef.current.setSelectionRange(
      inputVal.length,
      inputVal.length
    )
    InputRef.current.readOnly = false;
    InputRef.current.focus()
  };

  React.useEffect(() => {
    if (!_.isEmpty(InputRef.current)) {
      InputRef.current.readOnly = true;
    }
  }, [])

  React.useEffect(() => {
    const filteredlisttById = (item: ListType) => item.id == Number(activeItem)

    const listName = _.chain(lists)
      .filter(filteredlisttById)
      .map(item => item.name)
      .value()[0]?.trim() || ''

    activeItem ?
      setInputVal(listName)
      : setActiveItem("")

    const tasks = activeItem && lists
      && _.chain(lists)
        .filter(filteredlisttById)
        .value()[0]?.tasks

    setTasks(tasks)

  }, [activeItem, lists, lists.length, setActiveItem])

  React.useEffect(() => {

    const getId = () => {
      const id = _.toString(history.location.search).match(/(\?id=)\d{1,}$/)
      let test;
      if (!_.isNull(id)) {
        test = id[0].match(/\d{1,}/gi)
      }
      return _.toString(test) || ''
    }

    history.location.search && setActiveItem(getId())

  }, [history.location.search, activeItem, setActiveItem]);

  const handleOnChange = (event: InputOnChangeEvent) =>
    setInputVal(event.target.value);

  const handleSetTitle = () => {
    InputRef.current.readOnly = true
    dispatch(
      updateListTiteAsyncAcion({ listId: activeItem, title: InputRef.current.value })
    );
  };

  const handleonKeyDown = (event: React.KeyboardEvent) => event.key == "Enter" && handleSetTitle()

  return (
    <>
      {
        activeItem && lists.length ?
          <div className={styles.Content}>
            <div className={styles.listTitleContainer}>
              <Input
                ref={InputRef}
                value={inputVal}
                handleOnChange={handleOnChange}
                handleOnBlur={handleSetTitle}
                handleonKeyDown={handleonKeyDown}
                className={styles.listTitle}
              />
              <EditSvg
                onClick={() => handleEditableListTitle()}
                className={styles.EditSvg}
              />
            </div>
            <div className={styles.tasksContainer}>

              {
                activeItem && tasks
                  ? tasks.map((task: TaskType) => <Task key={task.id} task={task} />)
                  : <p className={styles.IfArrrayIsEmpltyAlert}>There is not tasks yet..</p>

              }

            </div>

            <AddTask />

          </div>
          : <div className={styles.Content}>
            <p className={styles.IfArrrayIsEmpltyAlert}>Select a Folder or create one..</p>
          </div>

      }
    </>
  );
};
