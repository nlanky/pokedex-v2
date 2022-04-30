// PUBLIC MODULES
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';

// LOCAL FILES
// Interfaces & Types
import type {
  RootState,
  AppDispatch,
} from 'features/common/redux/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector;
