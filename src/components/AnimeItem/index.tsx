import EmptyAnimeCover from 'components/icons/EmptyAnimeCover';
import React from 'react';
import styles from './index.module.sass';

interface IAnimeItem {
  image: string | undefined;
  title: string;
}

export default function AnimeItem({ image, title }: IAnimeItem) {
  return (
    <div>
      {image ? (
        <img className={styles.image} src={image} />
      ) : (
        <EmptyAnimeCover />
      )}
      <p className={styles.title}>{title}</p>
    </div>
  );
}
