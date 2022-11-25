import { IAnimeValidation } from 'components/AnimeForm/index.types';

export interface IAction {
  type: string;
  payload?: any;
}

export const initialState: IAnimeValidation = {
  title: '',
  img: '',
  type: '',
  status: '',
  date: new Date(),
  genre: [],
  subgenre: [],
  age_rating: '',
  duration: '',
  episodesAmount: 0,
  announcedEpisodesAmount: 0,
  description: '',
};

export function init() {
  return initialState;
}

export function reducer(state: typeof initialState, action: IAction) {
  const { type, payload } = action;

  switch (type) {
    case 'title':
      return { ...state, title: payload };
    case 'img':
      return { ...state, img: payload };
    case 'type':
      return { ...state, type: payload };
    case 'status':
      return { ...state, status: payload };
    case 'date':
      return { ...state, date: payload };
    case 'genre':
      return { ...state, genre: payload };
    case 'subgenre':
      return { ...state, subgenre: payload };
    case 'age_rating':
      return { ...state, age_rating: payload };
    case 'duration':
      return { ...state, duration: payload };
    case 'episodesAmount':
      return { ...state, episodesAmount: payload };
    case 'announcedEpisodesAmount':
      return { ...state, announcedEpisodesAmount: payload };
    case 'description':
      return { ...state, description: payload };
    case 'init':
      return init();
    case 'initWithServerData':
      return { ...state, ...payload };
    default:
      throw new Error();
  }
}
