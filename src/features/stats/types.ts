// LOCAL FILES
// Interfaces & Types
import {
  APIResource,
  Name,
  NamedAPIResource,
} from 'features/common/types';

export interface PokemonStat {
  stat: NamedAPIResource;
  effort: number;
  base_stat: number;
}

export interface MoveStatAffect {
  change: number;
  move: NamedAPIResource;
}

export interface MoveStatAffectSets {
  increase: MoveStatAffect[];
  decrease: MoveStatAffect[];
}

export interface NatureStatAffectSets {
  increase: NamedAPIResource[];
  decrease: NamedAPIResource[];
}

export interface Stat {
  id: number;
  name: string;
  game_index: number;
  is_battle_only: boolean;
  affecting_moves: MoveStatAffectSets;
  affecting_natures: NatureStatAffectSets;
  characteristics: APIResource[];
  move_damage_class: NamedAPIResource;
  names: Name[];
}

// Used for transformResponse
export interface ProcessedPokemonStat {
  id: number;
  value: number;
}
