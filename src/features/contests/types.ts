// LOCAL FILES
// Interfaces & Types
import { NamedAPIResource } from 'features/common/types';

export interface ContestComboDetail {
  use_before: NamedAPIResource[];
  use_after: NamedAPIResource[];
}

export interface ContestComboSets {
  normal: ContestComboDetail;
  super: ContestComboDetail;
}
