// REACT
import { FC, ReactNode } from 'react';

// LOCAL FILES
// Styling
import 'features/pokedex/components/LeftScreen.css';

interface LeftScreenProps {
  children: ReactNode;
}

export const LeftScreen: FC<LeftScreenProps> = ({ children }) => (
  <div className="left-screen">{children}</div>
);
