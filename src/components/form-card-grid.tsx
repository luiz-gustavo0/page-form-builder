import { GetForms } from '@/actions/form';

import { FormCard } from './form-card';

export const FormCardGrid = async () => {
  const forms = await GetForms();

  return (
    <>
      {forms.map((form) => (
        <FormCard key={form.id} form={form} />
      ))}
    </>
  );
};
