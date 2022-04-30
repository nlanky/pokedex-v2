// LOCAL FILES
// Interfaces & Types
import {
  EvolutionChain,
  EvolutionDetail,
  EvolutionTrigger,
  ProcessedEvolution,
  ProcessedEvolutionDetail,
} from 'features/evolutionChain/types';

export const processEvolutionDetail = (
  data: EvolutionDetail,
): ProcessedEvolutionDetail => {
  const {
    item,
    trigger,
    held_item,
    known_move,
    known_move_type,
    location,
    party_species,
    party_type,
    trade_species,
    ...rest
  } = data;

  const itemUrlSplit = data.item?.url.split('/') || [];
  const triggerUrlSplit = data.trigger?.url.split('/') || [];
  const heldItemUrlSplit = data.held_item?.url.split('/') || [];
  const knownMoveUrlSplit = data.known_move?.url.split('/') || [];
  const knownMoveTypeUrlSplit =
    data.known_move_type?.url.split('/') || [];
  const locationUrlSplit = data.location?.url.split('/') || [];
  const partySpeciesUrlSplit =
    data.party_species?.url.split('/') || [];
  const partyTypeUrlSplit = data.party_type?.url.split('/') || [];
  const tradeSpeciesUrlSplit =
    data.trade_species?.url.split('/') || [];

  return {
    ...rest,
    item_id: Number(itemUrlSplit[itemUrlSplit.length - 2]),
    trigger_id: Number(triggerUrlSplit[triggerUrlSplit.length - 2]),
    held_item_id: Number(
      heldItemUrlSplit[heldItemUrlSplit.length - 2],
    ),
    known_move_id: Number(
      knownMoveUrlSplit[knownMoveUrlSplit.length - 2],
    ),
    known_move_type_id: Number(
      knownMoveTypeUrlSplit[knownMoveTypeUrlSplit.length - 2],
    ),
    location_id: Number(
      locationUrlSplit[locationUrlSplit.length - 2],
    ),
    party_species_id: Number(
      partySpeciesUrlSplit[partySpeciesUrlSplit.length - 2],
    ),
    party_type_id: Number(
      partyTypeUrlSplit[partyTypeUrlSplit.length - 2],
    ),
    trade_species_id: Number(
      tradeSpeciesUrlSplit[tradeSpeciesUrlSplit.length - 2],
    ),
  };
};

export const transformEvolutionChainResponse = (
  data: EvolutionChain,
): ProcessedEvolution[] => {
  const { chain } = data;

  // Stage 0
  const species0UrlSplit = chain.species.url.split('/');
  const processedEvolutions: ProcessedEvolution[] = [
    {
      stage: 0,
      evolution_details: chain.evolution_details.map(
        processEvolutionDetail,
      ),
      species_id: Number(
        species0UrlSplit[species0UrlSplit.length - 2],
      ),
    },
  ];

  chain.evolves_to.forEach((chainLink1) => {
    // Stage 1
    const species1UrlSplit = chainLink1.species.url.split('/');
    processedEvolutions.push({
      stage: 1,
      evolution_details: chainLink1.evolution_details.map(
        (evolutionDetail) => processEvolutionDetail(evolutionDetail),
      ),
      species_id: Number(
        species1UrlSplit[species1UrlSplit.length - 2],
      ),
    });

    chainLink1.evolves_to.forEach((chainLink1) => {
      // Stage 2
      const species2UrlSplit = chainLink1.species.url.split('/');
      processedEvolutions.push({
        stage: 2,
        evolution_details: chainLink1.evolution_details.map(
          (evolutionDetail) =>
            processEvolutionDetail(evolutionDetail),
        ),
        species_id: Number(
          species2UrlSplit[species2UrlSplit.length - 2],
        ),
      });
    });
  });

  return processedEvolutions.sort((a, b) => a.stage - b.stage);
};

export const getEvolutionTriggerNameInSelectedLanguage = (
  data: EvolutionTrigger,
  language: string,
) => {
  let triggerName = data.name;

  // Check for a translation of name
  for (let i = 0; i < data.names.length; i++) {
    const name = data.names[i];
    if (name.language.name === language) {
      triggerName = name.name;
      break;
    }
  }

  return triggerName;
};
