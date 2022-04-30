// LOCAL FILES
// API
import { emptySplitApi } from 'features/common/redux/apiService';
// Interfaces & Types
import {
  EvolutionTrigger,
  ProcessedEvolution,
} from 'features/evolutionChain/types';
// Utility Functions
import { transformEvolutionChainResponse } from 'features/evolutionChain/utils';

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getEvolutionChainById: build.query<ProcessedEvolution[], number>({
      query: (id) => `evolution-chain/${id}`,
      transformResponse: transformEvolutionChainResponse,
    }),
    getEvolutionTriggerById: build.query<EvolutionTrigger, number>({
      query: (id) => `evolution-trigger/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetEvolutionChainByIdQuery,
  useGetEvolutionTriggerByIdQuery,
} = extendedApi;
