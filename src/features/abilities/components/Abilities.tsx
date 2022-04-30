// REACT
import { VoidFunctionComponent } from 'react';

// LOCAL FILES
// Components
import { Ability } from 'features/abilities/components';
import { Wave } from 'features/common/components';
// Hooks
import { useAbilities } from 'features/abilities/hooks';
// Styling
import 'features/abilities/components/Abilities.css';

export const Abilities: VoidFunctionComponent = () => {
  // CUSTOM HOOKS
  const { abilities, loading } = useAbilities();

  return (
    <div
      className="ability-container"
      style={{
        justifyContent: loading ? 'center' : 'normal',
      }}
    >
      {loading && <Wave />}
      {!loading && (
        <>
          {abilities.map((ability) => {
            const { id, is_hidden } = ability;

            return <Ability key={id} id={id} hidden={is_hidden} />;
          })}
        </>
      )}
    </div>
  );
};
