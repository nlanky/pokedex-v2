// REACT
import { FC } from 'react';

// LOCAL FILES
// Components
import { Wave } from 'features/common/components';
// Hooks
import { useMoveName } from 'features/moves/hooks';
// Styling
import 'features/moves/components/Move.css';

interface MoveProps {
  id: number;
  methodName: string;
  levelLearnedAt: number;
}

export const Move: FC<MoveProps> = ({
  id,
  methodName,
  levelLearnedAt,
}) => {
  // CUSTOM HOOKS
  const { name, loading } = useMoveName(id);

  // DERIVED VARIABLES
  const isLevelUp = methodName === 'level-up';

  return (
    <div className="moves-row">
      {loading && <Wave />}
      {!loading && (
        <>
          <div
            className={isLevelUp ? 'moves-name-level' : 'moves-name'}
          >
            {name}
          </div>
          {isLevelUp && (
            <div className="moves-level">
              Level
              {` ${levelLearnedAt}`}
            </div>
          )}
        </>
      )}
    </div>
  );
};
