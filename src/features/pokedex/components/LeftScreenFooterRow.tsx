// REACT
import { FC, ReactNode } from 'react';

// LOCAL FILES
// Styling
import 'features/pokedex/components/LeftScreenFooterRow.css';

interface LeftScreenFooterRowProps {
  children: ReactNode;
}

export const LeftScreenFooterRow: FC<LeftScreenFooterRowProps> = ({
  children,
}) => <div className="left-screen-footer-row">{children}</div>;
