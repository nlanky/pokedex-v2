// REACT
import { useEffect, useState } from 'react';

// LOCAL FILES
// Hooks
import { usePokemon } from 'features/pokemon/hooks';
// Redux
import { useAppSelector } from 'features/common/redux/hooks';
import {
  useGetMoveByIdQuery,
  useGetMoveLearnMethodByIdQuery,
} from 'features/moves/api';
// Utility Functions
import {
  getMethodNameInSelectedLanguage,
  getMoveNameInSelectedLanguage,
} from 'features/moves/utils';

export const useMoves = () => {
  // CUSTOM HOOKS
  const { pokemon, loading } = usePokemon();

  return {
    moves: pokemon?.moves || {},
    loading,
  };
};

export const useMoveName = (id: number) => {
  // REDUX
  const language = useAppSelector((state) => state.settings.language);

  // RTK QUERY
  const { data, isFetching } = useGetMoveByIdQuery(id);

  // LOCAL STATE
  const [name, setName] = useState('');

  // EFFECTS
  useEffect(() => {
    if (data) {
      setName(getMoveNameInSelectedLanguage(data, language));
    }
  }, [data, language]);

  return {
    name,
    loading: isFetching,
  };
};

export const useMethodName = (id: number) => {
  // REDUX
  const language = useAppSelector((state) => state.settings.language);

  // RTK QUERY
  const { data, isFetching } = useGetMoveLearnMethodByIdQuery(id);

  // LOCAL STATE
  const [name, setName] = useState('');

  // EFFECTS
  useEffect(() => {
    if (data) {
      setName(getMethodNameInSelectedLanguage(data, language));
    }
  }, [data, language]);

  return {
    name,
    loading: isFetching,
  };
};
