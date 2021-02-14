import { FC, useContext } from 'react'
import _ from 'lodash'
import { useHistory } from 'react-router-dom'
import { ActiveItemContext } from '../../../../App'
import { ReactComponent as RemoveSvg } from '../../../../assets/svg/remove.svg'
import { useList } from '../../../../core/selectors/ListsSelectors'
import { BadgeI } from '../../../Badge/BadgeI'
import styles from './index.module.scss'

export type PropsTypes = {
    handleRemoveListItem: (val: number) => void
}

export const ListItem: FC<PropsTypes> = ({ handleRemoveListItem }: PropsTypes) => {
    const { loading, lists } = useList()
    const { activeItem, setActiveItem } = useContext(ActiveItemContext)
    const history = useHistory()
    return (
        <>
            {!loading && Array.isArray(lists) && lists.length ? (
                lists.map((item) => (
                    <li
                        key={item.id}
                        className={`
                        ${styles.listItem} 
                        ${Number(activeItem) == item.id ? styles.activeItem : ""
                            }`}
                        onClick={() => {
                            history.push(`/?id=${item.id}`);
                            setActiveItem(_.toString(item.id))
                        }}
                    >
                        <BadgeI colorName={item.color.name} />
                        <p className={styles.listItemText}>{item.name}</p>
                        <RemoveSvg
                            onClick={() => handleRemoveListItem(item.id)}
                            className={styles.listItemRemoveSvg}
                        />
                    </li>
                ))
            ) : (
                    <li className={styles.IfArrrayIsEmpltyAlert}>Нет папок..</li>
                )}
        </>
    )
}