// REACT
import { VoidFunctionComponent } from 'react';

// LOCAL FILES
// Components
import { Wave } from 'features/common/components';
import { TypeDisplay } from 'features/types/components';
// Hooks
import { useTypes } from 'features/types/hooks';
// Styling
import 'features/types/components/TypeDisplayContainer.css';

export const TypeDisplayContainer: VoidFunctionComponent = () => {
  // CUSTOM HOOKS
  const { types, loading } = useTypes();

  return (
    <div className="type-display-container">
      <div className="type-display-wrapper">
        {loading && <Wave />}
        {!loading && types[0] && (
          <TypeDisplay id={types[0].id} name={types[0].name} />
        )}
      </div>

      <div className="type-display-wrapper">
        {loading && <Wave />}
        {!loading && types[1] && (
          <TypeDisplay id={types[1].id} name={types[1].name} />
        )}
      </div>
    </div>
  );
};
