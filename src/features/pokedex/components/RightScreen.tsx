// REACT
import { FC, ReactNode } from 'react';

// LOCAL FILES
// Styling
import 'features/pokedex/components/RightScreen.css';

interface RightScreenProps {
  children: ReactNode;
}

export const RightScreen: FC<RightScreenProps> = ({ children }) => (
  <div className="right-screen">{children}</div>
);
