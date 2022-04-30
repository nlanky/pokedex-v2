// LOCAL FILES
// Interfaces & Types
import { EggGroup } from 'features/eggGroups/types';

export const getEggGroupNameInSelectedLanguage = (
  data: EggGroup,
  language: string,
): string => {
  let eggGroupName = data.name;

  // Check for a translation of name
  for (let i = 0; i < data.names.length; i++) {
    const name = data.names[i];
    if (name.language.name === language) {
      eggGroupName = name.name;
      break;
    }
  }

  return eggGroupName;
};
