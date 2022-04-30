// REACT
import { FC } from 'react';

// LOCAL FILES
// Components
import { Wave } from 'features/common/components';
// Hooks
import { useEvolutionDetail } from 'features/evolutionChain/hooks';
// Interfaces & Types
import { ProcessedEvolutionDetail } from 'features/evolutionChain/types';
// Styling
import 'features/evolutionChain/components/EvolutionDetail.css';

interface EvolutionDetailProps {
  detail: ProcessedEvolutionDetail;
}

export const EvolutionDetail: FC<EvolutionDetailProps> = ({
  detail: rawDetail,
}) => {
  // CUSTOM HOOKS
  const { detail, loading } = useEvolutionDetail(rawDetail);

  const {
    item,
    trigger,
    gender,
    held_item,
    known_move,
    known_move_type,
    location,
    min_level,
    min_happiness,
    min_beauty,
    min_affection,
    needs_overworld_rain,
    party_species,
    party_type,
    relative_physical_stats,
    time_of_day,
    trade_species,
    turn_upside_down,
  } = detail;

  return (
    <div className="evolution-details-wrapper">
      {loading && <Wave />}
      {!loading && (
        <>
          {trigger && <span>{trigger.displayName}</span>}
          {trigger?.name === 'level-up' && min_level && (
            <span>{min_level}</span>
          )}
          {item && <span>{item}</span>}
          {held_item && <span>{held_item}</span>}
          {min_happiness && (
            <span>
              Happiness:
              {` ${min_happiness}`}
            </span>
          )}
          {min_affection && (
            <span>
              Affection:
              {` ${min_affection}`}
            </span>
          )}
          {min_beauty && (
            <span>
              Beauty:
              {` ${min_beauty}`}
            </span>
          )}
          {known_move && <span>{known_move}</span>}
          {known_move_type && (
            <span>Knows {known_move_type} type move</span>
          )}
          {location && <span>{location}</span>}
          {time_of_day && (
            <span>{`${time_of_day
              .charAt(0)
              .toUpperCase()}${time_of_day.slice(1)}`}</span>
          )}
          {gender && <span>{gender}</span>}
          {party_species && <span>In party: {party_species}</span>}
          {party_type && <span>Type in party: {party_type}</span>}
          {turn_upside_down && <span>Device upside down</span>}
          {needs_overworld_rain && <span>Overworld rain/fog</span>}
          {relative_physical_stats && (
            <span>{relative_physical_stats}</span>
          )}
          {trade_species && <span>{trade_species}</span>}
        </>
      )}
    </div>
  );
};
