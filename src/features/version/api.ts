// LOCAL FILES
// API
import { emptySplitApi } from 'features/common/redux/apiService';
// Interfaces & Types
import {
  Generation,
  Version,
  VersionGroup,
} from 'features/version/types';

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getGenerationById: build.query<Generation, number>({
      query: (id) => `generation/${id}`,
    }),
    getVersionById: build.query<Version, number>({
      query: (id) => `version/${id}`,
    }),
    getVersionGroupById: build.query<VersionGroup, number>({
      query: (id) => `version-group/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetGenerationByIdQuery,
  useGetVersionByIdQuery,
  useGetVersionGroupByIdQuery,
} = extendedApi;
