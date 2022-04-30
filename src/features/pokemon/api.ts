// LOCAL FILES
// API
import { emptySplitApi } from 'features/common/redux/apiService';
// Constants
import { BASE_URL } from 'features/common/constants';
// Interfaces & Types
import { Pokemon, ProcessedPokemon } from 'features/pokemon/types';
// Utility Functions
import { transformPokemonResponse } from 'features/pokemon/utils';

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getPokemonById: build.query<ProcessedPokemon, number>({
      query: (id) => `pokemon/${id}`,
      transformResponse: transformPokemonResponse,
    }),
    getPokemonByName: build.query<ProcessedPokemon, string>({
      query: (name) => `pokemon/${name}`,
      transformResponse: transformPokemonResponse,
    }),
  }),
  overrideExisting: false,
});

export const getPokemonById = (id: number): Promise<Pokemon> =>
  fetch(`${BASE_URL}/pokemon/${id}`).then((response) =>
    response.json(),
  );

export const getPokemonByName = (name: string): Promise<Pokemon> =>
  fetch(`${BASE_URL}/pokemon/${name}`).then((response) =>
    response.json(),
  );

export const { useGetPokemonByIdQuery, useGetPokemonByNameQuery } =
  extendedApi;
