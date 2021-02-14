import { FC, ReactElement } from "react"
import styles from './index.module.scss'
export type BagdeType = {
    colorName: string,
    classNames?: string,
    onClick?: () => void,
    // name: string,
    // hex:string
}

export const BadgeI: FC<BagdeType> = ({colorName, classNames, onClick}: BagdeType): ReactElement => {
    return <i onClick={onClick} className={`${styles.badge}   ${styles[colorName]} ${classNames}`}></i>
}