// REACT
import { FC } from 'react';

// LOCAL FILES
// Components
import { Wave } from 'features/common/components';
import { Encounter } from 'features/locations/components';
// Hooks
import { useEncounterAreas } from 'features/locations/hooks';
import { useVersionName } from 'features/version/hooks';
// Styling
import 'features/locations/components/VersionEncounters.css';

interface VersionEncountersProps {
  generation: number;
  versionId: number;
}

export const VersionEncounters: FC<VersionEncountersProps> = ({
  generation,
  versionId,
}) => {
  // CUSTOM HOOKS
  const { encounterAreas, loading: loadingEncounters } =
    useEncounterAreas();
  const { name, loading: loadingVersion } = useVersionName(versionId);

  // Loading spinner will be showing in parent component
  if (loadingEncounters) {
    return null;
  }

  return (
    <div className="encounter-version">
      {loadingVersion && <Wave />}
      {!loadingVersion && (
        <>
          <div className="encounter-version-name">{name}</div>
          <div className="encounter-locations">
            {encounterAreas[generation][versionId].map(
              (locationAreaId) => (
                <Encounter
                  key={locationAreaId}
                  locationAreaId={Number(locationAreaId)}
                />
              ),
            )}
          </div>
        </>
      )}
    </div>
  );
};
