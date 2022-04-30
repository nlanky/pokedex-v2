// LOCAL FILES
// Redux
import { useAppSelector } from 'features/common/redux/hooks';
import { useGetPokemonByIdQuery } from 'features/pokemon/api';

export const usePokemon = () => {
  // REDUX
  const currentPokemonId = useAppSelector(
    (state) => state.navigation.id,
  );

  // RTK QUERY
  const { data, isFetching } =
    useGetPokemonByIdQuery(currentPokemonId);

  return {
    pokemon: data,
    loading: isFetching,
  };
};

export const useHeightAndWeight = () => {
  // CUSTOM HOOKS
  const { pokemon, loading } = usePokemon();

  return {
    height: pokemon?.height || NaN,
    weight: pokemon?.weight || NaN,
    loading,
  };
};
