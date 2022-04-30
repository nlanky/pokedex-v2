// REACT
import { VoidFunctionComponent } from 'react';

// LOCAL FILES
// Styling
import 'features/pokedex/components/RightScreenHeader.css';

export const RightScreenHeader: VoidFunctionComponent = () => (
  <>
    <div className="right-lid-top" />
    <div className="right-lid-wrapper">
      <div className="right-lid-left">
        <div className="right-lid-left-box" />
      </div>
      <div className="right-lid-middle">
        <div className="right-lid-middle-cut" />
        <div className="right-lid-middle-diagonal" />
      </div>
      <div className="right-lid-right" />
    </div>
    <div className="right-lid-bottom">
      <div className="right-lid-bottom-row">
        <div className="right-lid-bottom-left-col" />
        <div className="right-lid-bottom-right-col" />
      </div>
    </div>
  </>
);
