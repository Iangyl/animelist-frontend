import React from 'react';
import { IAction } from 'store/AddAnimeState';

type ModelActionMode = 'add-anime' | 'update-anime';

export interface IAnimeValidation {
  title: string;
  img?: string;
  type: string;
  status: string;
  date?: Date | string;
  genre: string[];
  subgenre?: string[];
  age_rating: string;
  duration?: string;
  episodesAmount: number;
  announcedEpisodesAmount?: number;
  description?: string;
}

interface IAnime {
  state: IAnimeValidation;
  dispatch: React.Dispatch<IAction>;
  setIsSubmitted: () => void;
  mode: ModelActionMode;
}

export default IAnime;
