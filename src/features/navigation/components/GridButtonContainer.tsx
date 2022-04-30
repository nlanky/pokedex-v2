// REACT
import { FC, ReactNode } from 'react';

// LOCAL FILES
// Styling
import 'features/navigation/components/GridButtonContainer.css';

interface GridButtonContainerProps {
  children: ReactNode;
}

export const GridButtonContainer: FC<GridButtonContainerProps> = ({
  children,
}) => <div className="grid-button-container">{children}</div>;
