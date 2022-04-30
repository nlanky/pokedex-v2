// LOCAL FILES
// Hooks
import { usePokemon } from 'features/pokemon/hooks';
// Redux
import { useAppSelector } from 'features/common/redux/hooks';
import { useGetSpeciesByIdQuery } from 'features/species/api';
// Utility Functions
import {
  getFlavourTextInSelectedLanguage,
  getPokemonNameInSelectedLanguage,
} from 'features/species/utils';

export const useSpecies = () => {
  // CUSTOM HOOKS
  const { pokemon, loading: loadingPokemon } = usePokemon();

  // RTK QUERY
  const { data, isFetching: loadingSpecies } = useGetSpeciesByIdQuery(
    pokemon?.species_id || NaN,
    {
      skip: !pokemon,
    },
  );

  return {
    species: data,
    loading: loadingPokemon || loadingSpecies,
  };
};

export const usePokemonName = () => {
  // CUSTOM HOOKS
  const { species, loading } = useSpecies();

  // REDUX
  const currentPokemonId = useAppSelector(
    (state) => state.navigation.id,
  );
  const language = useAppSelector((state) => state.settings.language);

  return {
    name: `#${currentPokemonId} ${getPokemonNameInSelectedLanguage(
      species,
      language,
    )}`,
    loading,
  };
};

export const useFlavourText = () => {
  // CUSTOM HOOKS
  const { species, loading } = useSpecies();

  // REDUX
  const language = useAppSelector((state) => state.settings.language);

  return {
    text: getFlavourTextInSelectedLanguage(species, language),
    loading,
  };
};
