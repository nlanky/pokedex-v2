// REACT
import { VoidFunctionComponent } from 'react';

// LOCAL FILES
// Components
import { Wave } from 'features/common/components';
// Hooks
import { useFlavourText } from 'features/species/hooks';

export const FlavourText: VoidFunctionComponent = () => {
  // CUSTOM HOOKS
  const { text, loading } = useFlavourText();

  if (loading) {
    return <Wave />;
  }

  return <>{text}</>;
};
