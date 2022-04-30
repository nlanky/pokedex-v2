// LOCAL FILES
// Interfaces & Types
import { Name, NamedAPIResource } from 'features/common/types';
import { GenerationGameIndex } from 'features/version/types';

// This type is duplicated in the PokeAPI docs...
export interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}

export interface TypePokemon {
  slot: number;
  type: NamedAPIResource;
}

export interface PokemonTypePast {
  generation: NamedAPIResource;
  types: PokemonType[];
}

export interface TypeRelations {
  no_damage_to: NamedAPIResource[];
  half_damage_to: NamedAPIResource[];
  double_damage_to: NamedAPIResource[];
  no_damage_from: NamedAPIResource[];
  half_damage_from: NamedAPIResource[];
  double_damage_from: NamedAPIResource[];
}

export interface TypeRelationsPast {
  generation: NamedAPIResource;
  damage_relations: TypeRelations;
}

export interface Type {
  id: number;
  name: string;
  damage_relations: TypeRelations;
  past_damage_relations: TypeRelationsPast[];
  game_indices: GenerationGameIndex[];
  generation: NamedAPIResource;
  move_damage_class: NamedAPIResource;
  names: Name[];
  pokemon: TypePokemon[];
  moves: NamedAPIResource[];
}

export interface TypeToData {
  [type: string]: {
    data: Type;
    displayName: string;
  };
}

export interface FormattedTypeEffectiveness {
  type: string;
  displayName: string;
  multiplier: number;
}

export interface FormattedEffectivenessAbility {
  name: string;
  description: string;
}

export interface PokemonTypeEffectiveness {
  weakTo: FormattedTypeEffectiveness[];
  damagedNormallyBy: FormattedTypeEffectiveness[];
  resistantTo: FormattedTypeEffectiveness[];
  immuneTo: FormattedTypeEffectiveness[];
  abilities: FormattedEffectivenessAbility[];
}

// Used for transformResponse
export interface ProcessedType {
  id: number;
  name: string;
}
