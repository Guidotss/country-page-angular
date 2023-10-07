import { Country } from './country';
import { Region } from './region.type';

export interface ChacheStore {
  byCapital: TermCountries;
  byCountries: TermCountries;
  byRegion: RegionCountries;
}

export interface RegionCountries {
  region?: Region;
  countries: Country[];
}
export interface TermCountries {
  term: string;
  countries: Country[];
}
