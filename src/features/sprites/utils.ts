// LOCAL FILES
// Constants
import { SPRITE_DISPLAY_ORDER } from 'features/sprites/constants';
// Interfaces & Types
import { ProcessedPokemon } from 'features/pokemon/types';

export const getSpriteArrayFromObject = (data: ProcessedPokemon) => {
  const { sprites } = data;
  const spriteArray: string[] = [];
  SPRITE_DISPLAY_ORDER.forEach((spriteKey) => {
    if (sprites[spriteKey]) {
      spriteArray.push(sprites[spriteKey]);
    }
  });

  return spriteArray;
};
