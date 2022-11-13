import React from 'react';
import styles from './index.module.sass';
import AnimeItem from 'components/AnimeItem';

import data from './mock';

export default function HomeLayout() {
  return (
    <section className={styles.layout}>
      {data &&
        data.map((item) => (
          <AnimeItem key={item.img} image={item.img} title={item.title} />
        ))}
    </section>
  );
}
