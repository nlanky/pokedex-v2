// REACT
import { FC } from 'react';

// LOCAL FILES
// Components
import { Wave } from 'features/common/components';
import { Move } from 'features/moves/components';
// Hooks
import { useMethodName, useMoves } from 'features/moves/hooks';
// Styling
import 'features/moves/components/MethodMoves.css';

interface MethodMovesProps {
  generation: number;
  methodId: number;
}

export const MethodMoves: FC<MethodMovesProps> = ({
  generation,
  methodId,
}) => {
  // CUSTOM HOOKS
  const { moves, loading: loadingMoves } = useMoves();
  const { name, loading: loadingMethod } = useMethodName(methodId);

  // Loading spinner will be showing in parent component
  if (loadingMoves) {
    return null;
  }

  return (
    <div className="moves-method-container">
      {loadingMethod && <Wave />}
      {!loadingMethod && (
        <>
          <div className="moves-method-header">{name}</div>

          {moves[generation][methodId].map((move) => {
            const { move_id, method_name, level_learned_at } = move;

            return (
              <Move
                key={move_id}
                id={move_id}
                methodName={method_name}
                levelLearnedAt={level_learned_at}
              />
            );
          })}
        </>
      )}
    </div>
  );
};
