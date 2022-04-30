// REACT
import { FC, ReactNode } from 'react';

// LOCAL FILES
// Styling
import 'features/pokedex/components/LeftScreenFooterRightColumn.css';

interface LeftScreenFooterRightColumnProps {
  children: ReactNode;
}

export const LeftScreenFooterRightColumn: FC<
  LeftScreenFooterRightColumnProps
> = ({ children }) => (
  <div className="left-screen-footer-right-col">{children}</div>
);
