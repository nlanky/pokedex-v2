// LOCAL FILES
// Interfaces & Types
import {
  APIResource,
  Name,
  NamedAPIResource,
  VerboseEffect,
} from 'features/common/types';
import { MachineVersionDetail } from 'features/machines/types';
import {
  GenerationGameIndex,
  VersionGroupFlavorText,
} from 'features/version/types';

export interface PokemonHeldItem {
  item: NamedAPIResource;
  rarity: number;
}

export interface ItemSprites {
  default: string;
}

export interface ItemHolderPokemonVersionDetail {
  rarity: number;
  version: NamedAPIResource;
}

export interface ItemHolderPokemon {
  pokemon: NamedAPIResource;
  version_details: ItemHolderPokemonVersionDetail[];
}

export interface Item {
  id: number;
  name: string;
  cost: number;
  fling_power: number;
  fling_effect: NamedAPIResource;
  attributes: NamedAPIResource[];
  category: NamedAPIResource;
  effect_entries: VerboseEffect[];
  flavor_text_entries: VersionGroupFlavorText[];
  game_indices: GenerationGameIndex[];
  names: Name[];
  sprites: ItemSprites;
  held_by_pokemon: ItemHolderPokemon[];
  baby_trigger_for: APIResource;
  machines: MachineVersionDetail[];
}
