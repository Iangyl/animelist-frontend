import React from 'react';
import {
  FieldErrorsImpl,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
} from 'react-hook-form/dist/types';
import { IAction } from 'store/AddAnimeState';

export interface IAddNewAnimeValidation {
  title: string;
  img?: string;
  type: string;
  status: string;
  date?: Date | string;
  genre: string | string[];
  subgenre?: string | string[];
  age_rating: string;
  duration?: string;
  episodesAmount: number;
  announcedEpisodesAmount?: number;
  description?: string;
}

interface IAddNewAnime {
  register: UseFormRegister<IAddNewAnimeValidation>;
  handleSubmit: UseFormHandleSubmit<IAddNewAnimeValidation>;
  watch?: UseFormWatch<IAddNewAnimeValidation>;
  setIsSubmitted: () => void;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
  state: IAddNewAnimeValidation;
  dispatch: React.Dispatch<IAction>;
}

export default IAddNewAnime;