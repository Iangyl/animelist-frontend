import React, { useReducer, useState } from 'react';
import PageWrapper from './PageWrapper';
import { apiPaths } from 'utils/constants';
import Information from 'components/Information';
import ModalWindow from 'components/ModalWindow';
import AnimeForm from 'components/AnimeForm';
import { Button, Container, Typography } from '@mui/material';
import { reducer, initialState, init } from 'store/AddAnimeState';
import anime from 'store/mock-data';

export default function Anime() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const onClose = () => setIsOpen(false);
  const id = 1;
  const handleDelete = async () => {
    const result = await fetch(`${apiPaths.deleteAnime}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    const res = await result.json();
    if (res.status !== 'success') console.error('error during deleting');
  };
  return (
    <PageWrapper>
      <Typography
        sx={{ fontWeight: '400' }}
        variant="h2"
        component="h1"
        textAlign="center"
        marginBottom="48px"
      >
        {anime.title}
      </Typography>
      <Information {...anime} />
      <Container
        sx={{
          display: 'flex',
          gap: '32px',
          marginTop: '32px',
        }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          size="large"
          variant="contained"
          color="warning"
        >
          Edit
        </Button>
        <Button
          onClick={handleDelete}
          size="large"
          variant="contained"
          color="error"
        >
          Delete
        </Button>
      </Container>
      <ModalWindow open={isOpen} onClose={onClose}>
        <AnimeForm
          state={state}
          dispatch={dispatch}
          setIsSubmitted={() => onClose()}
          mode="update-anime"
        />
      </ModalWindow>
    </PageWrapper>
  );
}
