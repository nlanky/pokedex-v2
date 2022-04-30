// LOCAL FILES
// Interfaces & Types
import { AbilityEffectChange } from 'features/abilities/types';
import {
  APIResource,
  Description,
  Name,
  NamedAPIResource,
  VerboseEffect,
} from 'features/common/types';
import { ContestComboSets } from 'features/contests/types';
import { MachineVersionDetail } from 'features/machines/types';

export interface MoveFlavorText {
  flavor_text: string;
  language: NamedAPIResource;
  version_group: NamedAPIResource;
}

export interface MoveMetaData {
  ailment: NamedAPIResource;
  category: NamedAPIResource;
  min_hits: number;
  max_hits: number;
  min_turns: number;
  max_turns: number;
  drain: number;
  healing: number;
  crit_rate: number;
  ailment_chance: number;
  flinch_chance: number;
  stat_chance: number;
}

export interface MoveStatChange {
  change: number;
  stat: NamedAPIResource;
}

export interface PastMoveStatValues {
  accuracy: number;
  effect_chance: number;
  power: number;
  pp: number;
  effect_entries: VerboseEffect[];
  type: NamedAPIResource;
  version_group: NamedAPIResource;
}

export interface Move {
  id: number;
  name: string;
  accuracy: number;
  effect_chance: number;
  pp: number;
  priority: number;
  power: number;
  contest_combos: ContestComboSets;
  contest_type: NamedAPIResource;
  contest_effect: APIResource;
  damage_class: NamedAPIResource;
  effect_entries: VerboseEffect[];
  effect_changes: AbilityEffectChange[];
  learned_by_pokemon: NamedAPIResource[];
  flavor_text_entries: MoveFlavorText[];
  generation: NamedAPIResource;
  machines: MachineVersionDetail[];
  meta: MoveMetaData;
  names: Name[];
  past_values: PastMoveStatValues[];
  stat_change: MoveStatChange[];
  super_contest_effect: APIResource;
  target: NamedAPIResource;
  type: NamedAPIResource;
}

export interface PokemonMoveVersion {
  move_learn_method: NamedAPIResource;
  version_group: NamedAPIResource;
  level_learned_at: number;
}

export interface PokemonMove {
  move: NamedAPIResource;
  version_group_details: PokemonMoveVersion[];
}

export interface MoveLearnMethod {
  id: number;
  name: string;
  descriptions: Description[];
  names: Name[];
  version_groups: NamedAPIResource[];
}

// Used for transformResponse
export interface ProcessedPokemonMove {
  move_id: number;
  move_name: string;
  method_name: string;
  level_learned_at: number;
}

export interface ProcessedPokemonMoves {
  [generation: number]: {
    [method_id: number]: ProcessedPokemonMove[];
  };
}
