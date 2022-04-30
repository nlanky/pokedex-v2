// REACT
import { VoidFunctionComponent } from 'react';

// LOCAL FILES
// Components
import { Wave } from 'features/common/components';
import { Stat } from 'features/stats/components';
// Hooks
import { useStats } from 'features/stats/hooks';
// Styling
import 'features/stats/components/Stats.css';

export const Stats: VoidFunctionComponent = () => {
  // CUSTOM HOOKS
  const { stats, loading } = useStats();

  return (
    <div className="stats-container">
      {loading && <Wave />}
      {!loading && (
        <>
          {stats.map((stat) => {
            const { id, value } = stat;

            return <Stat key={id} id={id} value={value} />;
          })}
        </>
      )}
    </div>
  );
};
