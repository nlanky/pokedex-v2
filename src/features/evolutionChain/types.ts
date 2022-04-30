// LOCAL FILES
// Interfaces & Types
import { Name, NamedAPIResource } from 'features/common/types';

export interface EvolutionDetail {
  item: NamedAPIResource;
  trigger: NamedAPIResource;
  gender: number;
  held_item: NamedAPIResource;
  known_move: NamedAPIResource;
  known_move_type: NamedAPIResource;
  location: NamedAPIResource;
  min_level: number;
  min_happiness: number;
  min_beauty: number;
  min_affection: number;
  needs_overworld_rain: boolean;
  party_species: NamedAPIResource;
  party_type: NamedAPIResource;
  relative_physical_stats: number;
  time_of_day: string;
  trade_species: NamedAPIResource;
  turn_upside_down: boolean;
}

export interface EvolutionTrigger {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: NamedAPIResource[];
}

export interface ChainLink {
  is_baby: boolean;
  species: NamedAPIResource;
  evolution_details: EvolutionDetail[];
  evolves_to: ChainLink[];
}

export interface EvolutionChain {
  id: number;
  baby_trigger_item: NamedAPIResource;
  chain: ChainLink;
}

export interface FormattedEvolution {
  name: string;
  sprite: string;
  stage: string;
}

export interface FormattedEvolutionDetail {
  item: string | null;
  trigger: {
    name: string;
    displayName: string;
  } | null;
  gender: string | null;
  held_item: string | null;
  known_move: string | null;
  known_move_type: string | null;
  location: string | null;
  min_level: number | null;
  min_happiness: number | null;
  min_beauty: number | null;
  min_affection: number | null;
  needs_overworld_rain: boolean | null;
  party_species: string | null;
  party_type: string | null;
  relative_physical_stats: string | null;
  time_of_day: string | null;
  trade_species: string | null;
  turn_upside_down: boolean | null;
}

// Used in transformResponse
export interface ProcessedEvolutionDetail {
  item_id: number;
  trigger_id: number;
  gender: number;
  held_item_id: number;
  known_move_id: number;
  known_move_type_id: number;
  location_id: number;
  min_level: number;
  min_happiness: number;
  min_beauty: number;
  min_affection: number;
  needs_overworld_rain: boolean;
  party_species_id: number;
  party_type_id: number;
  relative_physical_stats: number;
  time_of_day: string;
  trade_species_id: number;
  turn_upside_down: boolean;
}

export interface ProcessedEvolution {
  stage: number;
  evolution_details: ProcessedEvolutionDetail[];
  species_id: number;
}
