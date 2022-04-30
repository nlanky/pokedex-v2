// LOCAL FILES
// Constants
import { VERSION_GROUP_ARRAY } from 'features/version/constants';
// Interfaces & Types
import { Ability } from 'features/abilities/types';

export const getAbilityNameAndFlavourTextInSelectedLanguage = (
  data: Ability,
  language: string,
): {
  name: string;
  flavourText: string;
} => {
  let abilityName = data.name;
  let abilityFlavourText = `${data.name} description.`;

  // Check for a translation of name
  for (let i = 0; i < data.names.length; i++) {
    const name = data.names[i];
    if (name.language.name === language) {
      abilityName = name.name;
    }
  }

  // Get all matching flavour text entries for language
  const flavourTextEntriesInSelectedLanguage =
    data.flavor_text_entries.filter(
      (flavourTextEntry) =>
        flavourTextEntry.language.name === language,
    );

  // Sort flavour text entries with latest version first
  flavourTextEntriesInSelectedLanguage.sort(
    (a, b) =>
      VERSION_GROUP_ARRAY.indexOf(a.version_group.name) -
      VERSION_GROUP_ARRAY.indexOf(b.version_group.name),
  );

  if (flavourTextEntriesInSelectedLanguage[0]) {
    abilityFlavourText =
      flavourTextEntriesInSelectedLanguage[0].flavor_text;
  }

  return {
    name: abilityName,
    flavourText: abilityFlavourText,
  };
};
