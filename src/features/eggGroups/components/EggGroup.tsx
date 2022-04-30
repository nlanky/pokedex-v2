// REACT
import { FC } from 'react';

// LOCAL FILES
// Components
import { Wave } from 'features/common/components';
// Hooks
import { useEggGroup } from 'features/eggGroups/hooks';
// Styling
import 'features/eggGroups/components/EggGroup.css';

interface EggGroupProps {
  id: number;
}

export const EggGroup: FC<EggGroupProps> = ({ id }) => {
  // CUSTOM HOOKS
  const { eggGroup, loading } = useEggGroup(id);

  return (
    <div className="egg-group-wrapper">
      {loading && <Wave />}
      {!loading && (
        <>
          <span className="egg-group-name">{eggGroup.name}</span>
          <span>
            Pok&eacute;mon in group:
            {` ${eggGroup.count}`}
          </span>
        </>
      )}
    </div>
  );
};
