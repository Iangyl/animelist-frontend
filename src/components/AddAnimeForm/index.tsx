import React, { useMemo, useState } from 'react';
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import FileUpload from 'components/FileUpload';
import {
  genre,
  subgenre,
  animeStatus,
  animeTypes,
  ageRating,
  firstLetterToUpperCase,
} from 'utils/helpers';

import styles from './index.module.sass';
import MultipleSelect from 'components/MultipleSelect';

export default function AddAnimeForm() {
  const [date, setDate] = useState<Date | string>(new Date());

  const remasteredGenre = useMemo(() => {
    return genre.map((item: string) => {
      return {
        title: item,
      };
    });
  }, []);

  const remasteredSubgenre = useMemo(() => {
    return subgenre.map((item: string) => {
      return {
        title: item,
      };
    });
  }, []);

  return (
    <Container className={styles.addAnimeForm}>
      <Box className={styles.row}>
        <FileUpload />
      </Box>
      <Box className={styles.row}>
        <TextField id="title-field" label="Title" fullWidth />
      </Box>
      <FormControl className={styles.row} fullWidth>
        <InputLabel id="anime-type-select-label">Anime Type</InputLabel>
        <Select
          labelId="anime-type-select-label"
          id="anime-type-simple-select"
          value={1}
          label="Anime Type"
          onChange={() => {
            ('');
          }}
        >
          {animeTypes.map((type: string) => (
            <MenuItem key={type} value={type}>
              {firstLetterToUpperCase(type)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={styles.row} fullWidth>
        <InputLabel id="status-select-label">Status</InputLabel>
        <Select
          labelId="status-select-label"
          id="status-simple-select"
          value={1}
          label="Status"
          onChange={() => {
            ('');
          }}
        >
          {animeStatus.map((status: string) => (
            <MenuItem key={status} value={status}>
              {firstLetterToUpperCase(status)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={styles.row}>
        <DatePicker
          label="Date of release"
          inputFormat="DD/MM/YYYY"
          value={date}
          onChange={() => {
            ('');
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </FormControl>
      <FormControl className={styles.row} fullWidth>
        <MultipleSelect
          id="genre-multiple-select"
          data={remasteredGenre}
          label="Genre"
        />
      </FormControl>
      <FormControl className={styles.row} fullWidth>
        <MultipleSelect
          id="subgenre-multiple-select"
          data={remasteredSubgenre}
          label="Subgenre"
        />
      </FormControl>
      <FormControl className={styles.row} fullWidth>
        <InputLabel id="age-select-label">Age</InputLabel>
        <Select
          labelId="age-select-label"
          id="age-select"
          value={1}
          label="Age"
          onChange={() => {
            ('');
          }}
        >
          {ageRating.map((ageRate: string) => (
            <MenuItem key={ageRate} value={ageRate}>
              {firstLetterToUpperCase(ageRate)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box className={styles.row}>
        <TextField type="number" label="Duration (min)" fullWidth />
      </Box>
      <Box className={styles.row}>
        <TextField type="number" label="Episodes Amount" fullWidth />
      </Box>
      <Box className={styles.row}>
        <TextField type="text" label="Description" fullWidth />
      </Box>
    </Container>
  );
}
