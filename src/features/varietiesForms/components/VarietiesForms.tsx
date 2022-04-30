// REACT
import { VoidFunctionComponent } from 'react';

// LOCAL FILES
// Components
import { Wave } from 'features/common/components';
import { Form, Variety } from 'features/varietiesForms/components';
// Hooks
import { useVarietyAndFormIds } from 'features/varietiesForms/hooks';
// Styling
import 'features/varietiesForms/components/VarietiesForms.css';

export const VarietiesForms: VoidFunctionComponent = () => {
  // CUSTOM HOOKS
  const { varietyAndFormIds, loading } = useVarietyAndFormIds();
  const { varietyIds, formIds } = varietyAndFormIds;

  return (
    <div
      className="varieties-forms-container"
      style={{
        justifyContent: loading ? 'center' : 'normal',
      }}
    >
      {loading && <Wave />}
      {!loading && (
        <>
          {varietyIds.map((varietyId) => (
            <Variety key={varietyId} id={varietyId} />
          ))}
          {formIds.map((formId) => (
            <Form key={formId} id={formId} />
          ))}
        </>
      )}
    </div>
  );
};
