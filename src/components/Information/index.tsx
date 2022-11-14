import React from 'react';
import IAnime from 'components/interfaces';

export default function Information(anime: IAnime) {
  const {
    title,
    img,
    type,
    status,
    date,
    genre,
    subgenre,
    age_rating,
    duration,
    episodesAmount,
    announcedEpisodesAmount,
  } = anime;
  return (
    <article>
      <h2>{title}</h2>
      <div>
        <img src={img} alt="anime cover" />
      </div>
      <div>
        <h2>Інформація</h2>
        <div>
          <span>Тип:</span> {type}
        </div>
        <div>
          <span>Епізоди:</span> {episodesAmount}
        </div>
        {true ?? (
          <div>
            <span>Вийшло:</span> {`${date}`}
          </div>
        )}
        {true ?? <div>Наступний епізод: {`${new Date()}`}</div>}
        {true ?? <div>Анонсовано: {`${announcedEpisodesAmount}`}</div>}
        <div>Тривалість епізоду: {duration}</div>
        <div>Статус: {status}</div>
        <div>Жанри: {genre + ' ' + subgenre}</div>
        <div>Віковий рейтинг: {age_rating}</div>
      </div>
    </article>
  );
}
