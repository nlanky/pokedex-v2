// LOCAL FILES
// API
import { emptySplitApi } from 'features/common/redux/apiService';
// Interfaces & Types
import { EggGroup } from 'features/eggGroups/types';

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getEggGroupById: build.query<EggGroup, number>({
      query: (id) => `egg-group/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetEggGroupByIdQuery } = extendedApi;
