import React, { useEffect, useState } from 'react';
import styles from './index.module.sass';
import { Link } from 'react-router-dom';
import AnimeItem from 'components/AnimeItem';

import { apiPaths } from 'utils/constants';
import { IAnimeValidation } from 'components/AnimeForm/index.types';

export default function HomeLayout() {
  const [animes, setAnimes] = useState<IAnimeValidation[]>();

  console.log(animes);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(apiPaths.getAnimes, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        const result = await response.json();

        if (!result.success) throw Error('Internal error!');

        setAnimes(result.data);
      } catch (e: unknown) {
        console.error(e);
      }
    };

    getData();
  }, []);
  return (
    <section className={styles.layout}>
      {animes &&
        animes.map((item) => (
          <Link key={item.img} to={`/anime/${item.title}`}>
            <AnimeItem image={item.img} title={item.title} />
          </Link>
        ))}
    </section>
  );
}
