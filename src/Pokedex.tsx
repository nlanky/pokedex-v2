// REACT
import { VoidFunctionComponent } from 'react';

// LOCAL FILES
// Components
import {
  DirectionalPad,
  GridButton,
  GridButtonContainer,
  MiscButtonColumn,
  MiscButtonContainer,
  MiscButtonRow,
  NumberDisplay,
  RandomiseButton,
  ScrollButton,
} from 'features/navigation/components';
import {
  Hinge,
  LeftScreen,
  LeftScreenContent,
  LeftScreenFooter,
  LeftScreenHeader,
  LeftScreenFooterLeftColumn,
  LeftScreenFooterMiddleColumn,
  LeftScreenFooterRightColumn,
  LeftScreenFooterRow,
  MainDisplayCutoff,
  MainDisplayFooter,
  MainDisplayWrapper,
  RightScreen,
  RightScreenContent,
  RightScreenHeader,
  SecondaryDisplay,
  SlimButton,
  Vents,
} from 'features/pokedex/components';
import {
  SpriteContainer,
  SpriteCryButton,
} from 'features/sprites/components';
import { TypeDisplayContainer } from 'features/types/components';
import {
  WalkthroughButton,
  WalkthroughSteps,
} from 'features/walkthrough/components';
// Hooks
import { useAppDispatch } from 'features/common/redux/hooks';
// Redux
import {
  showFirstSprite,
  showLastSprite,
} from 'features/navigation/navigationSlice';
// Styling
import 'Pokedex.css';

export const Pokedex: VoidFunctionComponent = () => {
  // REDUX
  const dispatch = useAppDispatch();

  // HANDLERS
  const onSlimButtonOneClick = () => {
    dispatch(showFirstSprite());
  };

  const onSlimButtonTwoClick = () => {
    dispatch(showLastSprite());
  };

  const onSlimButtonThreeClick = () => {
    const secondaryDisplay = document.getElementById(
      'secondary_display',
    );
    if (secondaryDisplay) {
      secondaryDisplay.scrollTop = 0;
    }
  };

  const onSlimButtonFourClick = () => {
    const secondaryDisplay = document.getElementById(
      'secondary_display',
    );
    if (secondaryDisplay) {
      secondaryDisplay.scrollTop = secondaryDisplay.scrollHeight;
    }
  };

  return (
    <div className="container">
      <WalkthroughSteps />
      <LeftScreen>
        <LeftScreenHeader />
        <LeftScreenContent>
          <MainDisplayWrapper>
            <MainDisplayCutoff />
            <SpriteContainer />
            <MainDisplayFooter>
              <SpriteCryButton />
              <Vents />
            </MainDisplayFooter>
          </MainDisplayWrapper>
          <LeftScreenFooter>
            <LeftScreenFooterLeftColumn>
              <WalkthroughButton />
            </LeftScreenFooterLeftColumn>
            <LeftScreenFooterMiddleColumn>
              <LeftScreenFooterRow>
                <SlimButton
                  colour="#D72113"
                  label="walkthroughFirstSprite"
                  onClick={onSlimButtonOneClick}
                />
                <SlimButton
                  colour="#fff"
                  noMargin
                  label="walkthroughLastSprite"
                  onClick={onSlimButtonTwoClick}
                />
              </LeftScreenFooterRow>
              <LeftScreenFooterRow>
                <NumberDisplay />
              </LeftScreenFooterRow>
            </LeftScreenFooterMiddleColumn>
            <LeftScreenFooterRightColumn>
              <DirectionalPad />
            </LeftScreenFooterRightColumn>
          </LeftScreenFooter>
        </LeftScreenContent>
      </LeftScreen>
      <Hinge />
      <RightScreen>
        <RightScreenHeader />
        <RightScreenContent>
          <SecondaryDisplay />
          <GridButtonContainer>
            <GridButton screen="flavourText" />
            <GridButton screen="stats" />
            <GridButton screen="heightWeight" />
            <GridButton screen="typeEffectiveness" />
            <GridButton screen="abilities" />
            <GridButton screen="encounters" />
            <GridButton screen="evolutionChain" />
            <GridButton screen="moves" />
            <GridButton screen="varieties" />
            <GridButton screen="eggGroups" />
          </GridButtonContainer>
          <MiscButtonContainer>
            <MiscButtonColumn orientation="left">
              <ScrollButton direction="up" />
              <ScrollButton direction="down" />
            </MiscButtonColumn>
            <MiscButtonColumn orientation="right">
              <MiscButtonRow>
                <SlimButton
                  label="walkthroughScrollTop"
                  onClick={onSlimButtonThreeClick}
                />
                <SlimButton
                  label="walkthroughScrollBottom"
                  noMargin
                  onClick={onSlimButtonFourClick}
                />
              </MiscButtonRow>
              <MiscButtonRow>
                <RandomiseButton />
              </MiscButtonRow>
            </MiscButtonColumn>
          </MiscButtonContainer>
          <TypeDisplayContainer />
        </RightScreenContent>
      </RightScreen>
    </div>
  );
};
