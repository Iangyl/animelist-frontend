import {
  Genre,
  Subgenre,
  AnimeStatus,
  AnimeTypes,
  AgeRating,
} from 'components/interfaces';

export const firstLetterToUpperCase = (str: string) => {
  if (str && str.length === 1) return str.toUpperCase();
  else return str.slice(0, 1).toUpperCase() + str.substring(1);
};

export const genre = (Object.keys(Genre) as Array<keyof typeof Genre>).map(
  (key) => Genre[key]
);
export const subgenre = (
  Object.keys(Subgenre) as Array<keyof typeof Subgenre>
).map((key) => Subgenre[key]);
export const animeStatus = (
  Object.keys(AnimeStatus) as Array<keyof typeof AnimeStatus>
).map((key) => AnimeStatus[key]);
export const animeTypes = (
  Object.keys(AnimeTypes) as Array<keyof typeof AnimeTypes>
).map((key) => AnimeTypes[key]);
export const ageRating = ['G', 'PG', 'PG-13', 'R', 'XR'] as AgeRating[];
