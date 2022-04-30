// LOCAL FILES
// Interfaces & Types
import { Ability } from 'features/abilities/types';
import {
  PokemonTypeEffectiveness,
  TypeToData,
} from 'features/types/types';
import { Type } from 'features/types/types';
// Utility Functions
import { getAbilityNameAndFlavourTextInSelectedLanguage } from 'features/abilities/utils';

export const getTypeNameInSelectedLanguage = (
  data: Type | undefined,
  language: string,
): string => {
  if (!data) {
    return '';
  }

  let typeName =
    data.name.charAt(0).toUpperCase() + data.name.slice(1);

  // Check for a translation of type name
  for (let i = 0; i < data.names.length; i++) {
    const name = data.names[i];
    if (name.language.name === language) {
      typeName = name.name;
      break;
    }
  }

  return typeName;
};

export const getTypeEffectivenessForPokemon = (
  typeOne: string,
  typeTwo: string | undefined,
  abilities: Ability[],
  typeToData: TypeToData,
  language: string,
): PokemonTypeEffectiveness => {
  const typeEffectiveness: PokemonTypeEffectiveness = {
    weakTo: [],
    damagedNormallyBy: [],
    resistantTo: [],
    immuneTo: [],
    abilities: [],
  };
  const typeToMultiplier: Record<string, number> = {};

  // Add all damage relations for type one
  const typeOneDamageRelations =
    typeToData[typeOne].data.damage_relations;
  typeOneDamageRelations.double_damage_from.forEach((val) => {
    typeToMultiplier[val.name] = 2;
  });

  typeOneDamageRelations.half_damage_from.forEach((val) => {
    typeToMultiplier[val.name] = 0.5;
  });

  typeOneDamageRelations.no_damage_from.forEach((val) => {
    typeToMultiplier[val.name] = 0;
  });

  // Make adjustments if there is a type two
  if (typeTwo) {
    const typeTwoDamageRelations =
      typeToData[typeTwo].data.damage_relations;

    typeTwoDamageRelations.double_damage_from.forEach((val) => {
      const type = val.name;
      const typeDamage = typeToMultiplier[type];
      switch (typeDamage) {
        case 0:
          break;
        case 0.5:
          typeToMultiplier[type] = 1;
          break;
        case 2:
          typeToMultiplier[type] = 4;
          break;
        default:
          typeToMultiplier[type] = 2;
          break;
      }
    });

    typeTwoDamageRelations.half_damage_from.forEach((val) => {
      const type = val.name;
      const typeDamage = typeToMultiplier[type];
      switch (typeDamage) {
        case 0:
          break;
        case 0.5:
          typeToMultiplier[type] = 0.25;
          break;
        case 2:
          typeToMultiplier[type] = 1;
          break;
        default:
          typeToMultiplier[type] = 0.5;
          break;
      }
    });

    // If type is immune, always overwrite to 0x
    typeTwoDamageRelations.no_damage_from.forEach((val) => {
      typeToMultiplier[val.name] = 0;
    });
  }

  // Add any missing types which will be defaulted to normal effectiveness (i.e. 1x)
  for (const type in typeToData) {
    if (typeof typeToMultiplier[type] === 'undefined') {
      typeToMultiplier[type] = 1;
    }
  }

  // Adjust for abilities the Pokemon has
  const hasMultipleAbilities = abilities.length > 1;
  const typeToMultiplierKeys = Object.keys(typeToMultiplier);
  const affectedTypeArr: string[] = [];

  abilities.forEach((ability) => {
    const abilityName = ability.name;

    switch (abilityName) {
      case 'wonder-guard':
        typeToMultiplierKeys.forEach((type) => {
          if (typeToMultiplier[type] < 2) {
            if (hasMultipleAbilities) {
              affectedTypeArr.push(
                `${type.charAt(0).toUpperCase()}${type.slice(
                  1,
                )} (0x)`,
              );
            } else {
              typeToMultiplier[type] = 0;
            }
          }
        });
        break;
      case 'filter':
      case 'prism-armor':
      case 'solid-rock':
        typeToMultiplierKeys.forEach((type) => {
          const multiplier = typeToMultiplier[type];
          if (multiplier >= 2) {
            if (hasMultipleAbilities) {
              affectedTypeArr.push(
                `${type.charAt(0).toUpperCase()}${type.slice(1)} (${
                  multiplier * 0.75
                }x)`,
              );
            } else {
              typeToMultiplier[type] *= 0.75;
            }
          }
        });
        break;
      case 'flash-fire':
        if (hasMultipleAbilities) {
          affectedTypeArr.push('Fire (0x)');
        } else {
          typeToMultiplier.fire = 0;
        }
        break;
      case 'fluffy':
        if (hasMultipleAbilities) {
          affectedTypeArr.push(
            `Fire (${typeToMultiplier.fire * 2}x)`,
          );
        } else {
          typeToMultiplier.fire *= 2;
        }
        break;
      case 'heatproof':
      case 'water-bubble':
        if (hasMultipleAbilities) {
          affectedTypeArr.push(
            `Fire (${typeToMultiplier.fire * 0.5}x)`,
          );
        } else {
          typeToMultiplier.fire *= 0.5;
        }
        break;
      case 'levitate':
        if (hasMultipleAbilities) {
          affectedTypeArr.push('Ground (0x)');
        } else {
          typeToMultiplier.ground = 0;
        }
        break;
      case 'lightning-rod':
      case 'motor-drive':
      case 'volt-absorb':
        if (hasMultipleAbilities) {
          affectedTypeArr.push('Electric (0x)');
        } else {
          typeToMultiplier.electric = 0;
        }
        break;
      case 'sap-sipper':
        if (hasMultipleAbilities) {
          affectedTypeArr.push('Grass (0x)');
        } else {
          typeToMultiplier.grass = 0;
        }
        break;
      case 'storm-drain':
      case 'water-absorb':
        if (hasMultipleAbilities) {
          affectedTypeArr.push('Water (0x)');
        } else {
          typeToMultiplier.water = 0;
        }
        break;
      case 'thick-fat':
        if (hasMultipleAbilities) {
          affectedTypeArr.push(
            `Fire (${typeToMultiplier.fire * 0.5}x)`,
            `Ice (${typeToMultiplier.ice * 0.5}x)`,
          );
        } else {
          typeToMultiplier.fire *= 0.5;
          typeToMultiplier.ice *= 0.5;
        }
        break;
      default:
        break;
    }

    // Only display ability text if Pokemon has one of above abilities
    if (affectedTypeArr.length > 0) {
      const { name: abilityDisplayName } =
        getAbilityNameAndFlavourTextInSelectedLanguage(
          ability,
          language,
        );
      const abilityText = `* If this Pokémon has ${abilityDisplayName}, the following type effectiveness multipliers apply: `;
      typeEffectiveness.abilities.push({
        name: abilityDisplayName,
        description: `${abilityText}${affectedTypeArr.join(', ')}`,
      });
    }
  });

  // Format type effectiveness object for ease of use in component
  for (const type in typeToMultiplier) {
    const multiplier = typeToMultiplier[type];
    if (multiplier > 1) {
      typeEffectiveness.weakTo.push({
        type,
        displayName: typeToData[type].displayName,
        multiplier,
      });
    } else if (multiplier === 1) {
      typeEffectiveness.damagedNormallyBy.push({
        type,
        displayName: typeToData[type].displayName,
        multiplier,
      });
    } else if (multiplier > 0) {
      typeEffectiveness.resistantTo.push({
        type,
        displayName: typeToData[type].displayName,
        multiplier,
      });
    } else {
      typeEffectiveness.immuneTo.push({
        type,
        displayName: typeToData[type].displayName,
        multiplier,
      });
    }
  }

  return typeEffectiveness;
};
