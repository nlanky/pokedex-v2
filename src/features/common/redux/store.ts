// PUBLIC MODULES
import {
  AnyAction,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

// LOCAL FILES
// Redux
import { emptySplitApi } from 'features/common/redux/apiService';
import { navigationReducer } from 'features/navigation/navigationSlice';
import { settingsReducer } from 'features/settings/settingsSlice';

export const store = configureStore({
  reducer: {
    [emptySplitApi.reducerPath]: emptySplitApi.reducer, // API slice
    navigation: navigationReducer,
    settings: settingsReducer,
  },
  /*
    Adding the api middleware enables caching, invalidation, polling,
    and other useful features of RTK Query.
  */
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(emptySplitApi.middleware),
});

/*
  Optional, but required for refetchOnFocus/refetchOnReconnect behaviors.
  See `setupListeners` docs - takes an optional callback as the 2nd arg for customization.
*/
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
>;
