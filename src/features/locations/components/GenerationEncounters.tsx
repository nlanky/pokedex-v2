// REACT
import { FC } from 'react';

// LOCAL FILES
// Components
import { VersionEncounters } from 'features/locations/components';
// Hooks
import { useEncounterAreas } from 'features/locations/hooks';
// Styling
import 'features/locations/components/GenerationEncounters.css';

interface GenerationEncountersProps {
  generation: number;
}

export const GenerationEncounters: FC<GenerationEncountersProps> = ({
  generation,
}) => {
  // CUSTOM HOOKS
  const { encounterAreas, loading } = useEncounterAreas();

  // Loading spinner will be showing in parent component
  if (loading) {
    return null;
  }

  return (
    <div className="encounter-generation">
      <div className="encounter-header">
        {`Generation ${generation}`}
      </div>
      {Object.keys(encounterAreas[generation]).map((versionId) => (
        <VersionEncounters
          key={versionId}
          generation={Number(generation)}
          versionId={Number(versionId)}
        />
      ))}
    </div>
  );
};
