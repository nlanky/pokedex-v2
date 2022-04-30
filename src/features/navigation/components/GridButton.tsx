// REACT
import { FC } from 'react';

// LOCAL FILES
// Redux
import { useAppDispatch } from 'features/common/redux/hooks';
import {
  SecondaryDisplayName,
  setSecondaryDisplay,
} from 'features/navigation/navigationSlice';
// Styling
import 'features/navigation/components/GridButton.css';

interface GridButtonProps {
  screen: SecondaryDisplayName;
}

export const GridButton: FC<GridButtonProps> = ({ screen }) => {
  // HOOKS
  const dispatch = useAppDispatch();

  // HANDLERS
  const onGridButtonClick = () => {
    // Reset scroll position on secondary display
    const secondaryDisplay = document.getElementById(
      'secondary_display',
    );
    if (secondaryDisplay) {
      secondaryDisplay.scrollTop = 0;
    }

    dispatch(setSecondaryDisplay(screen));
  };

  return (
    <div
      aria-label={`Grid button to navigate to ${screen}`}
      className={`grid-button ${screen}`}
      onClick={onGridButtonClick}
      onKeyDown={() => {}}
      role="button"
      tabIndex={0}
    />
  );
};
