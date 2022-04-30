// REACT
import { VoidFunctionComponent } from 'react';

// LOCAL FILES
// Components
import { Wave } from 'features/common/components';
// Hooks
import { useHeightAndWeight } from 'features/pokemon/hooks';
// Styling
import 'features/pokemon/components/HeightWeight.css';

export const HeightWeight: VoidFunctionComponent = () => {
  // CUSTOM HOOKS
  const { height, weight, loading } = useHeightAndWeight();

  return (
    <div className="height-weight-container">
      {loading && <Wave />}
      {!loading && (
        <>
          <div className="height-weight-wrapper">
            <span>Height</span>
            <span>{`${height / 10}m`}</span>
          </div>
          <div className="height-weight-wrapper">
            <span>Weight</span>
            <span>{`${weight / 10}kg`}</span>
          </div>
        </>
      )}
    </div>
  );
};
