import React, { FC, ReactElement, useRef } from "react"
import { useDispatch } from "react-redux"
import { editTaskAsyncAction, RemoveTaskAsyncAction, SetCompletedPropAsyncAction } from "../../../../core/actions/TasksActions"
import { TaskType } from "../../../../core/types/listsTypes"

import { ReactComponent as CloseSvg } from "../../../../assets/svg/close.svg";
import { ReactComponent as DoneSvg } from "../../../../assets/svg/done.svg";

import styles from './index.module.scss'
import { Input } from "../../../elements/Input/Input";

export type PropsTypes = {
    task: TaskType
}

export const Task: FC<PropsTypes> = ({ task }: PropsTypes): ReactElement => {

    const dispatch = useDispatch()
    const taskRef = useRef({ readOnly: true }) as React.MutableRefObject<HTMLInputElement>;

    React.useEffect(() => {
        if (taskRef.current) taskRef.current.readOnly = true
    }, []);

    const handleOnClick = () => {
        if (!task.completed) taskRef.current.readOnly = false
    }

    const handleOnBlurEditTask = () => {
        taskRef.current.readOnly = true;
        dispatch(
            editTaskAsyncAction(
                {
                    id: task.id,
                    listId: task.listId,
                    text: taskRef.current.value,
                    completed: task.completed
                }
            )
        )
    }

    const handleSetCompletedProp = () => {
        dispatch(
            SetCompletedPropAsyncAction(
                {
                    id: task.id,
                    listId: task.listId,
                    completed: !task.completed
                }
            )
        )
    }

    const handleRemoveTask = () => {
        dispatch(
            RemoveTaskAsyncAction(
                {
                    id: task.id,
                    listId: task.listId,
                    completed: task.completed,
                    text: task.text
                }
            )
        )
    }

    const handleonKeyDown = (event: React.KeyboardEvent) => event.key == "Enter" && handleOnBlurEditTask()

    return (
        <div key={task.id} className={styles.taskItem}>
            <label className={`
                  ${styles.doneBlock}
                  ${task.completed && styles.checked}
                  `}
                onClick={() => handleSetCompletedProp()}
            >
                <DoneSvg
                    className={`${styles.done} `} />
            </label>
            <Input
                ref={taskRef}
                handleOnClick={handleOnClick}
                handleOnBlur={handleOnBlurEditTask}
                handleonKeyDown={handleonKeyDown}
                className={styles.task}
                placeholder={'task name'}
                defaultValue={task.text}
            />
            <CloseSvg
                className={styles.closeSvg}
                onClick={() => handleRemoveTask()}
            />
        </div>
    )
}
