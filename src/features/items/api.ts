// LOCAL FILES
// API
import { emptySplitApi } from 'features/common/redux/apiService';
// Interfaces & Types
import { Item } from 'features/items/types';

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getItemById: build.query<Item, number>({
      query: (id) => `item/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetItemByIdQuery } = extendedApi;
