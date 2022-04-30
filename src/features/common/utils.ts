// LOCAL FILES
// Constants
import { MAX_POKEDEX_NUMBER } from 'features/common/constants';

export const isValidPokedexNumber = (
  value: number | string,
): boolean => {
  if (typeof value === 'string' && !/^[0-9]+$/.test(value)) {
    return false;
  }

  const numberValue = Number(value);
  return numberValue >= 1 && numberValue <= MAX_POKEDEX_NUMBER;
};

export const range = (start: number, end: number) => {
  const array: number[] = [];

  for (let i = start; i < end; i++) {
    array.push(i);
  }

  return array;
};

export const importAll = (r: any): string[] => r.keys().map(r);
