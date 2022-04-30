// LOCAL FILES
// API
import { emptySplitApi } from 'features/common/redux/apiService';
// Interfaces & Types
import { Ability } from 'features/abilities/types';

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getAbilityById: build.query<Ability, number>({
      query: (id) => `ability/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetAbilityByIdQuery } = extendedApi;
