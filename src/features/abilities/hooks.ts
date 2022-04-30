// REACT
import { useEffect, useState } from 'react';

// LOCAL FILES
// Hooks
import { usePokemon } from 'features/pokemon/hooks';
// Interfaces & Types
import { FormattedAbility } from 'features/abilities/types';
// Redux
import { useAppSelector } from 'features/common/redux/hooks';
import { useGetAbilityByIdQuery } from 'features/abilities/api';
// Utility Functions
import { getAbilityNameAndFlavourTextInSelectedLanguage } from 'features/abilities/utils';

export const useAbilities = () => {
  // CUSTOM HOOKS
  const { pokemon, loading } = usePokemon();

  return {
    abilities: pokemon?.abilities || [],
    loading,
  };
};

export const useAbility = (id: number) => {
  // REDUX
  const language = useAppSelector((state) => state.settings.language);

  // RTK QUERY
  const { data, isFetching } = useGetAbilityByIdQuery(id);

  // LOCAL STATE
  const [formattedAbility, setFormattedAbility] =
    useState<FormattedAbility>({
      name: '',
      flavourText: '',
    });

  // EFFECTS
  useEffect(() => {
    if (data) {
      const { name, flavourText } =
        getAbilityNameAndFlavourTextInSelectedLanguage(
          data,
          language,
        );
      setFormattedAbility({
        name,
        flavourText,
      });
    }
  }, [language, data]);

  return {
    ability: formattedAbility,
    loading: isFetching,
  };
};
