// REACT
import { VoidFunctionComponent } from 'react';

// PUBLIC MODULES
import { Steps } from 'intro.js-react';

// LOCAL FILES
// Constants
import { WALKTHROUGH_STEPS } from 'features/walkthrough/constants';
// Redux
import {
  useAppDispatch,
  useAppSelector,
} from 'features/common/redux/hooks';
import { closeWalkthrough } from 'features/settings/settingsSlice';
// Styling
import 'features/walkthrough/components/WalkthroughSteps.css';

export const WalkthroughSteps: VoidFunctionComponent = () => {
  // REDUX
  const dispatch = useAppDispatch();
  const walkthroughShowing = useAppSelector(
    (state) => state.settings.walkthroughShowing,
  );

  // HANDLERS
  const onWalkthroughExit = () => {
    dispatch(closeWalkthrough());
  };

  return (
    <Steps
      enabled={walkthroughShowing}
      initialStep={0}
      onExit={onWalkthroughExit}
      options={{
        showBullets: false,
        tooltipClass: 'custom-tooltip',
      }}
      steps={WALKTHROUGH_STEPS}
    />
  );
};
