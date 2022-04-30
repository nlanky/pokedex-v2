// REACT
import { FC, ReactNode } from 'react';

// LOCAL FILES
// Styling
import 'features/navigation/components/MiscButtonContainer.css';

interface MiscButtonContainerProps {
  children: ReactNode;
}

export const MiscButtonContainer: FC<MiscButtonContainerProps> = ({
  children,
}) => {
  return <div className="misc-button-container">{children}</div>;
};
