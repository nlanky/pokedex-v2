// LOCAL FILES
// Interfaces & Types
import { Name, NamedAPIResource } from 'features/common/types';
import { GenerationGameIndex } from 'features/version/types';

export interface Encounter {
  min_level: number;
  max_level: number;
  condition_values: NamedAPIResource[];
  chance: number;
  method: NamedAPIResource;
}

export interface VersionEncounterDetail {
  max_chance: number;
  encounter_details: Encounter[];
  version: NamedAPIResource;
}

export interface LocationAreaEncounter {
  location_area: NamedAPIResource;
  version_details: VersionEncounterDetail[];
}

export interface EncounterVersionDetails {
  rate: number;
  version: NamedAPIResource;
}

export interface EncounterMethodRate {
  encounter_method: NamedAPIResource;
  version_details: EncounterVersionDetails[];
}

export interface PokemonEncounter {
  pokemon: NamedAPIResource;
  version_details: VersionEncounterDetail[];
}

export interface Location {
  id: number;
  name: string;
  region: NamedAPIResource;
  names: Name[];
  game_indices: GenerationGameIndex[];
  areas: NamedAPIResource[];
}

export interface LocationArea {
  id: number;
  name: string;
  game_index: number;
  encounter_method_rates: EncounterMethodRate[];
  location: NamedAPIResource;
  names: Name[];
  pokemon_encounters: PokemonEncounter[];
}

export interface PalParkEncounterArea {
  base_score: number;
  rate: number;
  area: NamedAPIResource;
}

// Used for transformResponse
export interface ProcessedEncounters {
  [generation: number]: {
    [version_id: number]: number[]; // Array of location area IDs
  };
}
