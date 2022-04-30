// REACT
import { VoidFunctionComponent } from 'react';

// LOCAL FILES
// Components
import { Wave } from 'features/common/components';
import { EggGroup } from 'features/eggGroups/components';
// Hooks
import { useEggGroupIds } from 'features/eggGroups/hooks';
// Styling
import 'features/eggGroups/components/EggGroups.css';

export const EggGroups: VoidFunctionComponent = () => {
  // CUSTOM HOOKS
  const { eggGroupIds, loading } = useEggGroupIds();

  return (
    <div className="egg-group-container">
      {loading && <Wave />}
      {!loading && (
        <>
          {eggGroupIds.map((id) => (
            <EggGroup key={id} id={id} />
          ))}
        </>
      )}
    </div>
  );
};
