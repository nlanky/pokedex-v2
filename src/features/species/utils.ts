// LOCAL FILES
// Constants
import { VERSION_ARRAY } from 'features/version/constants';
// Interfaces & Types
import {
  PokemonSpecies,
  ProcessedPokemonSpecies,
} from 'features/species/types';

export const getPokemonNameInSelectedLanguage = (
  data: ProcessedPokemonSpecies | undefined,
  language: string,
): string => {
  if (!data) {
    return '';
  }

  let pokemonName =
    data.name.charAt(0).toUpperCase() + data.name.slice(1);

  // Check for a translation of name
  for (let i = 0; i < data.names.length; i++) {
    const name = data.names[i];
    if (name.language.name === language) {
      pokemonName = name.name;
      break;
    }
  }

  return pokemonName;
};

export const getFlavourTextInSelectedLanguage = (
  data: ProcessedPokemonSpecies | undefined,
  language: string,
): string => {
  if (!data) {
    return '';
  }

  let flavourText = `${getPokemonNameInSelectedLanguage(
    data,
    language,
  )} description.`;

  // Get all matching flavour text entries for language
  const flavourTextEntriesInSelectedLanguage =
    data.flavor_text_entries.filter(
      (flavourTextEntry) =>
        flavourTextEntry.language.name === language,
    );

  // Sort flavour text entries with latest version first
  flavourTextEntriesInSelectedLanguage.sort(
    (a, b) =>
      VERSION_ARRAY.indexOf(a.version.name) -
      VERSION_ARRAY.indexOf(b.version.name),
  );

  if (flavourTextEntriesInSelectedLanguage[0]) {
    flavourText = flavourTextEntriesInSelectedLanguage[0].flavor_text;
  }

  return flavourText;
};

/**
 * Mainly used to transform API URLs into IDs for ease of use with
 * RTK Query and components.
 */
export const transformSpeciesResponse = (
  data: PokemonSpecies,
): ProcessedPokemonSpecies => {
  const { egg_groups, varieties, evolution_chain, ...rest } = data;
  const processedData: ProcessedPokemonSpecies = {
    ...rest,
    egg_group_ids: [],
    varieties: [],
    evolution_chain_id: NaN,
  };

  // EGG GROUPS
  processedData.egg_group_ids = egg_groups.map((eggGroup) => {
    const eggGroupUrlSplit = eggGroup.url.split('/');
    return Number(eggGroupUrlSplit[eggGroupUrlSplit.length - 2]);
  });

  // VARIETIES
  processedData.varieties = varieties.map((variety) => {
    const pokemonUrlSplit = variety.pokemon.url.split('/');
    return {
      is_default: variety.is_default,
      pokemon_id: Number(pokemonUrlSplit[pokemonUrlSplit.length - 2]),
    };
  });

  // EVOLUTION CHAIN ID
  const evolutionChainUrlSplit = evolution_chain.url.split('/');
  processedData.evolution_chain_id = Number(
    evolutionChainUrlSplit[evolutionChainUrlSplit.length - 2],
  );

  return processedData;
};
