// REACT
import { FC } from 'react';

// LOCAL FILES
// Styling
import 'features/navigation/components/ScrollButton.css';

interface ScrollButtonProps {
  direction: 'up' | 'down';
}

export const ScrollButton: FC<ScrollButtonProps> = ({
  direction,
}) => {
  // HANDLERS
  const onClick = () => {
    const secondaryDisplay = document.getElementById(
      'secondary_display',
    );
    if (secondaryDisplay) {
      const secondaryDisplayHeight = secondaryDisplay.scrollHeight;
      const currentScrollPosition = secondaryDisplay.scrollTop;
      if (direction === 'up') {
        secondaryDisplay.scrollTop = Math.max(
          currentScrollPosition - 20,
          0,
        );
      } else {
        secondaryDisplay.scrollTop = Math.min(
          currentScrollPosition + 20,
          secondaryDisplayHeight,
        );
      }
    }
  };
  const onKeyDown = () => {};

  return (
    <div
      aria-label={`Scroll secondary display ${direction}`}
      className={`white-grid-button ${direction}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
    />
  );
};
