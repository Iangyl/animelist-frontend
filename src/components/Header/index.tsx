import React, { useReducer, useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ModalWindow from 'components/ModalWindow';
import AddAnimeForm from 'components/AddAnimeForm';
import { reducer, initialState, init } from 'store/AddAnimeState';

import styles from './index.module.sass';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const onClose = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to="/">
          <p className={styles.logo}>AnimeList</p>
        </Link>
        <Button onClick={() => setIsOpen(true)} variant="contained">
          Add anime
        </Button>
      </div>
      <ModalWindow open={isOpen} onClose={onClose}>
        <AddAnimeForm
          state={state}
          dispatch={dispatch}
          setIsSubmitted={() => onClose()}
        />
      </ModalWindow>
    </header>
  );
}
