// REACT
import { VoidFunctionComponent } from 'react';

// PUBLIC MODULES
import {
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaChevronDown,
} from 'react-icons/fa';

// LOCAL FILES
// Components
import { Wave } from 'features/common/components';
import { Sprite } from 'features/sprites/components';
// Constants
import { MAX_POKEDEX_NUMBER } from 'features/common/constants';
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
// Styling
import 'features/sprites/components/SpriteContainer.css';

export const SpriteContainer: VoidFunctionComponent = () => {
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
  const onKeyDown = () => {};
  const onPreviousSpriteClick = () => {
    dispatch(decrementSpriteIndex());
  };
  const onNextSpriteClick = () => {
    dispatch(incrementSpriteIndex());
  };
  const onPreviousPokemonClick = () => {
    dispatch(decrementId());
  };
  const onNextPokemonClick = () => {
    dispatch(incrementId());
  };

  // DERIVED VARIABLES
  const shouldShowPreviousSpriteButton = currentSpriteIndex - 1 >= 0;
  const shouldShowNextSpriteButton =
    currentSpriteIndex + 1 < spriteArray.length;
  const shouldShowPreviousPokemonButton = currentPokemonId - 1 >= 1;
  const shouldShowNextPokemonButton =
    currentPokemonId + 1 <= MAX_POKEDEX_NUMBER;
  const leftNumberToDisplay = currentPokemonId - 1;
  const rightNumberToDisplay = currentPokemonId + 1;

  return (
    <div className="sprite-container">
      {loading ? (
        <div className="flex-center">
          <Wave />
        </div>
      ) : (
        <>
          <div className="sprite-top">
            <div
              aria-label="Previous sprite"
              className="sprite-cycle top"
              onClick={onPreviousSpriteClick}
              onKeyDown={onKeyDown}
              role="button"
              tabIndex={0}
            >
              {shouldShowPreviousSpriteButton && (
                <FaChevronUp color="#fff" />
              )}
            </div>
          </div>
          <div className="sprite-middle">
            <div
              aria-label="Previous Pokemon"
              className="sprite-cycle left"
              onClick={onPreviousPokemonClick}
              onKeyDown={onKeyDown}
              role="button"
              tabIndex={0}
            >
              {shouldShowPreviousPokemonButton && (
                <>
                  <FaChevronLeft color="#fff" />
                  <span className="nav-number-text">
                    #{leftNumberToDisplay}
                  </span>
                </>
              )}
            </div>
            <div className="sprite-wrapper">
              {spriteArray.map((spriteUrl, index) => (
                <Sprite
                  key={index}
                  activeSprite={
                    currentSpriteIndex ===
                    spriteArray.indexOf(spriteUrl)
                  }
                  altText={`Sprite ${index + 1}`}
                  spriteUrl={spriteUrl}
                />
              ))}
            </div>
            <div
              aria-label="Next Pokemon"
              className="sprite-cycle right"
              onClick={onNextPokemonClick}
              onKeyDown={onKeyDown}
              role="button"
              tabIndex={0}
            >
              {shouldShowNextPokemonButton && (
                <>
                  <FaChevronRight color="#fff" />
                  <span className="nav-number-text">
                    #{rightNumberToDisplay}
                  </span>
                </>
              )}
            </div>
          </div>
          <div className="sprite-bottom">
            <div
              aria-label="Next sprite"
              className="sprite-cycle bottom"
              onClick={onNextSpriteClick}
              onKeyDown={onKeyDown}
              role="button"
              tabIndex={0}
            >
              {shouldShowNextSpriteButton && (
                <FaChevronDown color="#fff" />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
