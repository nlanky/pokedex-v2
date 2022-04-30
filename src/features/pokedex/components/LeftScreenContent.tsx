// REACT
import { FC, ReactNode } from 'react';

// LOCAL FILES
// Styling
import 'features/pokedex/components/LeftScreenContent.css';

interface LeftScreenContentProps {
  children: ReactNode;
}

export const LeftScreenContent: FC<LeftScreenContentProps> = ({
  children,
}) => <div className="left-screen-content">{children}</div>;
