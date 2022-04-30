// PUBLIC MODULES
import { Step } from 'intro.js-react';

export const WALKTHROUGH_STEPS: Step[] = [
  // element (CSS selector for step)
  // intro (tooltip text)
  // position (position of tooltip)
  // tooltipClass (CSS class of tooltip)
  // highlightClass (CSS class of helper layer)
  {
    element: '.walkthrough-button',
    intro: 'Toggle the walkthrough at any time using this button',
    position: 'bottom',
  },
  {
    element: '.sprite-cycle.left',
    intro: 'Go to the previous Pok&eacute;mon (if applicable)',
    position: 'bottom',
  },
  {
    element: '.sprite-cycle.right',
    intro: 'Go to the next Pok&eacute;mon (if applicable)',
    position: 'bottom',
  },
  {
    element: '.sprite-cycle.top',
    intro: 'Go to the previous sprite (if applicable)',
    position: 'bottom',
  },
  {
    element: '.sprite-cycle.bottom',
    intro: 'Go to the next sprite (if applicable)',
    position: 'bottom',
  },
  {
    element: '.sprite-button',
    intro: "Play the Pok&eacute;mon's cry",
    position: 'bottom',
  },
  {
    element: '.slim-button.walkthroughFirstSprite',
    intro: 'Go to the first sprite',
    position: 'bottom',
  },
  {
    element: '.slim-button.walkthroughLastSprite',
    intro: 'Go to the last sprite',
    position: 'bottom',
  },
  {
    element: '.number-display-wrapper',
    intro:
      'Search for a Pok&eacute;mon using their name or Pok&eacute;dex number',
    position: 'bottom',
  },
  {
    element: '.dpad-wrapper',
    intro:
      'Use the D-pad as an alternative to the arrows on the left display',
    position: 'bottom',
  },
  {
    element: '.grid-button.flavourText',
    intro: 'Show flavour text (description)',
    position: 'bottom',
  },
  {
    element: '.grid-button.stats',
    intro: 'Show stats',
    position: 'bottom',
  },
  {
    element: '.grid-button.heightWeight',
    intro: 'Show height and weight',
    position: 'bottom',
  },
  {
    element: '.grid-button.typeEffectiveness',
    intro: 'Show type effectiveness when being attacked',
    position: 'bottom',
  },
  {
    element: '.grid-button.abilities',
    intro: 'Show abilities',
    position: 'bottom',
  },
  {
    element: '.grid-button.encounters',
    intro: 'Show encounter locations',
    position: 'bottom',
  },
  {
    element: '.grid-button.evolutionChain',
    intro: 'Show evolution chain',
    position: 'bottom',
  },
  {
    element: '.grid-button.moves',
    intro: 'Show moves',
    position: 'bottom',
  },
  {
    element: '.grid-button.varieties',
    intro: 'Show varieties and forms',
    position: 'bottom',
  },
  {
    element: '.grid-button.eggGroups',
    intro: 'Show egg groups',
    position: 'bottom',
  },
  {
    element: '.white-grid-button.up',
    intro: 'Scroll the right display up',
    position: 'bottom',
  },
  {
    element: '.white-grid-button.down',
    intro: 'Scroll the right display down',
    position: 'bottom',
  },
  {
    element: '.slim-button.walkthroughScrollTop',
    intro: 'Scroll to the top of the right display',
    position: 'bottom',
  },
  {
    element: '.slim-button.walkthroughScrollBottom',
    intro: 'Scroll to the bottom of the right display',
    position: 'bottom',
  },
  {
    element: '.randomise-button',
    intro: 'Go to a random Pok&eacute;mon',
    position: 'bottom',
  },
];
