import { FormElementInstance } from '@/components/form-elements';

import { CustomInstance } from '.';

export function FormComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;
  const {
    extraAttributes: { text },
  } = element;
  return <p>{text}</p>;
}
