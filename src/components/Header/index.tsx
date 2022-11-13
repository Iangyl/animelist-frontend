import React from 'react';
import styles from './index.module.sass';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to="/">
          <p className={styles.logo}>AnimeList</p>
        </Link>
        <Button variant="contained">Add anime</Button>
      </div>
    </header>
  );
}
