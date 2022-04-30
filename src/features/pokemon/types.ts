// LOCAL FILES
// Interfaces & Types
import {
  PokemonAbility,
  ProcessedPokemonAbility,
} from 'features/abilities/types';
import { NamedAPIResource } from 'features/common/types';
import { PokemonHeldItem } from 'features/items/types';
import {
  PokemonMove,
  ProcessedPokemonMoves,
} from 'features/moves/types';
import { PokemonSprites } from 'features/sprites/types';
import {
  PokemonStat,
  ProcessedPokemonStat,
} from 'features/stats/types';
import {
  PokemonType,
  PokemonTypePast,
  ProcessedType,
} from 'features/types/types';
import { VersionGameIndex } from 'features/version/types';

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: NamedAPIResource[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  past_types: PokemonTypePast[];
  sprites: PokemonSprites;
  species: NamedAPIResource;
  stats: PokemonStat[];
  types: PokemonType[];
}

// Used for transformResponse
export interface ProcessedPokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: ProcessedPokemonAbility[];
  form_ids: number[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: ProcessedPokemonMoves;
  past_types: PokemonTypePast[];
  sprites: PokemonSprites;
  species_id: number;
  stats: ProcessedPokemonStat[];
  types: ProcessedType[];
}
