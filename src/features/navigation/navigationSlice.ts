// PUBLIC MODULES
import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

// LOCAL FILES
// API
import {
  getPokemonById,
  getPokemonByName,
} from 'features/pokemon/api';
// Constants
import { MAX_POKEDEX_NUMBER } from 'features/common/constants';
// Interfaces & Types
import { ProcessedPokemon } from 'features/pokemon/types';
// Redux
import { AppThunk } from 'features/common/redux/store';
// Utility Functions
import { getSpriteArrayFromObject } from 'features/sprites/utils';

export type SecondaryDisplayName =
  | 'flavourText'
  | 'stats'
  | 'heightWeight'
  | 'typeEffectiveness'
  | 'abilities'
  | 'encounters'
  | 'evolutionChain'
  | 'moves'
  | 'varieties'
  | 'eggGroups';

interface NavigationState {
  id: number;
  spriteIndex: number;
  secondaryDisplay: SecondaryDisplayName;
  searching: boolean;
}

const initialState: NavigationState = {
  id: 1,
  spriteIndex: 0,
  secondaryDisplay: 'flavourText',
  searching: false,
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    incrementId: (state) => {
      state.id = Math.min(state.id + 1, MAX_POKEDEX_NUMBER);
      state.spriteIndex = 0;
    },
    decrementId: (state) => {
      state.id = Math.max(state.id - 1, 1);
      state.spriteIndex = 0;
    },
    randomiseId: (state) => {
      state.id = Math.floor(
        Math.random() * (MAX_POKEDEX_NUMBER - 1) + 1,
      );
      state.spriteIndex = 0;
    },
    setId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
    incrementSpriteIndex: (state) => {
      state.spriteIndex += 1;
    },
    decrementSpriteIndex: (state) => {
      state.spriteIndex -= 1;
    },
    showFirstSprite: (state) => {
      state.spriteIndex = 0;
    },
    showSelectedSpriteIndex: (
      state,
      action: PayloadAction<number>,
    ) => {
      state.spriteIndex = action.payload;
    },
    setSecondaryDisplay: (
      state,
      action: PayloadAction<SecondaryDisplayName>,
    ) => {
      state.secondaryDisplay = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addMatcher(
        (action) =>
          ['/pokemon/id/pending', '/pokemon/name/pending'].includes(
            action.type,
          ),
        (state) => {
          state.searching = true;
        },
      )
      .addMatcher(
        (action) =>
          ['/pokemon/id/rejected', '/pokemon/name/rejected'].includes(
            action.type,
          ),
        (state) => {
          // Input will be reset if request fails
          state.searching = false;
        },
      )
      .addMatcher(
        (action) =>
          [
            '/pokemon/id/fulfilled',
            '/pokemon/name/fulfilled',
          ].includes(action.type),
        (state, action) => {
          state.searching = false;
          state.id = action.payload.id;
        },
      );
  },
});

export const {
  incrementId,
  decrementId,
  randomiseId,
  setId,
  incrementSpriteIndex,
  decrementSpriteIndex,
  showFirstSprite,
  showSelectedSpriteIndex,
  setSecondaryDisplay,
} = navigationSlice.actions;

export const navigationReducer = navigationSlice.reducer;

// TODO: Gotta be a better way of doing this
export const showLastSprite =
  (): AppThunk => async (dispatch, getState) => {
    const { api, navigation } = getState();
    const queryString = `getPokemonById(${navigation.id})`;
    const cachedQuery = api.queries[queryString];
    if (cachedQuery?.status === 'fulfilled') {
      const spriteArray = getSpriteArrayFromObject(
        cachedQuery.data as ProcessedPokemon,
      );
      dispatch(showSelectedSpriteIndex(spriteArray.length - 1));
    }
  };

export const fetchPokemonById = createAsyncThunk(
  '/pokemon/id',
  async (id: number) => await getPokemonById(id),
);

export const fetchPokemonByName = createAsyncThunk(
  '/pokemon/name',
  async (name: string) => await getPokemonByName(name),
);
