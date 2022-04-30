// REACT
import { FC } from 'react';

// LOCAL FILES
// Components
import { Wave } from 'features/common/components';
import { Sprite } from 'features/sprites/components';
// Hooks
import { useForm } from 'features/varietiesForms/hooks';
// Styling
import 'features/varietiesForms/components/VarietyForm.css';

interface FormProps {
  id: number;
}

export const Form: FC<FormProps> = ({ id }) => {
  // CUSTOM HOOKS
  const { form, loading } = useForm(id);

  return (
    <div className="variety-form-wrapper">
      {loading && <Wave />}
      {!loading && (
        <>
          <div className="variety-form-sprite-wrapper">
            <Sprite
              altText={`${form.name} sprite`}
              spriteUrl={form.sprite}
            />
          </div>
          <span>{form.name}</span>
        </>
      )}
    </div>
  );
};
