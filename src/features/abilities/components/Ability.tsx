// REACT
import { FC } from 'react';

// LOCAL FILES
// Components
import { Wave } from 'features/common/components';
// Hooks
import { useAbility } from 'features/abilities/hooks';
// Styling
import 'features/abilities/components/Ability.css';

interface AbilityProps {
  id: number;
  hidden: boolean;
}

export const Ability: FC<AbilityProps> = ({ id, hidden }) => {
  // CUSTOM HOOKS
  const { ability, loading } = useAbility(id);

  return (
    <div className="ability-wrapper">
      {loading && <Wave />}
      {!loading && (
        <>
          <div className="ability-name">
            {`${ability.name}${hidden ? ' (Hidden)' : ''}`}
          </div>
          <div className="ability-description">
            {ability.flavourText}
          </div>
        </>
      )}
    </div>
  );
};
