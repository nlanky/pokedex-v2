// REACT
import { useEffect, useState } from 'react';

// LOCAL FILES
// Hooks
import { useSpecies } from 'features/species/hooks';
// Interfaces & Types
import { FormattedEggGroup } from 'features/eggGroups/types';
// Redux
import { useAppSelector } from 'features/common/redux/hooks';
import { useGetEggGroupByIdQuery } from 'features/eggGroups/api';
// Utility Functions
import { getEggGroupNameInSelectedLanguage } from 'features/eggGroups/utils';

export const useEggGroupIds = () => {
  // CUSTOM HOOKS
  const { species, loading } = useSpecies();

  return {
    eggGroupIds: species?.egg_group_ids || [],
    loading,
  };
};

export const useEggGroup = (id: number) => {
  // REDUX
  const language = useAppSelector((state) => state.settings.language);

  // RTK QUERY
  const { data, isFetching } = useGetEggGroupByIdQuery(id);

  // LOCAL STATE
  const [formattedEggGroup, setFormattedEggGroup] =
    useState<FormattedEggGroup>({
      name: '',
      count: NaN,
    });

  // EFFECTS
  useEffect(() => {
    if (data) {
      setFormattedEggGroup({
        name: getEggGroupNameInSelectedLanguage(data, language),
        count: data.pokemon_species.length,
      });
    }
  }, [data, language]);

  return {
    eggGroup: formattedEggGroup,
    loading: isFetching,
  };
};
