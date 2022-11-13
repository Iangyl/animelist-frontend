import React from 'react';
import styles from './index.module.sass';

interface IAnimeItem {
  image: string;
  title: string;
}

export default function AnimeItem({ image, title }: IAnimeItem) {
  return (
    <div>
      <img className={styles.image} src={image} />
      <p className={styles.title}>{title}</p>
    </div>
  );
}
