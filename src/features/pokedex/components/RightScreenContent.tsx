// REACT
import { FC, ReactNode } from 'react';

// LOCAL FILES
// Styling
import 'features/pokedex/components/RightScreenContent.css';

interface RightScreenContentProps {
  children: ReactNode;
}

export const RightScreenContent: FC<RightScreenContentProps> = ({
  children,
}) => (
  <div className="right-screen-content">
    <div className="right-screen-content-wrapper">{children}</div>
  </div>
);
