// REACT
import { VoidFunctionComponent } from 'react';

// LOCAL FILES
// Styling
import 'features/pokedex/components/Hinge.css';

export const Hinge: VoidFunctionComponent = () => (
  <div className="hinge-container">
    <div className="hinge-top" />
    <div className="hinge-middle" />
    <div className="hinge-bottom" />
    <div className="hinge-bottom-lid" />
  </div>
);
