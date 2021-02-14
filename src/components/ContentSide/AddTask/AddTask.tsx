import React, { FC, ReactElement } from 'react'

import { ReactComponent as AddSvg } from '../../../assets/svg/add.svg'
import { AddTaskForm } from './AddTaskForm/AddTaskForm'

import styles from './index.module.scss'

export const AddTask: FC = (): ReactElement => {

    const [showModalAddTaskForm, setShowModalAddTaskForm] = React.useState(false)

    return (
        <>
            {!showModalAddTaskForm ? (
                <div
                    onClick={() => setShowModalAddTaskForm(true)}
                    className={styles.AddTaskHint}>
                    <AddSvg className={styles.AddSvg} />
                    <button

                        className={styles.AddTaskHintBtn} >
                        Новая задача
                    </button>
                </div>
            )
                : <AddTaskForm setShowModalAddTaskForm={setShowModalAddTaskForm} />
            }
        </>
    )
}