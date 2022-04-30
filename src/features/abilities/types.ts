// LOCAL FILES
// Interfaces & Types
import {
  Effect,
  Name,
  NamedAPIResource,
  VerboseEffect,
} from 'features/common/types';

export interface AbilityEffectChange {
  effect_entries: Effect[];
  version_group: NamedAPIResource;
}

export interface AbilityFlavorText {
  flavor_text: string;
  language: NamedAPIResource;
  version_group: NamedAPIResource;
}

export interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
}

export interface Ability {
  id: number;
  name: string;
  is_main_series: boolean;
  generation: NamedAPIResource;
  names: Name[];
  effect_entries: VerboseEffect[];
  effect_changes: AbilityEffectChange[];
  flavor_text_entries: AbilityFlavorText[];
  pokemon: PokemonAbility[];
}

export interface FormattedAbility {
  name: string;
  flavourText: string;
}

// Used in transformResponse
export interface ProcessedPokemonAbility {
  id: number;
  is_hidden: boolean;
}
