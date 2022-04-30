// REACT
import { VoidFunctionComponent } from 'react';

// LOCAL FILES
// Components
import { Abilities } from 'features/abilities/components';
import { EggGroups } from 'features/eggGroups/components';
import { EvolutionChain } from 'features/evolutionChain/components';
import { Encounters } from 'features/locations/components';
import { Moves } from 'features/moves/components';
import { HeightWeight } from 'features/pokemon/components';
import { FlavourText } from 'features/species/components';
import { Stats } from 'features/stats/components';
import { TypeEffectiveness } from 'features/types/components';
import { VarietiesForms } from 'features/varietiesForms/components';
// Redux
import { useAppSelector } from 'features/common/redux/hooks';
// Styling
import 'features/pokedex/components/SecondaryDisplay.css';

export const SecondaryDisplay: VoidFunctionComponent = () => {
  // REDUX
  const currentSecondaryDisplay = useAppSelector(
    (state) => state.navigation.secondaryDisplay,
  );

  return (
    <div className="secondary-display-wrapper" id="secondary_display">
      {currentSecondaryDisplay === 'flavourText' && <FlavourText />}
      {currentSecondaryDisplay === 'stats' && <Stats />}
      {currentSecondaryDisplay === 'heightWeight' && <HeightWeight />}
      {currentSecondaryDisplay === 'typeEffectiveness' && (
        <TypeEffectiveness />
      )}
      {currentSecondaryDisplay === 'abilities' && <Abilities />}
      {currentSecondaryDisplay === 'encounters' && <Encounters />}
      {currentSecondaryDisplay === 'evolutionChain' && (
        <EvolutionChain />
      )}
      {currentSecondaryDisplay === 'moves' && <Moves />}
      {currentSecondaryDisplay === 'varieties' && <VarietiesForms />}
      {currentSecondaryDisplay === 'eggGroups' && <EggGroups />}
    </div>
  );
};
