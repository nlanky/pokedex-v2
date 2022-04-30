// REACT
import { VoidFunctionComponent } from 'react';

// LOCAL FILES
// Components
import { Wave } from 'features/common/components';
import { GenerationMoves } from 'features/moves/components';
// Hooks
import { useMoves } from 'features/moves/hooks';
// Styling
import 'features/moves/components/Moves.css';

export const Moves: VoidFunctionComponent = () => {
  // CUSTOM HOOKS
  const { moves, loading } = useMoves();

  return (
    <div className="moves-container">
      {loading && <Wave />}
      {!loading && (
        <>
          {Object.keys(moves).map((generation) => (
            <GenerationMoves
              key={generation}
              generation={Number(generation)}
            />
          ))}
        </>
      )}
    </div>
  );
};
