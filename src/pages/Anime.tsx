import React, { useEffect, useReducer, useState } from 'react';
import PageWrapper from './PageWrapper';
import { apiPaths } from 'utils/constants';
import Information from 'components/Information';
import ModalWindow from 'components/ModalWindow';
import AnimeForm from 'components/AnimeForm';
import { Button, Container, Typography } from '@mui/material';
import { reducer, initialState, init } from 'store/AddAnimeState';
import { IAnimeValidation } from 'components/AnimeForm/index.types';
import { useLocation } from 'react-router-dom';

export default function Anime() {
  const { pathname } = useLocation();
  const pathnameArray = pathname.split('/');
  const id = pathnameArray[pathnameArray.length - 1];
  const [anime, setAnime] = useState<IAnimeValidation>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const onClose = () => setIsOpen(false);

  const handleDelete = async () => {
    const result = await fetch(`${apiPaths.deleteAnime}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    const res = await result.json();
    if (!res.success) console.error('error during deleting');
  };

  useEffect(() => {
    const getAnime = async () => {
      try {
        const response = await fetch(`${apiPaths.getAnimes}/${id}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        const result = await response.json();

        if (!result.success) throw Error('Internal error!');

        setAnime(result.data);
      } catch (e: unknown) {
        console.error(e);
      }
    };

    getAnime();
  }, []);

  return (
    <PageWrapper>
      <Typography
        sx={{ fontWeight: '400' }}
        variant="h2"
        component="h1"
        textAlign="center"
        marginBottom="48px"
      >
        {anime?.title}
      </Typography>
      <Information
        img={anime?.img}
        type={anime?.type ?? "data didn't load"}
        status={anime?.status ?? "data didn't load"}
        date={anime?.date ?? "data didn't load"}
        genre={anime?.genre ?? []}
        subgenre={anime?.subgenre ?? []}
        age_rating={anime?.age_rating ?? "data didn't load"}
        duration={anime?.duration}
        description={anime?.description}
        episodesAmount={anime?.episodesAmount ?? NaN}
        announcedEpisodesAmount={anime?.announcedEpisodesAmount}
      />
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
