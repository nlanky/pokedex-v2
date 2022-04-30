// LOCAL FILES
// Interfaces & Types
import { Item } from 'features/items/types';

export const getItemNameInSelectedLanguage = (
  data: Item,
  language: string,
) => {
  let itemName = data.name;

  // Check for a translation of name
  for (let i = 0; i < data.names.length; i++) {
    const name = data.names[i];
    if (name.language.name === language) {
      itemName = name.name;
      break;
    }
  }

  return itemName;
};
