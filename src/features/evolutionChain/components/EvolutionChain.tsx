// REACT
import { VoidFunctionComponent } from 'react';

// LOCAL FILES
// Components
import { Wave } from 'features/common/components';
import {
  Evolution,
  EvolutionDetail,
} from 'features/evolutionChain/components';
// Hooks
import { useEvolutionChain } from 'features/evolutionChain/hooks';
// Styling
import 'features/evolutionChain/components/EvolutionChain.css';

export const EvolutionChain: VoidFunctionComponent = () => {
  // CUSTOM HOOKS
  const { evolutionChain, loading } = useEvolutionChain();

  return (
    <div
      className="evolution-chain-container"
      style={{
        justifyContent: loading ? 'center' : 'normal',
      }}
    >
      {loading && <Wave />}
      {!loading && (
        <>
          {evolutionChain.map((evolution, evolutionIndex) => (
            <Evolution
              key={`evolution_${evolutionIndex}`}
              stage={evolution.stage}
              speciesId={evolution.species_id}
            >
              {evolution.evolution_details.map(
                (evolutionDetail, detailIndex) => (
                  <EvolutionDetail
                    key={`evolution_detail_${detailIndex}`}
                    detail={evolutionDetail}
                  />
                ),
              )}
            </Evolution>
          ))}
        </>
      )}
    </div>
  );
};
