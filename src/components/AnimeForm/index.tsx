import React, { useEffect } from 'react';
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
import IAnime from './index.types';
import { useForm } from 'react-hook-form';
import { apiPaths } from 'utils/constants';
import MultipleSelect from 'components/MultipleSelect';
import { IAnimeValidation } from 'components/AnimeForm/index.types';

import styles from './index.module.sass';
import useFileUpload from 'hooks/useFileUpload';
import TextSpace from 'components/TextSpace';

export default function AnimeForm(props: IAnime) {
  const { state, dispatch, setIsSubmitted } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAnimeValidation>();
  const { fileIds, uploadFile } = useFileUpload();

  const updateAnime = async () => {
    const TEMP_ID = 1;
    try {
      const response = await fetch(`${apiPaths.updateAnime}/${TEMP_ID}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
      });
      const result = await response.json();

      if (!result.success) throw Error(result.message);
      dispatch({ type: 'init' });
    } catch (e: unknown) {
      console.error(e);
    }
  };

  const postAnime = async () => {
    try {
      const response = await fetch(apiPaths.addAnime, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
      });
      const result = await response.json();

      if (!result.success) throw Error(result.message);
      dispatch({ type: 'init' });
    } catch (e: unknown) {
      console.error(e);
    }
  };

  const handleFormSubmit = () => {
    setIsSubmitted();

    if (props.mode === 'add-anime') postAnime();
    else updateAnime();
  };

  const onFileUploadError = (error: string) => {
    console.error(error);
  };

  useEffect(() => {
    if (fileIds) {
      dispatch({ type: 'img', payload: fileIds });
    }
  }, [fileIds]);

  return (
    <Container className={styles.addAnimeForm}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Box className={styles.row}>
          <FileUpload onError={onFileUploadError} uploadFile={uploadFile} />
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
            value={state.genre}
            data={genre}
            onChange={(v) => dispatch({ type: 'genre', payload: v })}
          />
        </FormControl>
        <FormControl className={styles.row} fullWidth>
          <MultipleSelect
            id="subgenre-multiple-select"
            value={state.subgenre ?? []}
            data={subgenre}
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
          <InputLabel
            id="description-label"
            sx={{ color: 'rgba(0,0,0,0.85)', fontSize: '14px' }}
          >
            Description
          </InputLabel>
          <TextSpace
            placeholder="Maximum 20 rows"
            value={state.description ?? ''}
            {...register('description')}
            onChange={(v) =>
              dispatch({ type: 'description', payload: v.target.value })
            }
          />
        </Box>
        <Box
          className={styles.row}
          sx={{ display: 'flex', gap: '25px', justifyContent: 'flex-end' }}
        >
          <Button variant="outlined" type="button" onClick={setIsSubmitted}>
            Close
          </Button>
          <Button variant="contained" type="submit">
            Ok
          </Button>
        </Box>
      </form>
    </Container>
  );
}
