import {
  Genre,
  Subgenre,
  AnimeStatus,
  AnimeTypes,
  AgeRating,
} from 'components/interfaces';
import { UnitForConvert, UnitOfDigitalInformation } from './index.types';

export const convertStringArrayIntoRow = (array: string[]) => {
  return array && array.join(', ');
};

export const converterBetweenUnitsOfDigitalInformation = (
  from: UnitForConvert,
  to: UnitOfDigitalInformation
) => {
  const { unitType, value } = from;

  switch (to) {
    case 'b':
      if (unitType === 'b') return value;
      else if (unitType === 'kb') return +value * 1024;
      else if (unitType === 'mb') return +value * 1048576;
      else if (unitType === 'gb') return +value * 1073741824;
      else if (unitType === 'tb') return +value * 1099511627776;
      break;
    case 'kb':
      if (unitType === 'b') return +value / 1024;
      else if (unitType === 'kb') return value;
      else if (unitType === 'mb') return +value * 1024;
      else if (unitType === 'gb') return +value * 1048576;
      else if (unitType === 'tb') return +value * 1073741824;
      break;
    case 'mb':
      if (unitType === 'b') return +value / 1048576;
      else if (unitType === 'kb') return +value / 1024;
      else if (unitType === 'mb') return value;
      else if (unitType === 'gb') return +value * 1024;
      else if (unitType === 'tb') return +value * 1048576;
      break;
    case 'gb':
      if (unitType === 'b') return +value / 1073741824;
      else if (unitType === 'kb') return +value / 1048576;
      else if (unitType === 'mb') return +value * 1024;
      else if (unitType === 'gb') return value;
      else if (unitType === 'tb') return +value * 1024;
      break;
    case 'tb':
      if (unitType === 'b') return +value / 1099511627776;
      else if (unitType === 'kb') return +value / 1073741824;
      else if (unitType === 'mb') return +value / 1048576;
      else if (unitType === 'gb') return +value * 1024;
      else if (unitType === 'tb') return value;
      break;
    default:
      NaN;
  }
};

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
