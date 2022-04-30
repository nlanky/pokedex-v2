// LOCAL FILES
// Interfaces & Types
import { Stat } from 'features/stats/types';

export const getStatNameInSelectedLanguage = (
  data: Stat,
  language: string,
): string => {
  let statName = data.name.toUpperCase();

  // Check for a translation of name
  for (let i = 0; i < data.names.length; i++) {
    const name = data.names[i];
    if (name.language.name === language) {
      statName = name.name;
      break;
    }
  }

  return statName;
};
