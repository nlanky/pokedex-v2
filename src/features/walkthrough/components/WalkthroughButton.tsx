// REACT
import { VoidFunctionComponent } from 'react';

// LOCAL FILES
// Redux
import { useAppDispatch } from 'features/common/redux/hooks';
import { toggleWalkthrough } from 'features/settings/settingsSlice';
// Styling
import 'features/walkthrough/components/WalkthroughButton.css';

export const WalkthroughButton: VoidFunctionComponent = () => {
  // REDUX
  const dispatch = useAppDispatch();

  // HANDLERS
  const onClick = () => {
    dispatch(toggleWalkthrough());
  };

  const onKeyDown = () => {};

  return (
    <div
      aria-label="Toggle walkthrough"
      className="walkthrough-button"
      onClick={onClick}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
    />
  );
};
