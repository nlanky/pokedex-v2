// LOCAL FILES
// API
import { emptySplitApi } from 'features/common/redux/apiService';
// Interfaces & Types
import { ProcessedPokemonSpecies } from 'features/species/types';
// Utility Functions
import { transformSpeciesResponse } from 'features/species/utils';

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getSpeciesById: build.query<ProcessedPokemonSpecies, number>({
      query: (id) => `pokemon-species/${id}`,
      transformResponse: transformSpeciesResponse,
    }),
  }),
  overrideExisting: false,
});

export const { useGetSpeciesByIdQuery } = extendedApi;
