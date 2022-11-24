import IAnime, {
  AnimeStatus,
  AnimeTypes,
  Genre,
  Subgenre,
} from 'components/interfaces';

const anime: IAnime = {
  title: 'Some Anime',
  img: '',
  type: AnimeTypes.SERIAL,
  status: AnimeStatus.RELEASED,
  date: new Date(),
  genre: [Genre.ACTION],
  subgenre: [Subgenre.ECCHI],
  age_rating: 'G',
  duration: '24m',
  episodesAmount: 12,
  announcedEpisodesAmount: 12,
  description:
    'Lorem Ipsum, de Capilla ofaratene, mo si alacarta. Iro to le ramere.',
};

export default anime;
