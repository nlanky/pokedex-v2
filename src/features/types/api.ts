// LOCAL FILES
// API
import { emptySplitApi } from 'features/common/redux/apiService';
// Interfaces & Types
import { Type } from 'features/types/types';

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getTypeById: build.query<Type, number>({
      query: (id) => `type/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetTypeByIdQuery } = extendedApi;
