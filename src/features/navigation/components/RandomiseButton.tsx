// REACT
import { VoidFunctionComponent } from 'react';

// LOCAL FILES
// Redux
import { useAppDispatch } from 'features/common/redux/hooks';
import { randomiseId } from 'features/navigation/navigationSlice';
// Styling
import 'features/navigation/components/RandomiseButton.css';

export const RandomiseButton: VoidFunctionComponent = () => {
  // HOOKS
  const dispatch = useAppDispatch();

  // HANDLERS
  const onClick = () => {
    dispatch(randomiseId());
  };

  return (
    <div
      aria-label="Random Pokémon button"
      className="randomise-button"
      onClick={onClick}
      onKeyDown={() => {}}
      role="button"
      tabIndex={0}
    />
  );
};
