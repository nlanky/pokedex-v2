// PUBLIC MODULES
import { createSlice } from '@reduxjs/toolkit';

interface SettingsState {
  language: string;
  walkthroughShowing: boolean;
}

const initialState: SettingsState = {
  language: 'en',
  walkthroughShowing: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleWalkthrough: (state) => {
      state.walkthroughShowing = !state.walkthroughShowing;
    },
    closeWalkthrough: (state) => {
      state.walkthroughShowing = false;
    },
  },
});

export const { toggleWalkthrough, closeWalkthrough } =
  settingsSlice.actions;
export const settingsReducer = settingsSlice.reducer;
