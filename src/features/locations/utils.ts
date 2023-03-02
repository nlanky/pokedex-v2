// LOCAL FILES
// Constants
import { VERSION_TO_GENERATION } from 'features/version/constants';
// Interfaces & Types
import {
  Location,
  LocationArea,
  LocationAreaEncounter,
  ProcessedEncounters,
} from 'features/locations/types';

export const transformEncountersResponse = (
  data: LocationAreaEncounter[],
): ProcessedEncounters => {
  const processedEncounters: ProcessedEncounters = {};

  data.forEach((encounter) => {
    const locationAreaUrlSplit =
      encounter.location_area.url.split('/');
    const locationAreaId = Number(
      locationAreaUrlSplit[locationAreaUrlSplit.length - 2],
    );

    encounter.version_details.forEach((version) => {
      const versionUrlSplit = version.version.url.split('/');
      const versionId = Number(
        versionUrlSplit[versionUrlSplit.length - 2],
      );

      /*
        This isn't the best in terms of needing to maintain but it's
        easier than chaining requests for all the versions and then
        all the generations.
      */
      const generation = VERSION_TO_GENERATION[version.version.name];
      if (typeof generation === 'undefined') {
        return;
      }

      if (typeof processedEncounters[generation] === 'undefined') {
        processedEncounters[generation] = {};
      }

      if (
        typeof processedEncounters[generation][versionId] ===
        'undefined'
      ) {
        processedEncounters[generation][versionId] = [];
      }

      processedEncounters[generation][versionId].push(locationAreaId);
    });
  });

  return processedEncounters;
};

export const getLocationNameInSelectedLanguage = (
  data: Location,
  language: string,
) => {
  let locationName = data.name;

  // Check for a translation of name
  for (let i = 0; i < data.names.length; i++) {
    const name = data.names[i];
    if (name.language.name === language) {
      locationName = name.name;
      break;
    }
  }

  return locationName;
};

export const getLocationAreaNameInSelectedLanguage = (
  data: LocationArea,
  language: string,
) => {
  // Don't set default name for area as it may not exist
  let locationAreaName = '';

  // Check for a translation of name
  for (let i = 0; i < data.names.length; i++) {
    const name = data.names[i];
    if (name.language.name === language) {
      locationAreaName = name.name;
      break;
    }
  }

  return locationAreaName;
};
