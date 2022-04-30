// REACT
import { useEffect, useState } from 'react';

// LOCAL FILES
// Redux
import { useAppSelector } from 'features/common/redux/hooks';
import {
  useGetEncountersByPokemonIdQuery,
  useGetLocationAreaByIdQuery,
  useGetLocationByIdQuery,
} from 'features/locations/api';
// Utility Functions
import {
  getLocationAreaNameInSelectedLanguage,
  getLocationNameInSelectedLanguage,
} from 'features/locations/utils';

export const useEncounterAreas = () => {
  // REDUX
  const currentPokemonId = useAppSelector(
    (state) => state.navigation.id,
  );

  // RTK QUERY
  const { data, isFetching } =
    useGetEncountersByPokemonIdQuery(currentPokemonId);

  return {
    encounterAreas: data || {},
    loading: isFetching,
  };
};

export const useEncounterAreaName = (locationAreaId: number) => {
  // REDUX
  const language = useAppSelector((state) => state.settings.language);

  // RTK QUERY
  const { data: locationAreaData, isFetching: loadingLocationArea } =
    useGetLocationAreaByIdQuery(locationAreaId);

  // DERIVED VARIABLES
  const locationUrlSplit =
    locationAreaData?.location.url.split('/') || [];

  // RTK QUERY
  const { data: locationData, isFetching: loadingLocation } =
    useGetLocationByIdQuery(
      Number(locationUrlSplit[locationUrlSplit.length - 2]),
      {
        skip: !locationAreaData,
      },
    );

  // LOCAL STATE
  const [name, setName] = useState('');

  // EFFECTS
  useEffect(() => {
    if (locationAreaData && locationData) {
      let nextName = getLocationNameInSelectedLanguage(
        locationData,
        language,
      );
      const areaName = getLocationAreaNameInSelectedLanguage(
        locationAreaData,
        language,
      );
      if (areaName) {
        nextName += ` - ${areaName}`;
      }

      setName(nextName);
    }
  }, [language, locationAreaData, locationData]);

  return {
    name,
    loading: loadingLocation || loadingLocationArea,
  };
};
