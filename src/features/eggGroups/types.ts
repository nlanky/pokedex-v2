// LOCAL FILES
// Interfaces & Types
import { Name, NamedAPIResource } from 'features/common/types';

export interface EggGroup {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: NamedAPIResource[];
}

export interface FormattedEggGroup {
  name: string;
  count: number;
}
