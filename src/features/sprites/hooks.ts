// REACT
import { useEffect, useState } from 'react';

// LOCAL FILES
// Hooks
import { usePokemon } from 'features/pokemon/hooks';
// Utility Functions
import { getSpriteArrayFromObject } from 'features/sprites/utils';

export const useSpriteArray = () => {
  // CUSTOM HOOKS
  const { pokemon, loading } = usePokemon();

  // LOCAL STATE
  const [spriteArray, setSpriteArray] = useState<string[]>([]);

  // EFFECTS
  useEffect(() => {
    if (pokemon) {
      setSpriteArray(getSpriteArrayFromObject(pokemon));
    }
  }, [pokemon]);

  return { spriteArray, loading };
};
