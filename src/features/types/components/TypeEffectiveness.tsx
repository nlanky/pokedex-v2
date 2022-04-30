// REACT
import { VoidFunctionComponent } from 'react';

// LOCAL FILES
// Components
import { Wave } from 'features/common/components';
// Constants
import { TYPE_TO_COLOUR } from 'features/types/constants';
// Hooks
import { useTypeEffectiveness } from 'features/types/hooks';
// Styling
import 'features/types/components/TypeEffectiveness.css';

export const TypeEffectiveness: VoidFunctionComponent = () => {
  // CUSTOM HOOKS
  const { loading, typeEffectiveness } = useTypeEffectiveness();

  const {
    weakTo,
    damagedNormallyBy,
    resistantTo,
    immuneTo,
    abilities,
  } = typeEffectiveness;

  if (loading) {
    return <Wave />;
  }

  return (
    <div className="type-effect-display">
      <div className="type-effect-container">
        <div className="type-effect-heading">Damaged normally by</div>
        <div className="type-effect-wrapper">
          {damagedNormallyBy.length === 0 ? (
            <div
              className="type-effect"
              style={{ backgroundColor: '#2A2B26' }}
            >
              <div className="type-name">None</div>
            </div>
          ) : (
            <>
              {damagedNormallyBy.map((typeEffect) => {
                const { type, multiplier } = typeEffect;

                return (
                  <div
                    className="type-effect"
                    style={{ backgroundColor: TYPE_TO_COLOUR[type] }}
                    key={type}
                  >
                    <div className="type-name">{type}</div>
                    <div className="type-effectiveness">
                      {`${multiplier}x`}
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
      <div className="type-effect-container">
        <div className="type-effect-heading">Weak to</div>
        <div className="type-effect-wrapper">
          {weakTo.length === 0 ? (
            <div
              className="type-effect"
              style={{ backgroundColor: '#2A2B26' }}
            >
              <div className="type-name">None</div>
            </div>
          ) : (
            <>
              {weakTo.map((typeEffect) => {
                const { type, multiplier } = typeEffect;

                return (
                  <div
                    key={type}
                    className="type-effect"
                    style={{ backgroundColor: TYPE_TO_COLOUR[type] }}
                  >
                    <div className="type-name">{type}</div>
                    <div className="type-effectiveness">
                      {`${multiplier}x`}
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
      <div className="type-effect-container">
        <div className="type-effect-heading">Immune to</div>
        <div className="type-effect-wrapper">
          {immuneTo.length === 0 ? (
            <div
              className="type-effect"
              style={{ backgroundColor: '#2A2B26' }}
            >
              <div className="type-name">None</div>
            </div>
          ) : (
            <>
              {immuneTo.map((typeEffect) => {
                const { type, multiplier } = typeEffect;

                return (
                  <div
                    key={type}
                    className="type-effect"
                    style={{ backgroundColor: TYPE_TO_COLOUR[type] }}
                  >
                    <div className="type-name">{type}</div>
                    <div className="type-effectiveness">
                      {`${multiplier}x`}
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
      <div className="type-effect-container">
        <div className="type-effect-heading">Resistant to</div>
        <div className="type-effect-wrapper">
          {resistantTo.length === 0 ? (
            <div
              className="type-effect"
              style={{ backgroundColor: '#2A2B26' }}
            >
              <div className="type-name">None</div>
            </div>
          ) : (
            <>
              {resistantTo.map((typeEffect) => {
                const { type, multiplier } = typeEffect;

                return (
                  <div
                    key={type}
                    className="type-effect"
                    style={{ backgroundColor: TYPE_TO_COLOUR[type] }}
                  >
                    <div className="type-name">{type}</div>
                    <div className="type-effectiveness">
                      {`${multiplier}x`}
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
      {abilities.length > 0 && (
        <div className="type-effect-ability-container">
          {abilities.map((ability) => {
            const { name, description } = ability;

            return (
              <div className="type-effect-ability-wrapper" key={name}>
                {description}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
