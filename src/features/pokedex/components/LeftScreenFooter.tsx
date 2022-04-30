// REACT
import { FC, ReactNode } from 'react';

// LOCAL FILES
// Styling
import 'features/pokedex/components/LeftScreenFooter.css';

interface LeftScreenFooterProps {
  children: ReactNode;
}

export const LeftScreenFooter: FC<LeftScreenFooterProps> = ({
  children,
}) => <div className="left-screen-footer">{children}</div>;
