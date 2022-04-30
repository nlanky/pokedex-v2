// REACT
import { FC } from 'react';

// LOCAL FILES
// Components
import { Wave } from 'features/common/components';
// Hooks
import { useEncounterAreaName } from 'features/locations/hooks';
// Styling
import 'features/locations/components/Encounter.css';

interface EncounterProps {
  locationAreaId: number;
}

export const Encounter: FC<EncounterProps> = ({ locationAreaId }) => {
  // CUSTOM HOOKS
  const { name, loading } = useEncounterAreaName(locationAreaId);

  if (loading) {
    return <Wave />;
  }

  return <span className="encounter-location">{name}</span>;
};
