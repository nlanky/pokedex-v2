// REACT
import { FC, ReactNode } from 'react';

// LOCAL FILES
// Styling
import 'features/pokedex/components/LeftScreenFooterLeftColumn.css';

interface LeftScreenFooterLeftColumnProps {
  children: ReactNode;
}

export const LeftScreenFooterLeftColumn: FC<
  LeftScreenFooterLeftColumnProps
> = ({ children }) => (
  <div className="left-screen-footer-left-col">{children}</div>
);
