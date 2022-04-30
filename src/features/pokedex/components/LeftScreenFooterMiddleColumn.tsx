// REACT
import { FC, ReactNode } from 'react';

// LOCAL FILES
// Styling
import 'features/pokedex/components/LeftScreenFooterMiddleColumn.css';

interface LeftScreenFooterMiddleColumnProps {
  children: ReactNode;
}

export const LeftScreenFooterMiddleColumn: FC<
  LeftScreenFooterMiddleColumnProps
> = ({ children }) => (
  <div className="left-screen-footer-middle-col">{children}</div>
);
