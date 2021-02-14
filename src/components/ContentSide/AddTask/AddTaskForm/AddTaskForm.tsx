import React, { FC, ReactElement, useContext } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ActiveItemContext } from "../../../../App";
import { AddNewTaskAsyncAction } from "../../../../core/actions/TasksActions";

import styles from './index.module.scss'

type AddTaskFormPropsTypes = {
    setShowModalAddTaskForm: (val: boolean) => void
}

export const AddTaskForm: FC<AddTaskFormPropsTypes> =
    ({ setShowModalAddTaskForm }: AddTaskFormPropsTypes): ReactElement => {
        const history = useHistory()
        const dispatch = useDispatch()
        const { activeItem } = useContext(ActiveItemContext)
        const [addNewTaskForm, setAddNewTaskForm] = React.useState({
            text: '',
            listId: 0,
            completed: false
        })

        const { text, listId, completed } = addNewTaskForm

        React.useEffect(() => {
            setAddNewTaskForm(prev => ({ ...prev, listId: Number(activeItem) }))
        }, [history.location.search, activeItem]);

        const handleAddNewTask = () => {
            if (!text) return alert('введите название задачи!')
            dispatch(
                AddNewTaskAsyncAction(
                    {
                        text: text,
                        listId: listId,
                        completed: completed
                    }
                )
            )
            setShowModalAddTaskForm(false)
        }

        return (
            <div className={styles.AddTaskForm}>
                <input
                    placeholder={'Текст задачи'}
                    onChange={(event) => setAddNewTaskForm(prev => ({ ...prev, text: event.target.value }))}
                    autoFocus
                    className={styles.input} />
                <div className={styles.btns}>
                    <button
                        onClick={() => handleAddNewTask()}
                        className={styles.addTaskBtn}>Добавить задачу</button>
                    <button
                        onClick={() => setShowModalAddTaskForm(false)}
                        className={styles.CancelTaskAddingBtn}
                    >Отмена</button>
                </div>
            </div>
        )
    }