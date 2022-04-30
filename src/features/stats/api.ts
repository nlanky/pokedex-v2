// LOCAL FILES
// API
import { emptySplitApi } from 'features/common/redux/apiService';
// Interfaces & Types
import { Stat } from 'features/stats/types';

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getStatById: build.query<Stat, number>({
      query: (id) => `stat/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetStatByIdQuery } = extendedApi;
