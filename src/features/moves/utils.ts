// LOCAL FILES
// Interfaces & Types
import { Move, MoveLearnMethod } from 'features/moves/types';

export const getMoveNameInSelectedLanguage = (
  data: Move,
  language: string,
) => {
  let moveName = data.name;

  // Check for a translation of name
  for (let i = 0; i < data.names.length; i++) {
    const name = data.names[i];
    if (name.language.name === language) {
      moveName = name.name;
      break;
    }
  }

  return moveName;
};

export const getMethodNameInSelectedLanguage = (
  data: MoveLearnMethod,
  language: string,
) => {
  let methodName = data.name;

  // Check for a translation of name
  for (let i = 0; i < data.names.length; i++) {
    const name = data.names[i];
    if (name.language.name === language) {
      methodName = name.name;
      break;
    }
  }

  return methodName;
};
