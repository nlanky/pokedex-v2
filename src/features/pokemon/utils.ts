// LOCAL FILES
// Constants
import { VERSION_GROUP_TO_GENERATION } from 'features/version/constants';
// Interfaces & Types
import { ProcessedPokemonAbility } from 'features/abilities/types';
import { ProcessedPokemonMoves } from 'features/moves/types';
import { Pokemon, ProcessedPokemon } from 'features/pokemon/types';
import { ProcessedPokemonStat } from 'features/stats/types';

/**
 * Mainly used to transform API URLs into IDs for ease of use with
 * RTK Query and components.
 */
export const transformPokemonResponse = (
  data: Pokemon,
): ProcessedPokemon => {
  const { abilities, moves, stats, types, species, forms, ...rest } =
    data;
  const processedData: ProcessedPokemon = {
    ...rest,
    abilities: [],
    moves: [],
    stats: [],
    types: [],
    species_id: NaN,
    form_ids: [],
  };

  // ABILITIES
  const transformedAbilities: ProcessedPokemonAbility[] = abilities
    .sort((a, b) => a.slot - b.slot)
    .map((ability) => {
      const abilityUrlSplit = ability.ability.url.split('/');
      return {
        id: Number(abilityUrlSplit[abilityUrlSplit.length - 2]),
        is_hidden: ability.is_hidden,
      };
    });
  processedData.abilities = transformedAbilities;

  // MOVES
  const transformedMoves = moves.reduce<ProcessedPokemonMoves>(
    (nextMoves, currentMove) => {
      const { move, version_group_details } = currentMove;

      const moveUrlSplit = move.url.split('/');
      const moveId = Number(moveUrlSplit[moveUrlSplit.length - 2]);

      version_group_details.forEach((versionGroup) => {
        /*
          This isn't the best in terms of needing to maintain but it's
          easier than chaining requests for all the version groups and
          then all the generations.
        */
        const generation =
          VERSION_GROUP_TO_GENERATION[
            versionGroup.version_group.name
          ];
        if (typeof nextMoves[generation] === 'undefined') {
          nextMoves[generation] = {};
        }

        const moveLearnMethodUrlSplit =
          versionGroup.move_learn_method.url.split('/');
        const moveLearnMethodId = Number(
          moveLearnMethodUrlSplit[moveLearnMethodUrlSplit.length - 2],
        );

        if (
          typeof nextMoves[generation][moveLearnMethodId] ===
          'undefined'
        ) {
          nextMoves[generation][moveLearnMethodId] = [];
        }

        // Make sure we don't add dupes of move to same generation
        if (
          nextMoves[generation][moveLearnMethodId].find(
            (move) => move.move_id === moveId,
          )
        ) {
          return;
        }

        nextMoves[generation][moveLearnMethodId].push({
          move_id: moveId,
          move_name: move.name,
          method_name: versionGroup.move_learn_method.name,
          level_learned_at: versionGroup.level_learned_at,
        });
      });

      return nextMoves;
    },
    {},
  );

  // Sort by level, then name
  for (const generation in transformedMoves) {
    for (const methodId in transformedMoves[generation]) {
      const sortedVersionMoves = [
        ...transformedMoves[generation][methodId],
      ].sort((a, b) => {
        if (a.level_learned_at !== b.level_learned_at) {
          return a.level_learned_at - b.level_learned_at;
        }

        return a.move_name
          .replaceAll('-', '')
          .localeCompare(b.move_name.replaceAll('-', ''));
      });

      transformedMoves[generation][methodId] = sortedVersionMoves;
    }
  }
  processedData.moves = transformedMoves;

  // STATS
  const transformedStats: ProcessedPokemonStat[] = stats.map(
    (stat) => {
      const statUrlSplit = stat.stat.url.split('/');
      return {
        id: Number(statUrlSplit[statUrlSplit.length - 2]),
        value: stat.base_stat,
      };
    },
  );
  processedData.stats = transformedStats;

  // TYPES
  const processedTypes = types
    .sort((a, b) => a.slot - b.slot)
    .map((type) => {
      const typeUrlSplit = type.type.url.split('/');

      return {
        id: Number(typeUrlSplit[typeUrlSplit.length - 2]),
        name: type.type.name,
      };
    });
  processedData.types = processedTypes;

  // SPECIES ID
  const speciesUrlSplit = species.url.split('/');
  processedData.species_id = Number(
    speciesUrlSplit[speciesUrlSplit.length - 2],
  );

  // FORMS
  processedData.form_ids = forms.map((form) => {
    const formIdSplit = form.url.split('/');
    return Number(formIdSplit[formIdSplit.length - 2]);
  });

  return processedData;
};
