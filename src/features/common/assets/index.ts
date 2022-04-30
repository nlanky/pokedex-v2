// @ts-nocheck

// LOCAL FILES
// Utility Functions
import { importAll } from 'features/common/utils';

// https://www.sounds-resource.com
export const CRY_AUDIO_FILES = importAll(
  require.context('./cries', false, /\.wav$/),
);

export const BACKGROUND_IMAGE_FILE = importAll(
  require.context('./images', false, /\.jpg$/),
)[1];
