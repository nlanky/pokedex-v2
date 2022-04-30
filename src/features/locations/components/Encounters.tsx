// REACT
import { VoidFunctionComponent } from 'react';

// LOCAL FILES
// Components
import { Wave } from 'features/common/components';
import { GenerationEncounters } from 'features/locations/components';
// Hooks
import { useEncounterAreas } from 'features/locations/hooks';
// Styling
import 'features/locations/components/Encounters.css';

export const Encounters: VoidFunctionComponent = () => {
  // CUSTOM HOOKS
  const { encounterAreas, loading } = useEncounterAreas();

  const noEncounters = Object.keys(encounterAreas).length === 0;
  return (
    <div className="encounter-container">
      {loading && <Wave />}
      {!loading && noEncounters && (
        <div className="no-encounters">No encounters</div>
      )}
      {!loading && !noEncounters && (
        <>
          {Object.keys(encounterAreas).map((generation) => (
            <GenerationEncounters
              key={generation}
              generation={Number(generation)}
            />
          ))}
        </>
      )}
    </div>
  );
};
