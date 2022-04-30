// REACT
import { useEffect, useState } from 'react';

// LOCAL FILES
// Hooks
import { usePokemon } from 'features/pokemon/hooks';
// Redux
import { useAppSelector } from 'features/common/redux/hooks';
import { useGetStatByIdQuery } from 'features/stats/api';
// Utility Functions
import { getStatNameInSelectedLanguage } from 'features/stats/utils';

export const useStats = () => {
  // CUSTOM HOOKS
  const { pokemon, loading } = usePokemon();

  return {
    stats: pokemon?.stats || [],
    loading,
  };
};

export const useStatName = (id: number) => {
  // REDUX
  const language = useAppSelector((state) => state.settings.language);

  // RTK QUERY
  const { data, isFetching } = useGetStatByIdQuery(id);

  // LOCAL STATE
  const [name, setName] = useState('');

  // EFFECTS
  useEffect(() => {
    if (data) {
      setName(getStatNameInSelectedLanguage(data, language));
    }
  }, [data, language]);

  return {
    name,
    loading: isFetching,
  };
};
