import { FC } from "react"

import { ReactComponent as CloseSvg } from "../../../assets/svg/close.svg";

import { BadgeI } from "../../Badge/BadgeI"

import styles from './index.module.scss'
import { useColors } from "../../../core/selectors/ColorsSelectors";
import { SelecedColorType } from "../../../core/types/listsTypes";

export type PropsTypes = {
    setshowAddListModal: (val: boolean) => void,
    inputVal: string,
    setInputVal: (val: string) => void,
    handleSelectColor: ({ id, colorId, name, hex }: SelecedColorType) => void,
    colorPackage: SelecedColorType,
    handleAddNewList: () => void
}

export const AddListModal: FC<PropsTypes> = ({
    setshowAddListModal,
    inputVal,
    setInputVal,
    handleSelectColor,
    handleAddNewList,
    colorPackage
}: PropsTypes) => {

    const { colors } = useColors()

    return (
        <div className={styles.modal}>
            <CloseSvg
                onClick={() => setshowAddListModal(false)}
                className={styles.closeSvg}
            />
            <input
                value={inputVal}
                onChange={(event) => setInputVal(event.target.value)}
                placeholder={"Название папки"}
                className={styles.input}
            />
            <div className={styles.badgesContainer}>
                {colors.map((color) => (
                    <BadgeI
                        onClick={() =>
                            handleSelectColor({
                                colorId: color.id,
                                name: color.name,
                                hex: color.hex,
                                id: color.id,
                            })
                        }
                        classNames={`
                        ${styles.badge}
                        ${color.id === colorPackage.id && styles.selectedBadge
                            }`}
                        colorName={color.name}
                        key={color.id}
                    />
                ))}
            </div>
            <button onClick={() => handleAddNewList()} className={styles.btn}>
                Добавить
      </button>
        </div>
    )
}