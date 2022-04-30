// LOCAL FILES
// API
import { emptySplitApi } from 'features/common/redux/apiService';
// Interfaces & Types
import { Generation } from 'features/generation/types';

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getGenerationById: build.query<Generation, number>({
      query: (id) => `generation/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetGenerationByIdQuery } = extendedApi;
