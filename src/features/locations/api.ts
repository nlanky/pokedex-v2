// LOCAL FILES
// API
import { emptySplitApi } from 'features/common/redux/apiService';
// Interfaces & Types
import {
  Location,
  LocationArea,
  ProcessedEncounters,
} from 'features/locations/types';
// Utility Functions
import { transformEncountersResponse } from 'features/locations/utils';

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getEncountersByPokemonId: build.query<
      ProcessedEncounters,
      number
    >({
      query: (id) => `pokemon/${id}/encounters`,
      transformResponse: transformEncountersResponse,
    }),
    getLocationById: build.query<Location, number>({
      query: (id) => `location/${id}`,
    }),
    getLocationAreaById: build.query<LocationArea, number>({
      query: (id) => `location-area/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetEncountersByPokemonIdQuery,
  useGetLocationByIdQuery,
  useGetLocationAreaByIdQuery,
} = extendedApi;
