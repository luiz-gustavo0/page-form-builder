import { GetFormById } from '@/actions/form';

import { FormBuilder } from '@/components/form-builder';

const BuilderPage = async ({ params }: { params: { id: string } }) => {
  const form = await GetFormById(params.id);

  if (!form) {
    throw new Error('Form not found');
  }

  return <FormBuilder form={form} />;
};

export default BuilderPage;
