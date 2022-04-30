// REACT
import { FC, ReactNode } from 'react';

// LOCAL FILES
// Styling
import 'features/pokedex/components/MainDisplayWrapper.css';

interface MainDisplayWrapperProps {
  children: ReactNode;
}

export const MainDisplayWrapper: FC<MainDisplayWrapperProps> = ({
  children,
}) => <div className="main-display-wrapper">{children}</div>;
