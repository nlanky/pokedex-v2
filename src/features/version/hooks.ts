// REACT
import { useEffect, useState } from 'react';

// LOCAL FILES
// Redux
import { useAppSelector } from 'features/common/redux/hooks';
import {
  useGetGenerationByIdQuery,
  useGetVersionByIdQuery,
} from 'features/version/api';
// Utility Functions
import {
  getGenerationNameInSelectedLanguage,
  getVersionNameInSelectedLanguage,
} from 'features/version/utils';

export const useGenerationName = (id: number) => {
  // REDUX
  const language = useAppSelector((state) => state.settings.language);

  // RTK QUERY
  const { data, isFetching } = useGetGenerationByIdQuery(id);

  // LOCAL STATE
  const [name, setName] = useState('');

  // EFFECTS
  useEffect(() => {
    if (data) {
      setName(getGenerationNameInSelectedLanguage(data, language));
    }
  }, [data, language]);

  return {
    name,
    loading: isFetching,
  };
};

export const useVersionName = (id: number) => {
  // REDUX
  const language = useAppSelector((state) => state.settings.language);

  // RTK QUERY
  const { data, isFetching } = useGetVersionByIdQuery(id);

  // LOCAL STATE
  const [name, setName] = useState('');

  // EFFECTS
  useEffect(() => {
    if (data) {
      setName(getVersionNameInSelectedLanguage(data, language));
    }
  }, [data, language]);

  return {
    name,
    loading: isFetching,
  };
};
