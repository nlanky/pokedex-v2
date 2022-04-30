// REACT
import { useEffect, useMemo, useState } from 'react';

// LOCAL FILES
// Hooks
import { usePokemon } from 'features/pokemon/hooks';
// Interfaces & Types
import { Ability } from 'features/abilities/types';
import {
  PokemonTypeEffectiveness,
  TypeToData,
} from 'features/types/types';
// Redux
import { useAppSelector } from 'features/common/redux/hooks';
import { useGetAbilityByIdQuery } from 'features/abilities/api';
import { useGetPokemonByIdQuery } from 'features/pokemon/api';
import { useGetTypeByIdQuery } from 'features/types/api';
// Utility Functions
import {
  getTypeEffectivenessForPokemon,
  getTypeNameInSelectedLanguage,
} from 'features/types/utils';

export const useTypes = () => {
  // CUSTOM HOOKS
  const { pokemon, loading } = usePokemon();

  return {
    types: pokemon?.types || [],
    loading,
  };
};

export const useTypeName = (id: number) => {
  // REDUX
  const language = useAppSelector((state) => state.settings.language);

  // RTK QUERY
  const { data, isFetching } = useGetTypeByIdQuery(id);

  // LOCAL STATE
  const [name, setName] = useState('');

  // EFFECTS
  useEffect(() => {
    if (data) {
      setName(getTypeNameInSelectedLanguage(data, language));
    }
  }, [data, language]);

  return {
    name,
    loading: isFetching,
  };
};

// TODO: Tidy this mess...
export const useTypeEffectiveness = () => {
  // REDUX
  const currentPokemonId = useAppSelector(
    (state) => state.navigation.id,
  );
  const language = useAppSelector((state) => state.settings.language);

  // RTK QUERY
  const { data: pokemonData, isFetching: fetchingPokemon } =
    useGetPokemonByIdQuery(currentPokemonId);

  // MEMO
  const abilities = useMemo(
    () => pokemonData?.abilities || [],
    [pokemonData],
  );

  // RTK QUERY
  const { data: abilityOneData, isFetching: fetchingAbilityOne } =
    useGetAbilityByIdQuery(abilities[0]?.id || NaN, {
      skip: !pokemonData,
    });
  const { data: abilityTwoData, isFetching: fetchingAbilityTwo } =
    useGetAbilityByIdQuery(abilities[1]?.id || NaN, {
      skip: !pokemonData || !abilities[1],
    });
  const { data: abilityThreeData, isFetching: fetchingAbilityThree } =
    useGetAbilityByIdQuery(abilities[2]?.id || NaN, {
      skip: !pokemonData || !abilities[2],
    });
  const { data: typeOneData, isFetching: fetchingTypeOne } =
    useGetTypeByIdQuery(1);
  const { data: typeTwoData, isFetching: fetchingTypeTwo } =
    useGetTypeByIdQuery(2);
  const { data: typeThreeData, isFetching: fetchingTypeThree } =
    useGetTypeByIdQuery(3);
  const { data: typeFourData, isFetching: fetchingTypeFour } =
    useGetTypeByIdQuery(4);
  const { data: typeFiveData, isFetching: fetchingTypeFive } =
    useGetTypeByIdQuery(5);
  const { data: typeSixData, isFetching: fetchingTypeSix } =
    useGetTypeByIdQuery(6);
  const { data: typeSevenData, isFetching: fetchingTypeSeven } =
    useGetTypeByIdQuery(7);
  const { data: typeEightData, isFetching: fetchingTypeEight } =
    useGetTypeByIdQuery(8);
  const { data: typeNineData, isFetching: fetchingTypeNine } =
    useGetTypeByIdQuery(9);
  const { data: typeTenData, isFetching: fetchingTypeTen } =
    useGetTypeByIdQuery(10);
  const { data: typeElevenData, isFetching: fetchingTypeEleven } =
    useGetTypeByIdQuery(11);
  const { data: typeTwelveData, isFetching: fetchingTypeTwelve } =
    useGetTypeByIdQuery(12);
  const { data: typeThirteenData, isFetching: fetchingTypeThirteen } =
    useGetTypeByIdQuery(13);
  const { data: typeFourteenData, isFetching: fetchingTypeFourteen } =
    useGetTypeByIdQuery(14);
  const { data: typeFifteenData, isFetching: fetchingTypeFifteen } =
    useGetTypeByIdQuery(15);
  const { data: typeSixteenData, isFetching: fetchingTypeSixteen } =
    useGetTypeByIdQuery(16);
  const {
    data: typeSeventeenData,
    isFetching: fetchingTypeSeventeen,
  } = useGetTypeByIdQuery(17);
  const { data: typeEighteenData, isFetching: fetchingTypeEighteen } =
    useGetTypeByIdQuery(18);

  // MEMO
  const processedAbilities = useMemo(() => {
    const nextAbilities: Ability[] = [];

    if (
      !(
        fetchingAbilityOne ||
        fetchingAbilityTwo ||
        fetchingAbilityThree
      )
    ) {
      if (abilityOneData) {
        nextAbilities.push(abilityOneData);
      }

      if (abilityTwoData) {
        nextAbilities.push(abilityTwoData);
      }

      if (abilityThreeData) {
        nextAbilities.push(abilityThreeData);
      }
    }

    return nextAbilities;
  }, [
    abilityOneData,
    abilityTwoData,
    abilityThreeData,
    fetchingAbilityOne,
    fetchingAbilityTwo,
    fetchingAbilityThree,
  ]);

  const typeToData = useMemo(() => {
    let nextTypeToData: TypeToData = {};

    if (
      typeOneData &&
      typeTwoData &&
      typeThreeData &&
      typeFourData &&
      typeFiveData &&
      typeSixData &&
      typeSevenData &&
      typeEightData &&
      typeNineData &&
      typeTenData &&
      typeElevenData &&
      typeTwelveData &&
      typeThirteenData &&
      typeFourteenData &&
      typeFifteenData &&
      typeSixteenData &&
      typeSeventeenData &&
      typeEighteenData
    ) {
      nextTypeToData = {
        [typeOneData.name]: {
          data: typeOneData,
          displayName: getTypeNameInSelectedLanguage(
            typeOneData,
            language,
          ),
        },
        [typeTwoData.name]: {
          data: typeTwoData,
          displayName: getTypeNameInSelectedLanguage(
            typeTwoData,
            language,
          ),
        },
        [typeThreeData.name]: {
          data: typeThreeData,
          displayName: getTypeNameInSelectedLanguage(
            typeThreeData,
            language,
          ),
        },
        [typeFourData.name]: {
          data: typeFourData,
          displayName: getTypeNameInSelectedLanguage(
            typeFourData,
            language,
          ),
        },
        [typeFiveData.name]: {
          data: typeFiveData,
          displayName: getTypeNameInSelectedLanguage(
            typeFiveData,
            language,
          ),
        },
        [typeSixData.name]: {
          data: typeSixData,
          displayName: getTypeNameInSelectedLanguage(
            typeSixData,
            language,
          ),
        },
        [typeSevenData.name]: {
          data: typeSevenData,
          displayName: getTypeNameInSelectedLanguage(
            typeSevenData,
            language,
          ),
        },
        [typeEightData.name]: {
          data: typeEightData,
          displayName: getTypeNameInSelectedLanguage(
            typeEightData,
            language,
          ),
        },
        [typeNineData.name]: {
          data: typeNineData,
          displayName: getTypeNameInSelectedLanguage(
            typeNineData,
            language,
          ),
        },
        [typeTenData.name]: {
          data: typeTenData,
          displayName: getTypeNameInSelectedLanguage(
            typeTenData,
            language,
          ),
        },
        [typeElevenData.name]: {
          data: typeElevenData,
          displayName: getTypeNameInSelectedLanguage(
            typeElevenData,
            language,
          ),
        },
        [typeTwelveData.name]: {
          data: typeTwelveData,
          displayName: getTypeNameInSelectedLanguage(
            typeTwelveData,
            language,
          ),
        },
        [typeThirteenData.name]: {
          data: typeThirteenData,
          displayName: getTypeNameInSelectedLanguage(
            typeThirteenData,
            language,
          ),
        },
        [typeFourteenData.name]: {
          data: typeFourteenData,
          displayName: getTypeNameInSelectedLanguage(
            typeFourteenData,
            language,
          ),
        },
        [typeFifteenData.name]: {
          data: typeFifteenData,
          displayName: getTypeNameInSelectedLanguage(
            typeFifteenData,
            language,
          ),
        },
        [typeSixteenData.name]: {
          data: typeSixteenData,
          displayName: getTypeNameInSelectedLanguage(
            typeSixteenData,
            language,
          ),
        },
        [typeSeventeenData.name]: {
          data: typeSeventeenData,
          displayName: getTypeNameInSelectedLanguage(
            typeSeventeenData,
            language,
          ),
        },
        [typeEighteenData.name]: {
          data: typeEighteenData,
          displayName: getTypeNameInSelectedLanguage(
            typeEighteenData,
            language,
          ),
        },
      };
    }

    return nextTypeToData;
  }, [
    language,
    typeOneData,
    typeTwoData,
    typeThreeData,
    typeFourData,
    typeFiveData,
    typeSixData,
    typeSevenData,
    typeEightData,
    typeNineData,
    typeTenData,
    typeElevenData,
    typeTwelveData,
    typeThirteenData,
    typeFourteenData,
    typeFifteenData,
    typeSixteenData,
    typeSeventeenData,
    typeEighteenData,
  ]);

  // LOCAL STATE
  const [typeEffectiveness, setTypeEffectiveness] =
    useState<PokemonTypeEffectiveness>({
      weakTo: [],
      damagedNormallyBy: [],
      resistantTo: [],
      immuneTo: [],
      abilities: [],
    });

  // EFFECTS
  useEffect(() => {
    if (
      pokemonData &&
      processedAbilities.length !== 0 &&
      Object.keys(typeToData).length !== 0
    ) {
      const [typeOne, typeTwo] = pokemonData.types.map(
        (type) => type.name,
      );
      setTypeEffectiveness(
        getTypeEffectivenessForPokemon(
          typeOne,
          typeTwo,
          processedAbilities,
          typeToData,
          language,
        ),
      );
    }
  }, [language, pokemonData, processedAbilities, typeToData]);

  return {
    typeEffectiveness,
    loading:
      fetchingPokemon ||
      fetchingAbilityOne ||
      fetchingAbilityTwo ||
      fetchingAbilityThree ||
      fetchingTypeOne ||
      fetchingTypeTwo ||
      fetchingTypeThree ||
      fetchingTypeFour ||
      fetchingTypeFive ||
      fetchingTypeSix ||
      fetchingTypeSeven ||
      fetchingTypeEight ||
      fetchingTypeNine ||
      fetchingTypeTen ||
      fetchingTypeEleven ||
      fetchingTypeTwelve ||
      fetchingTypeThirteen ||
      fetchingTypeFourteen ||
      fetchingTypeFifteen ||
      fetchingTypeSixteen ||
      fetchingTypeSeventeen ||
      fetchingTypeEighteen,
  };
};
