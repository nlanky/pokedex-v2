// REACT
import { FC } from 'react';

// LOCAL FILES
// Components
import { Wave } from 'features/common/components';
// Hooks
import { useStatName } from 'features/stats/hooks';
// Styling
import 'features/stats/components/Stat.css';

interface StatProps {
  id: number;
  value: number;
}

export const Stat: FC<StatProps> = ({ id, value }) => {
  // CUSTOM HOOKS
  const { name, loading } = useStatName(id);

  return (
    <div className="stat-wrapper">
      {loading && <Wave />}
      {!loading && (
        <>
          <span>{name}</span>
          <span>{value}</span>
        </>
      )}
    </div>
  );
};
