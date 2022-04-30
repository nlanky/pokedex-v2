// REACT
import { FC } from 'react';

// LOCAL FILES
// Components
import { Wave } from 'features/common/components';
import { Sprite } from 'features/sprites/components';
// Hooks
import { useVariety } from 'features/varietiesForms/hooks';
// Styling
import 'features/varietiesForms/components/VarietyForm.css';

interface VarietyProps {
  id: number;
}

export const Variety: FC<VarietyProps> = ({ id }) => {
  // CUSTOM HOOKS
  const { variety, loading } = useVariety(id);

  return (
    <div className="variety-form-wrapper">
      {loading && <Wave />}
      {!loading && (
        <>
          <div className="variety-form-sprite-wrapper">
            <Sprite
              altText={`${variety.name} sprite`}
              spriteUrl={variety.sprite}
            />
          </div>
          <span>{variety.name}</span>
        </>
      )}
    </div>
  );
};
