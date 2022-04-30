// REACT
import { FC, ReactNode } from 'react';

// LOCAL FILES
// Styling
import 'features/navigation/components/MiscButtonColumn.css';

interface MiscButtonColumnProps {
  orientation: 'left' | 'right';
  children: ReactNode;
}

export const MiscButtonColumn: FC<MiscButtonColumnProps> = ({
  orientation,
  children,
}) => {
  return (
    <div
      className="misc-button-col"
      style={{
        // TODO: This is kinda nonsensical
        alignItems: orientation === 'left' ? 'stretch' : 'flex-end',
        flexDirection: orientation === 'left' ? 'row' : 'column',
      }}
    >
      {children}
    </div>
  );
};
