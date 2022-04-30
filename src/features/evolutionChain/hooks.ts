// REACT
import { useEffect, useState } from 'react';

// LOCAL FILES
// Constants
import {
  DEFAULT_FORMATTED_DETAIL,
  GENDER_TO_DISPLAY_NAME,
  RELATIVE_PHYSICAL_STATS_TO_DISPLAY_NAME,
  STAGE_TO_DISPLAY_NAME,
} from 'features/evolutionChain/constants';
// Hooks
import { useSpecies } from 'features/species/hooks';
// Interfaces & Types
import {
  FormattedEvolution,
  FormattedEvolutionDetail,
  ProcessedEvolutionDetail,
} from 'features/evolutionChain/types';
// Redux
import { useAppSelector } from 'features/common/redux/hooks';
import {
  useGetEvolutionChainByIdQuery,
  useGetEvolutionTriggerByIdQuery,
} from 'features/evolutionChain/api';
import { useGetItemByIdQuery } from 'features/items/api';
import { useGetLocationByIdQuery } from 'features/locations/api';
import { useGetMoveByIdQuery } from 'features/moves/api';
import { useGetPokemonByIdQuery } from 'features/pokemon/api';
import { useGetSpeciesByIdQuery } from 'features/species/api';
import { useGetTypeByIdQuery } from 'features/types/api';
// Utility Functions
import { getEvolutionTriggerNameInSelectedLanguage } from 'features/evolutionChain/utils';
import { getItemNameInSelectedLanguage } from 'features/items/utils';
import { getLocationNameInSelectedLanguage } from 'features/locations/utils';
import { getMoveNameInSelectedLanguage } from 'features/moves/utils';
import { getPokemonNameInSelectedLanguage } from 'features/species/utils';
import { getSpriteArrayFromObject } from 'features/sprites/utils';
import { getTypeNameInSelectedLanguage } from 'features/types/utils';

export const useEvolutionChain = () => {
  // CUSTOM HOOKS
  const { species, loading: loadingSpecies } = useSpecies();

  // RTK QUERY
  const { data: evolutionChain, isFetching: loadingEvolutionChain } =
    useGetEvolutionChainByIdQuery(
      species?.evolution_chain_id || NaN,
      {
        skip: !species,
      },
    );

  return {
    evolutionChain: evolutionChain || [],
    loading: loadingSpecies || loadingEvolutionChain,
  };
};

export const useEvolution = (stage: number, speciesId: number) => {
  // REDUX
  const language = useAppSelector((state) => state.settings.language);

  // RTK QUERY
  const { data: species, isFetching: loadingSpecies } =
    useGetSpeciesByIdQuery(speciesId);

  // DERIVED VARIABLES
  const pokemonId =
    species?.varieties.find((variety) => variety.is_default)
      ?.pokemon_id || NaN;

  // RTK QUERY
  const { data: pokemon, isFetching: loadingPokemon } =
    useGetPokemonByIdQuery(pokemonId, {
      skip: !species,
    });

  // LOCAL STATE
  const [evolution, setEvolution] = useState<FormattedEvolution>({
    name: '',
    sprite: '',
    stage: '',
  });

  // EFFECTS
  useEffect(() => {
    if (pokemon && species) {
      setEvolution({
        name: getPokemonNameInSelectedLanguage(species, language),
        sprite: getSpriteArrayFromObject(pokemon)[0],
        stage: STAGE_TO_DISPLAY_NAME[stage],
      });
    }
  }, [language, pokemon, species, stage]);

  return {
    evolution,
    loading: loadingPokemon || loadingSpecies,
  };
};

export const useEvolutionDetail = (
  detail: ProcessedEvolutionDetail,
) => {
  const {
    item_id,
    trigger_id,
    gender,
    held_item_id,
    known_move_id,
    known_move_type_id,
    location_id,
    min_level,
    min_happiness,
    min_beauty,
    min_affection,
    needs_overworld_rain,
    party_species_id,
    party_type_id,
    relative_physical_stats,
    time_of_day,
    trade_species_id,
    turn_upside_down,
  } = detail;

  // REDUX
  const language = useAppSelector((state) => state.settings.language);

  // RTK QUERY
  const { data: item, isFetching: loadingItem } = useGetItemByIdQuery(
    item_id,
    {
      skip: isNaN(item_id),
    },
  );
  const { data: trigger, isFetching: loadingTrigger } =
    useGetEvolutionTriggerByIdQuery(trigger_id, {
      skip: isNaN(trigger_id),
    });
  const { data: heldItem, isFetching: loadingHeldItem } =
    useGetItemByIdQuery(held_item_id, {
      skip: isNaN(held_item_id),
    });
  const { data: knownMove, isFetching: loadingKnownMove } =
    useGetMoveByIdQuery(known_move_id, {
      skip: isNaN(known_move_id),
    });
  const { data: knownMoveType, isFetching: loadingKnownMoveType } =
    useGetTypeByIdQuery(known_move_type_id, {
      skip: isNaN(known_move_type_id),
    });
  const { data: location, isFetching: loadingLocation } =
    useGetLocationByIdQuery(location_id, {
      skip: isNaN(location_id),
    });
  const { data: partySpecies, isFetching: loadingPartySpecies } =
    useGetSpeciesByIdQuery(party_species_id, {
      skip: isNaN(party_species_id),
    });
  const { data: partyType, isFetching: loadingPartyType } =
    useGetTypeByIdQuery(party_type_id, {
      skip: isNaN(party_type_id),
    });
  const { data: tradeSpecies, isFetching: loadingTradeSpecies } =
    useGetSpeciesByIdQuery(trade_species_id, {
      skip: isNaN(trade_species_id),
    });

  // LOCAL STATE
  const [formattedDetail, setFormattedDetail] =
    useState<FormattedEvolutionDetail>({
      ...DEFAULT_FORMATTED_DETAIL,
    });

  // EFFECTS
  useEffect(() => {
    // Don't know which evolution details we'll have so just wait for requests to finish
    if (
      !(
        loadingHeldItem ||
        loadingItem ||
        loadingKnownMove ||
        loadingKnownMoveType ||
        loadingLocation ||
        loadingPartySpecies ||
        loadingPartyType ||
        loadingTradeSpecies ||
        loadingTrigger
      )
    ) {
      const nextFormattedDetail = { ...DEFAULT_FORMATTED_DETAIL };

      if (item) {
        nextFormattedDetail.item = getItemNameInSelectedLanguage(
          item,
          language,
        );
      }

      if (trigger) {
        nextFormattedDetail.trigger = {
          name: trigger.name,
          displayName: getEvolutionTriggerNameInSelectedLanguage(
            trigger,
            language,
          ),
        };
      }

      if (gender) {
        nextFormattedDetail.gender = GENDER_TO_DISPLAY_NAME[gender];
      }

      if (heldItem) {
        nextFormattedDetail.held_item = getItemNameInSelectedLanguage(
          heldItem,
          language,
        );
      }

      if (knownMove) {
        nextFormattedDetail.known_move =
          getMoveNameInSelectedLanguage(knownMove, language);
      }

      if (knownMoveType) {
        nextFormattedDetail.known_move_type =
          getTypeNameInSelectedLanguage(knownMoveType, language);
      }

      if (location) {
        nextFormattedDetail.location =
          getLocationNameInSelectedLanguage(location, language);
      }

      if (min_level) {
        nextFormattedDetail.min_level = min_level;
      }

      if (min_happiness) {
        nextFormattedDetail.min_happiness = min_happiness;
      }

      if (min_beauty) {
        nextFormattedDetail.min_beauty = min_beauty;
      }

      if (min_affection) {
        nextFormattedDetail.min_affection = min_affection;
      }

      if (needs_overworld_rain) {
        nextFormattedDetail.needs_overworld_rain =
          needs_overworld_rain;
      }

      if (partySpecies) {
        nextFormattedDetail.party_species =
          getPokemonNameInSelectedLanguage(partySpecies, language);
      }

      if (partyType) {
        nextFormattedDetail.party_type =
          getTypeNameInSelectedLanguage(partyType, language);
      }

      if (relative_physical_stats) {
        nextFormattedDetail.relative_physical_stats =
          RELATIVE_PHYSICAL_STATS_TO_DISPLAY_NAME[
            relative_physical_stats
          ];
      }

      if (time_of_day) {
        nextFormattedDetail.time_of_day = time_of_day;
      }

      if (tradeSpecies) {
        nextFormattedDetail.trade_species =
          getPokemonNameInSelectedLanguage(tradeSpecies, language);
      }

      if (turn_upside_down) {
        nextFormattedDetail.turn_upside_down = turn_upside_down;
      }

      setFormattedDetail(nextFormattedDetail);
    }
  }, [
    language,
    gender,
    heldItem,
    item,
    knownMove,
    knownMoveType,
    location,
    min_affection,
    min_beauty,
    min_happiness,
    min_level,
    needs_overworld_rain,
    partySpecies,
    partyType,
    relative_physical_stats,
    time_of_day,
    tradeSpecies,
    trigger,
    turn_upside_down,
    loadingHeldItem,
    loadingItem,
    loadingKnownMove,
    loadingKnownMoveType,
    loadingLocation,
    loadingPartySpecies,
    loadingPartyType,
    loadingTradeSpecies,
    loadingTrigger,
  ]);

  return {
    detail: formattedDetail,
    loading:
      loadingHeldItem ||
      loadingItem ||
      loadingKnownMove ||
      loadingKnownMoveType ||
      loadingLocation ||
      loadingPartySpecies ||
      loadingPartyType ||
      loadingTradeSpecies ||
      loadingTrigger,
  };
};
