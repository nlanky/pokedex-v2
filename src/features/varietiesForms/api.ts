// LOCAL FILES
// API
import { emptySplitApi } from 'features/common/redux/apiService';
// Interfaces & Types
import { PokemonForm } from 'features/varietiesForms/types';

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getFormById: build.query<PokemonForm, number>({
      query: (id) => `pokemon-form/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetFormByIdQuery } = extendedApi;
