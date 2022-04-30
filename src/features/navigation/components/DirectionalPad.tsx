// REACT
import { VoidFunctionComponent } from 'react';

// LOCAL FILES
// Hooks
import { useSpriteArray } from 'features/sprites/hooks';
// Redux
import {
  useAppDispatch,
  useAppSelector,
} from 'features/common/redux/hooks';
import {
  decrementId,
  decrementSpriteIndex,
  incrementId,
  incrementSpriteIndex,
} from 'features/navigation/navigationSlice';
// Styles
import 'features/navigation/components/DirectionalPad.css';
// Utility Functions
import { isValidPokedexNumber } from 'features/common/utils';

export const DirectionalPad: VoidFunctionComponent = () => {
  // CUSTOM HOOKS
  const { spriteArray, loading } = useSpriteArray();

  // REDUX
  const dispatch = useAppDispatch();
  const currentPokemonId = useAppSelector(
    (state) => state.navigation.id,
  );
  const currentSpriteIndex = useAppSelector(
    (state) => state.navigation.spriteIndex,
  );

  // HANDLERS
  const onUpPress = () => {
    if (loading || currentSpriteIndex - 1 < 0) {
      return;
    }

    dispatch(decrementSpriteIndex());
  };

  const onRightPress = () => {
    if (loading || !isValidPokedexNumber(currentPokemonId + 1)) {
      return;
    }

    dispatch(incrementId());
  };

  const onDownPress = () => {
    if (loading || currentSpriteIndex + 1 > spriteArray.length - 1) {
      return;
    }

    dispatch(incrementSpriteIndex());
  };

  const onLeftPress = () => {
    if (loading || !isValidPokedexNumber(currentPokemonId - 1)) {
      return;
    }

    dispatch(decrementId());
  };

  return (
    <div className="dpad-wrapper">
      <div
        aria-label="Previous sprite"
        className="dpad-btn dpad-up"
        onClick={onUpPress}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
      />
      <div
        aria-label="Next Pokémon"
        className="dpad-btn dpad-right"
        onClick={onRightPress}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
      />
      <div
        aria-label="No action"
        className="dpad-btn dpad-middle"
        role="button"
      >
        <div className="dpad-middle-finger" />
      </div>
      <div
        aria-label="Next sprite"
        className="dpad-btn dpad-down"
        onClick={onDownPress}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
      />
      <div
        aria-label="Previous Pokémon"
        className="dpad-btn dpad-left"
        onClick={onLeftPress}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
      />
    </div>
  );
};
