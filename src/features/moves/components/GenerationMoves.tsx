// REACT
import { FC } from 'react';

// LOCAL FILES
// Components
import { MethodMoves } from 'features/moves/components';
// Hooks
import { useMoves } from 'features/moves/hooks';
// Styling
import 'features/moves/components/GenerationMoves.css';

interface GenerationMovesProps {
  generation: number;
}

export const GenerationMoves: FC<GenerationMovesProps> = ({
  generation,
}) => {
  // CUSTOM HOOKS
  const { moves, loading } = useMoves();

  // Loading spinner will be showing in parent component
  if (loading) {
    return null;
  }

  return (
    <div className="moves-generation">
      <div className="moves-header">{`Generation ${generation}`}</div>

      {Object.keys(moves[generation]).map((methodId) => (
        <MethodMoves
          key={methodId}
          generation={generation}
          methodId={Number(methodId)}
        />
      ))}
    </div>
  );
};
