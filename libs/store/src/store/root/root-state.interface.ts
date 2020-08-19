import { CountryResponse } from '../../api/countries/countriy-responose.interface';

export interface RootState {
  countries?: CountryResponse[];
}
