// LOCAL FILES
// Interfaces & Types
import { Name, NamedAPIResource } from 'features/common/types';

export interface PokemonFormType {
  slot: number;
  type: NamedAPIResource;
}

export interface PokemonFormSprites {
  front_default: string;
  front_shiny: string;
  back_default: string;
  back_shiny: string;
}

export interface PokemonForm {
  id: number;
  name: string;
  order: number;
  form_order: number;
  is_default: boolean;
  is_battle_only: boolean;
  is_mega: boolean;
  form_name: string;
  pokemon: NamedAPIResource;
  types: PokemonFormType[];
  sprites: PokemonFormSprites;
  version_group: NamedAPIResource;
  names: Name[];
  form_names: Name[];
}

export interface PokemonSpeciesVariety {
  is_default: boolean;
  pokemon: NamedAPIResource;
}

export interface ProcessedPokemonSpeciesVariety {
  is_default: boolean;
  pokemon_id: number;
}

export interface VarietiesOrForms {
  varietyIds: number[]; // Array of Pokemon IDs
  formIds: number[]; // Array of form IDs
}

export interface FormattedVarietyOrForm {
  name: string;
  sprite: string;
}
