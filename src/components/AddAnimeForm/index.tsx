import React, { useMemo, useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
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
import IAddNewAnime from './index.types';
import MultipleSelect from 'components/MultipleSelect';

import styles from './index.module.sass';

export default function AddAnimeForm(props: IAddNewAnime) {
  const { state, dispatch, register, handleSubmit, setIsSubmitted, errors } =
    props;

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

  const handleFormSubmit = () => {
    setIsSubmitted();
  };

  return (
    <Container className={styles.addAnimeForm}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Box className={styles.row}>
          <FileUpload />
        </Box>
        <Box className={styles.row}>
          <TextField
            id="title-field"
            label="Title"
            value={state.title}
            {...register('title', { required: true })}
            onChange={(v) =>
              dispatch({ type: 'title', payload: v.target.value })
            }
            fullWidth
          />
          <Typography sx={{ color: 'red', fontSize: '0.85rem' }}>
            {errors.title && 'Title is required!'}
          </Typography>
        </Box>
        <FormControl className={styles.row} fullWidth>
          <InputLabel id="anime-type-select-label">Anime Type</InputLabel>
          <Select
            labelId="anime-type-select-label"
            id="anime-type-simple-select"
            value={state.type}
            label="Anime Type"
            {...register('type', { required: true })}
            onChange={(v) =>
              dispatch({ type: 'type', payload: v.target.value })
            }
          >
            {animeTypes.map((type: string) => (
              <MenuItem key={type} value={type}>
                {firstLetterToUpperCase(type)}
              </MenuItem>
            ))}
          </Select>
          <Typography sx={{ color: 'red', fontSize: '0.85rem' }}>
            {errors.type && 'Type is required!'}
          </Typography>
        </FormControl>
        <FormControl className={styles.row} fullWidth>
          <InputLabel id="status-select-label">Status</InputLabel>
          <Select
            labelId="status-select-label"
            id="status-simple-select"
            value={state.status}
            label="Status"
            {...register('status', { required: true })}
            onChange={(v) =>
              dispatch({ type: 'status', payload: v.target.value })
            }
          >
            {animeStatus.map((status: string) => (
              <MenuItem key={status} value={status}>
                {firstLetterToUpperCase(status)}
              </MenuItem>
            ))}
          </Select>
          <Typography sx={{ color: 'red', fontSize: '0.85rem' }}>
            {errors.status && 'Status is required!'}
          </Typography>
        </FormControl>
        <FormControl className={styles.row}>
          <DatePicker
            label="Date of release"
            inputFormat="DD/MM/YYYY"
            value={state.date}
            {...register('date', { required: true })}
            onChange={(v) => dispatch({ type: 'date', payload: v?.toString() })}
            renderInput={(params) => <TextField {...params} />}
          />
          <Typography sx={{ color: 'red', fontSize: '0.85rem' }}>
            {errors.date && 'Date is required!'}
          </Typography>
        </FormControl>
        <FormControl className={styles.row} fullWidth>
          <MultipleSelect
            id="genre-multiple-select"
            label="Genre"
            data={remasteredGenre}
            onChange={(v) => dispatch({ type: 'genre', payload: v })}
          />
        </FormControl>
        <FormControl className={styles.row} fullWidth>
          <MultipleSelect
            id="subgenre-multiple-select"
            data={remasteredSubgenre}
            label="Subgenre"
            onChange={(v) => dispatch({ type: 'subgenre', payload: v })}
          />
        </FormControl>
        <FormControl className={styles.row} fullWidth>
          <InputLabel id="age-select-label">Age</InputLabel>
          <Select
            labelId="age-select-label"
            id="age-select"
            value={state.age_rating}
            label="Age"
            {...register('age_rating', { required: true })}
            onChange={(v) =>
              dispatch({ type: 'age_rating', payload: v.target.value })
            }
          >
            {ageRating.map((ageRate: string) => (
              <MenuItem key={ageRate} value={ageRate}>
                {firstLetterToUpperCase(ageRate)}
              </MenuItem>
            ))}
          </Select>
          <Typography sx={{ color: 'red', fontSize: '0.85rem' }}>
            {errors.age_rating && 'Age rating is required!'}
          </Typography>
        </FormControl>
        <Box className={styles.row}>
          <TextField
            type="number"
            label="Duration (min)"
            value={state.duration}
            {...register('duration')}
            onChange={(v) =>
              dispatch({ type: 'duration', payload: v.target.value })
            }
            fullWidth
          />
        </Box>
        <Box className={styles.row}>
          <TextField
            type="number"
            label="Episodes Amount"
            value={state.episodesAmount}
            {...register('episodesAmount')}
            onChange={(v) =>
              dispatch({ type: 'episodesAmount', payload: v.target.value })
            }
            fullWidth
          />
        </Box>
        <Box className={styles.row}>
          <TextField
            type="text"
            label="Description"
            value={state.description}
            {...register('description')}
            onChange={(v) =>
              dispatch({ type: 'description', payload: v.target.value })
            }
            fullWidth
          />
        </Box>
        <Box
          className={styles.row}
          sx={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <Button variant="contained" type="submit">
            Ok
          </Button>
        </Box>
      </form>
    </Container>
  );
}
