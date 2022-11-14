import React from 'react';
import styles from './index.module.sass';
import { Link } from 'react-router-dom';
import AnimeItem from 'components/AnimeItem';

import data from './mock';

export default function HomeLayout() {
  return (
    <section className={styles.layout}>
      {data &&
        data.map((item) => (
          <Link key={item.img} to={`/anime/${item.title}`}>
            <AnimeItem image={item.img} title={item.title} />
          </Link>
        ))}
    </section>
  );
}
