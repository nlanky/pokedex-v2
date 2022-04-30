// REACT
import { VoidFunctionComponent } from 'react';

// LOCAL FILES
// Styling
import 'features/pokedex/components/LeftScreenHeader.css';

export const LeftScreenHeader: VoidFunctionComponent = () => (
  <div className="left-screen-header">
    <div className="lights-container">
      <div className="mic-light-holder">
        <div className="mic-light" />
      </div>
      <div className="indicator-light red" />
      <div className="indicator-light yellow" />
      <div className="indicator-light green" />
    </div>
    <div className="lid-middle">
      <div className="lid-diagonal" />
    </div>
    <div className="lid-right">
      <div className="lid-right-top" />
      <div className="lid-right-bottom" />
    </div>
  </div>
);
