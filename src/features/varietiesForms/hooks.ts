// REACT
import { useEffect, useState } from 'react';

// LOCAL FILES
// Hooks
import { usePokemon } from 'features/pokemon/hooks';
import { useSpecies } from 'features/species/hooks';
// Interfaces & Types
import {
  FormattedVarietyOrForm,
  VarietiesOrForms,
} from 'features/varietiesForms/types';
// Redux
import { useAppSelector } from 'features/common/redux/hooks';
import { useGetFormByIdQuery } from 'features/varietiesForms/api';
import { useGetPokemonByIdQuery } from 'features/pokemon/api';
// Utility Functions
import { getFormNameInSelectedLanguage } from 'features/varietiesForms/utils';
import { getPokemonNameInSelectedLanguage } from 'features/species/utils';
import { useGetSpeciesByIdQuery } from 'features/species/api';

/**
 * Varieties differ in more than just visuals. Forms are just visually different.
 */
export const useVarietyAndFormIds = () => {
  // CUSTOM HOOKS
  const { pokemon, loading: loadingPokemon } = usePokemon();
  const { species, loading: loadingSpecies } = useSpecies();

  // LOCAL STATE
  const [varietyAndFormIds, setVarietyAndFormIds] =
    useState<VarietiesOrForms>({
      varietyIds: [],
      formIds: [],
    });

  // EFFECTS
  useEffect(() => {
    if (pokemon && species) {
      // TODO: Is this a reliable way of filtering dupes?
      const varietyIds = species.varieties.map(
        (variety) => variety.pokemon_id,
      );
      setVarietyAndFormIds({
        varietyIds,
        formIds: pokemon.form_ids.filter(
          (formId) => !varietyIds.includes(formId),
        ),
      });
    }
  }, [pokemon, species]);

  return {
    varietyAndFormIds,
    loading: loadingPokemon || loadingSpecies,
  };
};

export const useForm = (id: number) => {
  // REDUX
  const language = useAppSelector((state) => state.settings.language);

  // RTK QUERY
  const { data: formData, isFetching: loadingForm } =
    useGetFormByIdQuery(id);

  // DERIVED VARIABLES
  const pokemonUrlSplit = formData?.pokemon.url.split('/') || [];

  // RTK QUERY
  const { data: pokemonData, isFetching: loadingPokemon } =
    useGetPokemonByIdQuery(
      Number(pokemonUrlSplit[pokemonUrlSplit.length - 2]),
      {
        skip: !formData,
      },
    );
  const { data: speciesData, isFetching: loadingSpecies } =
    useGetSpeciesByIdQuery(pokemonData?.species_id || NaN, {
      skip: !pokemonData,
    });

  // LOCAL STATE
  const [form, setForm] = useState<FormattedVarietyOrForm>({
    name: '',
    sprite: '',
  });

  // EFFECTS
  useEffect(() => {
    if (formData && speciesData) {
      const formName = getFormNameInSelectedLanguage(
        formData,
        language,
      );
      setForm({
        name:
          formName ||
          getPokemonNameInSelectedLanguage(speciesData, language),
        sprite: formData.sprites.front_default,
      });
    }
  }, [formData, language, speciesData]);

  return {
    form,
    loading: loadingForm || loadingPokemon || loadingSpecies,
  };
};

export const useVariety = (id: number) => {
  // REDUX
  const language = useAppSelector((state) => state.settings.language);

  // RTK QUERY
  const { data: pokemonData, isFetching: loadingPokemon } =
    useGetPokemonByIdQuery(id);
  const { data: speciesData, isFetching: loadingSpecies } =
    useGetSpeciesByIdQuery(pokemonData?.species_id || NaN, {
      skip: !pokemonData,
    });
  const { data: formData, isFetching: loadingForm } =
    useGetFormByIdQuery(Number(pokemonData?.form_ids[0] || NaN), {
      skip: !pokemonData,
    });

  // LOCAL STATE
  const [variety, setVariety] = useState<FormattedVarietyOrForm>({
    name: '',
    sprite: '',
  });

  // EFFECTS
  useEffect(() => {
    if (formData && speciesData) {
      const formName = getFormNameInSelectedLanguage(
        formData,
        language,
      );
      setVariety({
        name:
          formName ||
          getPokemonNameInSelectedLanguage(speciesData, language),
        sprite: formData.sprites.front_default,
      });
    }
  }, [formData, language, speciesData]);

  return {
    variety,
    loading: loadingForm || loadingPokemon || loadingSpecies,
  };
};
