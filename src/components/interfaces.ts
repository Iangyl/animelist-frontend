export enum Subgenre {
  CYBERPUNK = 'Cyberpunk',
  GAME = 'Game',
  ECCHI = 'Ecchi',
  DEMONS = 'Demons',
  HAREM = 'Harem',
  JOSEI = 'Josei',
  MARTIAL_ARTS = 'Martial Arts',
  KIDS = 'Kids',
  HISTORICAL = 'Historical',
  HENTAI = 'Hentai',
  ISEKAI = 'Isekai',
  MILITARY = 'Military',
  MECHA = 'Mecha',
  MUSIC = 'Music',
  PARODY = 'Parody',
  POLICE = 'Police',
  POST_APOCALYPTIC = 'Post-Apocalyptic',
  REVERSE_HAREM = 'Reverse Harem',
  SCHOOL = 'School',
  SEINEN = 'Seinen',
  SHOUJO = 'Shoujo',
  SHOUJO_AI = 'Shoujo-ai',
  SHOUNEN = 'Shounen',
  SHOUNEN_AI = 'Shounen-ai',
  SPACE = 'Space',
  SPORT = 'Sport',
  SUPER_POWER = 'Super Power',
  TRAGEDY = 'Tragedy',
  VAMPIRE = 'Vampire',
  YURI = 'Yuri',
  YAOI = 'Yaoi',
}

export enum Genre {
  ACTION = 'Action',
  ADVENTURE = 'Adventure',
  COMEDY = 'Comedy',
  DRAMA = 'Drama',
  FANTASY = 'Fantasy',
  MAGIC = 'Magic',
  SUPERNATURAL = 'Supernatural',
  HORROR = 'Horror',
  MYSTERY = 'Mystery',
  PSYCHOLOGICAL = 'Psychological',
  ROMANCE = 'Romance',
  SCI_FI = 'Sci-Fi',
}

export enum AnimeStatus {
  RELEASED = 'Released',
  ANNOUNCEMENT = 'Announcement',
  ONGOING = 'Ongoing',
  PAUSED = 'Paused',
  STOPPED = 'Stopped',
}

export enum AnimeTypes {
  FILM = 'Film',
  SERIAL = 'TV Series',
  ONA = 'ONA',
  OVA = 'OVA',
  SPECIAL = 'Special',
}

export type AgeRating = 'G' | 'PG' | 'PG-13' | 'R' | 'XR';

export default interface IAnime {
  title: string;
  img?: string;
  type: AnimeTypes;
  status: AnimeStatus;
  date?: Date;
  genre: Genre[];
  subgenre?: Subgenre[];
  age_rating: AgeRating;
  duration?: string;
  rate?: number;
  episodesAmount: number;
  announcedEpisodesAmount?: number;
  description?: string;
}
