// REACT
import { createRoot } from 'react-dom/client';

// PUBLIC MODULES
import { Provider } from 'react-redux';

// LOCAL FILES
// Assets
import { BACKGROUND_IMAGE_FILE } from 'features/common/assets';
// Components
import { Pokedex } from 'Pokedex';
// Redux
import { store } from 'features/common/redux/store';
// Styling
import 'intro.js/introjs.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('No root element');
}

rootElement.style.backgroundImage = `url(${BACKGROUND_IMAGE_FILE})`;

createRoot(rootElement).render(
  <Provider store={store}>
    <Pokedex />
  </Provider>,
);
