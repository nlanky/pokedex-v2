// REACT
import { VoidFunctionComponent } from 'react';

// LOCAL FILES
// Constants
import { CRY_AUDIO_FILES } from 'features/common/assets';
// Redux
import { useAppSelector } from 'features/common/redux/hooks';
// Styling
import 'features/sprites/components/SpriteCryButton.css';

export const SpriteCryButton: VoidFunctionComponent = () => {
  // REDUX
  const currentPokemonId = useAppSelector(
    (state) => state.navigation.id,
  );

  // HANDLERS
  const onClick = () => {
    try {
      const cryFile = CRY_AUDIO_FILES.find((filePath) => {
        // file path example: /pokedex-v2/static/media/1.0c96f8f2af2bc9f847f2.wav
        const filePathSplit = filePath.split('/');
        const fileName = filePathSplit[4];
        const fileNameSplit = fileName.split('.');
        return currentPokemonId === Number(fileNameSplit[0]);
      });

      if (cryFile) {
        const audio = new Audio();
        audio.src = cryFile;
        audio.play();
      }
    } catch {
      // Do nothing if we can't find cry or there is problem playing it
    }
  };

  return (
    <div
      aria-label="Play Pokémon cry"
      className="sprite-button"
      onClick={onClick}
      onKeyDown={() => {}}
      role="button"
      tabIndex={0}
    />
  );
};
