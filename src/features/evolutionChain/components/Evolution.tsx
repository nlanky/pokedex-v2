// REACT
import { FC, ReactNode } from 'react';

// LOCAL FILES
// Components
import { Wave } from 'features/common/components';
import { Sprite } from 'features/sprites/components';
// Hooks
import { useEvolution } from 'features/evolutionChain/hooks';
// Styling
import 'features/evolutionChain/components/Evolution.css';

interface EvolutionProps {
  stage: number;
  speciesId: number;
  children: ReactNode;
}

export const Evolution: FC<EvolutionProps> = ({
  stage,
  speciesId,
  children,
}) => {
  // CUSTOM HOOKS
  const { evolution, loading } = useEvolution(stage, speciesId);

  return (
    <div className="evolution-wrapper">
      {loading && <Wave />}
      {!loading && (
        <>
          <div className="evolution-sprite-wrapper">
            <Sprite
              altText={`${evolution.name} sprite`}
              spriteUrl={evolution.sprite}
            />
          </div>
          <span>{evolution.name}</span>
          <span>{evolution.stage}</span>
          {children}
        </>
      )}
    </div>
  );
};
