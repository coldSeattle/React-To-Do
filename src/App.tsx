import React from 'react';
import { DarkToggle } from './components/DarkToggle/DarkToggle';
import { ListSide } from './components/ListSide';
import styles from './App.module.scss'
import { withRouter } from 'react-router-dom';
import { ContentSide } from './components/ContentSide';

interface IActiveITem {
  activeItem: string,
  setActiveItem: (val: string) => void
}

export const ActiveItemContext = React.createContext<IActiveITem>({} as IActiveITem)
ActiveItemContext.displayName = 'ActiveItemContext'

function App() {

  const [activeItem, setActiveItem] = React.useState('/')

  return (
    <div className={styles.App}>
      <DarkToggle />
      <div className={styles.content}>
        <ActiveItemContext.Provider value={{
          activeItem: activeItem,
          setActiveItem: setActiveItem
        }}>
          <ListSide />
          <ContentSide />
        </ActiveItemContext.Provider>
      </div>
    </div>
  );
}

export default withRouter(App);
