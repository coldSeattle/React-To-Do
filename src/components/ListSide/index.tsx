import React, { FC, MutableRefObject, ReactElement, useContext } from "react";
import _ from 'lodash'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ActiveItemContext } from "../../App";
import { colorsFetchAsyncAction } from "../../core/actions/ColorsActions";
import {
  ListsAddAsyncAction,
  listsFetchAsyncAction,
  ListsRemoveItemAsycnAction
} from "../../core/actions/ListsActions";
import { useList } from "../../core/selectors/ListsSelectors";
import { SelecedColorType } from "../../core/types/listsTypes";
import { AddListHintBtn } from "./AddListHintBtn/AddListHintBtn";
import { AddListModal } from "./AddListModal/AddListModal";
import styles from "./index.module.scss";
import { List } from "./List/List";



export const ListSide: FC = (): ReactElement => {
  const { lists } = useList();
  const history = useHistory();
  const dispatch = useDispatch();
  const { setActiveItem } = useContext(ActiveItemContext)

  const [colorPackage, setcolor] = React.useState<{
    id: number;
    colorId: number;
    name: string;
    hex: string;
  }>({ hex: "", colorId: 0, name: "", id: 0 });

  const [showAddListModal, setshowAddListModal] = React.useState(false);
  const [inputVal, setInputVal] = React.useState("");

  const refUL = React.useRef() as MutableRefObject<HTMLUListElement>

  React.useEffect(() => {
    dispatch(listsFetchAsyncAction());
    dispatch(colorsFetchAsyncAction());
  }, [dispatch]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => history.push('/'), [])

  React.useEffect(() => {
    const list = _.chain(lists)
      .compact()
      .last()
      .value()

    if (_.isEmpty(list)) return;

    history.push(`/?id=${list.id}`);
    setActiveItem(_.toString(list.id))

    lists.length > 8 && handleScrollToEnd()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lists.length])

  const handleShowAddListModal = () => setshowAddListModal(true);

  const handleRemoveListItem = (id: number) => {
    dispatch(ListsRemoveItemAsycnAction({ id }));
    history.push('/')
    setActiveItem('/')
  };


  const handleScrollToEnd = () => {
    refUL.current && refUL.current.scrollTo({
      top: 9999,
      behavior: 'smooth'
    })
  }

  const handleAddNewList = () => {
    if (!inputVal || !colorPackage.colorId) return;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise((resolve, _) => {

      resolve(
        dispatch(
          ListsAddAsyncAction(
            {
              name: inputVal,
              colorId: colorPackage.colorId,
              id: colorPackage.id,
              color: {
                hex: colorPackage.hex,
                name: colorPackage.name,
                id: colorPackage.id,
              },
            }
          )
        ))
    }).then(() => {

      setcolor(prev => ({ ...prev, id: 0 }))
      setInputVal("");
      setshowAddListModal(false);

    }).catch(() => alert("не удалось добавить папку!"))

  };

  const handleSelectColor = ({ id, colorId, name, hex, }: SelecedColorType) => setcolor({ id, colorId, name, hex });

  return (
    <div className={styles.ListSide}>
      <div className={styles.ListsContainer}>

        <List
          refUL={refUL}
          handleRemoveListItem={handleRemoveListItem}
        />

        {!showAddListModal ?
          (
            <AddListHintBtn
              handleShowAddListModal={handleShowAddListModal}
            />
          )
          :
          (
            <AddListModal
              inputVal={inputVal}
              colorPackage={colorPackage}
              setInputVal={setInputVal}
              handleAddNewList={handleAddNewList}
              handleSelectColor={handleSelectColor}
              setshowAddListModal={setshowAddListModal}
            />
          )}
      </div>
    </div>
  );
};
