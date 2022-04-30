// REACT
import { VoidFunctionComponent } from 'react';

// LOCAL FILES
// Styling
import 'features/pokedex/components/Vents.css';

export const Vents: VoidFunctionComponent = () => (
  <div className="vent-container">
    <div className="display-vent" />
    <div className="display-vent" />
    <div className="display-vent" />
    <div className="display-vent" />
  </div>
);
