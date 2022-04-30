// REACT
import { FC, ReactNode } from 'react';

// LOCAL FILES
// Styling
import 'features/navigation/components/MiscButtonRow.css';

interface MiscButtonRowProps {
  children: ReactNode;
}

export const MiscButtonRow: FC<MiscButtonRowProps> = ({
  children,
}) => {
  return <div className="misc-button-row">{children}</div>;
};
