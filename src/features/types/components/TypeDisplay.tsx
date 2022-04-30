// REACT
import { FC } from 'react';

// LOCAL FILES
// Components
import { Wave } from 'features/common/components';
// Constants
import { TYPE_TO_COLOUR } from 'features/types/constants';
// Hooks
import { useTypeName } from 'features/types/hooks';
// Styling
import 'features/types/components/TypeDisplay.css';

interface TypeDisplayProps {
  id: number;
  name: string;
}

export const TypeDisplay: FC<TypeDisplayProps> = ({ id, name }) => {
  // CUSTOM HOOKS
  const { name: displayName, loading } = useTypeName(id);

  // DERIVED VARIABLES
  const backgroundColor = TYPE_TO_COLOUR[name];

  if (loading) {
    return <Wave />;
  }

  return (
    <div className="type-display" style={{ backgroundColor }}>
      {displayName}
    </div>
  );
};
