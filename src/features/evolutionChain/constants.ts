// LOCAL FILES
// Interfaces & Types
import { FormattedEvolutionDetail } from 'features/evolutionChain/types';

export const STAGE_TO_DISPLAY_NAME: Record<number, string> = {
  0: 'Unevolved',
  1: 'First Evolution',
  2: 'Second Evolution',
};

export const GENDER_TO_DISPLAY_NAME: Record<number, string> = {
  1: 'Female',
  2: 'Male',
};

export const RELATIVE_PHYSICAL_STATS_TO_DISPLAY_NAME: Record<
  string,
  string
> = {
  '-1': 'Attack < Defense',
  '0': 'Attack = Defense',
  '1': 'Attack > Defense',
};

export const DEFAULT_FORMATTED_DETAIL: FormattedEvolutionDetail = {
  item: null,
  trigger: null,
  gender: null,
  held_item: null,
  known_move: null,
  known_move_type: null,
  location: null,
  min_level: null,
  min_happiness: null,
  min_beauty: null,
  min_affection: null,
  needs_overworld_rain: null,
  party_species: null,
  party_type: null,
  relative_physical_stats: null,
  time_of_day: null,
  trade_species: null,
  turn_upside_down: null,
};
