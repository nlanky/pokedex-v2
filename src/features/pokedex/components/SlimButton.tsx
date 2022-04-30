// REACT
import { FC } from 'react';

// LOCAL FILES
// Styling
import 'features/pokedex/components/SlimButton.css';

interface SlimButtonProps {
  colour?: string;
  label: string;
  noMargin?: boolean;
  onClick: () => void;
}

export const SlimButton: FC<SlimButtonProps> = ({
  colour = '#2A2B26',
  label,
  noMargin = false,
  onClick,
}) => {
  const onKeyDown = () => {};

  return (
    <div
      aria-label="Slim button"
      className={`slim-button ${label}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      role="button"
      style={{
        backgroundColor: colour,
        marginRight: noMargin ? 0 : 15,
      }}
      tabIndex={0}
    />
  );
};
