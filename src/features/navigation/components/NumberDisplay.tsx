// REACT
import {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useState,
  VoidFunctionComponent,
} from 'react';

// LOCAL FILES
// Components
import { Wave } from 'features/common/components';
// Hooks
import { usePokemonName } from 'features/species/hooks';
// Redux
import {
  useAppDispatch,
  useAppSelector,
} from 'features/common/redux/hooks';
import {
  fetchPokemonById,
  fetchPokemonByName,
} from 'features/navigation/navigationSlice';
// Styling
import 'features/navigation/components/NumberDisplay.css';
// Utility Functions
import { isValidPokedexNumber } from 'features/common/utils';

export const NumberDisplay: VoidFunctionComponent = () => {
  // CUSTOM HOOKS
  const { name, loading: loadingName } = usePokemonName();

  // REDUX
  const dispatch = useAppDispatch();
  const searching = useAppSelector(
    (state) => state.navigation.searching,
  );

  // LOCAL STATE
  const [value, setValue] = useState('');

  // EFFECTS
  useEffect(() => {
    /*
      Search thunk will update ID in Redux store if Pokemon is found.
      If/when ID updates, we will fetch a new name and the input
      value will need to be updated.
    */
    setValue(name);
  }, [name]);

  // HANDLERS
  const search = () => {
    // Set input back to original value first
    setValue(name);

    if (isValidPokedexNumber(value)) {
      dispatch(fetchPokemonById(Number(value)));
      // dispatch(searchPokemon(value, true));
    } else if (/[A-za-z]+/.test(value)) {
      dispatch(fetchPokemonByName(value));
    }
  };

  const onBlur = () => {
    search();
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onClick = () => {
    setValue('');
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      search();
    }
  };

  return (
    <div
      className={`number-display-wrapper${
        loadingName || searching ? ' flex-center' : ''
      }`}
    >
      {loadingName || searching ? (
        <Wave />
      ) : (
        <input
          className="number-display"
          onBlur={onBlur}
          onChange={onChange}
          onClick={onClick}
          onKeyDown={onKeyDown}
          type="text"
          value={value}
        />
      )}
    </div>
  );
};
