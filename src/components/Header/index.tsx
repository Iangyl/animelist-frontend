import React, { useReducer, useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import styles from './index.module.sass';
import ModalWindow from 'components/ModalWindow';
import AddAnimeForm from 'components/AddAnimeForm';
import { IAddNewAnimeValidation } from 'components/AddAnimeForm/index.types';
import { reducer, initialState, init } from 'store/AddAnimeState';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IAddNewAnimeValidation>();
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
          register={register}
          handleSubmit={handleSubmit}
          watch={watch}
          errors={errors}
          state={state}
          dispatch={dispatch}
          setIsSubmitted={() => onClose()}
        />
      </ModalWindow>
    </header>
  );
}
