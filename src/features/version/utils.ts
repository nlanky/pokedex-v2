// LOCAL FILES
// Interfaces & Types
import { Generation, Version } from 'features/version/types';

export const getGenerationNameInSelectedLanguage = (
  data: Generation,
  language: string,
) => {
  let generationName = data.name;

  // Check for a translation of name
  for (let i = 0; i < data.names.length; i++) {
    const name = data.names[i];
    if (name.language.name === language) {
      generationName = name.name;
      break;
    }
  }

  return generationName;
};

export const getVersionNameInSelectedLanguage = (
  data: Version,
  language: string,
) => {
  let versionName = data.name;

  // Check for a translation of name
  for (let i = 0; i < data.names.length; i++) {
    const name = data.names[i];
    if (name.language.name === language) {
      versionName = name.name;
      break;
    }
  }

  return versionName;
};
