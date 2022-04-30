// REACT
import { FC, ReactNode } from 'react';

// LOCAL FILES
// Styling
import 'features/pokedex/components/MainDisplayFooter.css';

interface MainDisplayFooterProps {
  children: ReactNode;
}

export const MainDisplayFooter: FC<MainDisplayFooterProps> = ({
  children,
}) => <div className="main-display-footer">{children}</div>;
