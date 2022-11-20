import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import styles from './index.module.sass';
import ModalWindow from 'components/ModalWindow';
import AddAnimeForm from 'components/AddAnimeForm';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onClose = () => {
    ('');
  };
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
        <AddAnimeForm />
      </ModalWindow>
    </header>
  );
}
