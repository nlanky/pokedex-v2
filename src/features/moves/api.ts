// LOCAL FILES
// API
import { emptySplitApi } from 'features/common/redux/apiService';
// Interfaces & Types
import { Move, MoveLearnMethod } from 'features/moves/types';

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getMoveById: build.query<Move, number>({
      query: (id) => `move/${id}`,
    }),
    getMoveLearnMethodById: build.query<MoveLearnMethod, number>({
      query: (id) => `move-learn-method/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetMoveByIdQuery, useGetMoveLearnMethodByIdQuery } =
  extendedApi;
