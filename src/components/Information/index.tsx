import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import IAnime from 'components/interfaces';

import styles from './index.module.sass';
import { convertStringArrayIntoRow } from 'utils/helpers';

const Label = ({ text }: { text: string }) => {
  return <span className={styles.label}>{text}</span>;
};

const InfoChunk = ({ value }: { value: string | number }) => {
  return <span className={styles.value}>{value.toString()}</span>;
};

export default function Information(anime: IAnime) {
  const {
    img,
    type,
    status,
    date,
    genre,
    subgenre,
    age_rating,
    duration,
    description,
    episodesAmount,
    announcedEpisodesAmount,
  } = anime;
  return (
    <Container sx={{ display: 'flex', gap: '40px' }}>
      <Box>
        <img
          src={
            !(img && img?.length === 0)
              ? 'https://wallpaperaccess.com/full/2099328.jpg'
              : img
          }
          style={{ maxWidth: '300px', width: '100%' }}
          alt="anime cover"
        />
      </Box>
      <Box className={styles.infoRow}>
        <Typography variant="h4" sx={{ marginBottom: '18px' }}>
          Information
        </Typography>
        <Box className={styles.infoRow}>
          <Label text="Anime Type:" /> <InfoChunk value={type} />
        </Box>
        <Box className={styles.infoRow}>
          <Label text="Episodes:" /> <InfoChunk value={episodesAmount} />
        </Box>
        {true ?? (
          <Box className={styles.infoRow}>
            <Label text="Released:" /> <InfoChunk value={`${date}`} />
          </Box>
        )}
        {true ?? (
          <Box className={styles.infoRow}>
            <Label text="Next episode:" /> <InfoChunk value={`${new Date()}`} />
          </Box>
        )}
        {true ?? (
          <Box className={styles.infoRow}>
            <Label text="Announced:" />{' '}
            <InfoChunk value={`${announcedEpisodesAmount}`} />
          </Box>
        )}
        {duration && (
          <Box className={styles.infoRow}>
            <Label text="Episode duration:" /> <InfoChunk value={duration} />
          </Box>
        )}
        <Box className={styles.infoRow}>
          <Label text="Status:" /> <InfoChunk value={status} />
        </Box>
        <Box className={styles.infoRow}>
          <Label text="Genres:" />{' '}
          <InfoChunk
            value={convertStringArrayIntoRow(
              subgenre ? [...genre, ...subgenre] : genre
            )}
          />
        </Box>
        <Box className={styles.infoRow}>
          <Label text="Age rate:" /> <InfoChunk value={age_rating} />
        </Box>
        <Typography
          variant="h4"
          sx={{ marginBottom: '18px', marginTop: '32px' }}
        >
          Description
        </Typography>
        <Box>
          <InfoChunk value={description ?? 'No description provided :('} />
        </Box>
      </Box>
    </Container>
  );
}
