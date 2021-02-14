import { FC } from "react"

import { ReactComponent as AddTaskSvg } from "../../../assets/svg/add.svg";

import styles from './index.module.scss'

export type PropsTypes = {
    handleShowAddListModal: () => void
}

export const AddListHintBtn: FC<PropsTypes> = ({ handleShowAddListModal }: PropsTypes) => {
    return (
        <button
            onClick={() => handleShowAddListModal()}
            className={styles.addListHint}
        >
            <AddTaskSvg
                className={styles.addListHintIcon}
            />
            <p className={styles.addListHintText}>Добавить папку</p>
        </button>
    )
}