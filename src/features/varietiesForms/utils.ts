// LOCAL FILES
// Interfaces & Types
import { PokemonForm } from 'features/varietiesForms/types';

export const getFormNameInSelectedLanguage = (
  data: PokemonForm,
  language: string,
): string => {
  // Don't set default name for form as it may not exist
  let formName = '';

  // Check for a translation of name, prioritise form_names
  for (let i = 0; i < data.form_names.length; i++) {
    const name = data.form_names[i];
    if (name.language.name === language) {
      formName = name.name;
      break;
    }
  }

  // If no match found in form_names, try names
  if (!formName) {
    for (let i = 0; i < data.names.length; i++) {
      const name = data.names[i];
      if (name.language.name === language) {
        formName = name.name;
        break;
      }
    }
  }

  return formName;
};
