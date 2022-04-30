// PUBLIC MODULES
import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

// LOCAL FILES
// Constants
import { BASE_URL } from 'features/common/constants';

// Initialise empty API service that we'll inject endpoints into later
export const emptySplitApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: () => ({}),
  keepUnusedDataFor: 60 * 60, // Keep data in cache for 1 hour
});
