import { GetFormContentByUrl } from '@/actions/form';

import type { FormElementInstance } from '@/components/form-elements';

import { FormSubmitComponent } from '@/components/form-submit';

async function FormSubmitPage({ params }: { params: { formUrl: string } }) {
  const form = await GetFormContentByUrl(params.formUrl);

  if (!form) throw new Error('Form not founnd');

  const formContent = JSON.parse(form.content) as FormElementInstance[];

  return (
    <FormSubmitComponent formContent={formContent} formUrl={params.formUrl} />
  );
}

export default FormSubmitPage;
