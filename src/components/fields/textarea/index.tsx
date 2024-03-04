import { Text } from 'lucide-react';

import {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '@/components/form-elements';
import { DesignerComponent } from './designer';
import { FormComponent } from './form';
import { PropertiesComponent } from './properties';

const type: ElementsType = 'TextAreaField';

export type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

const extraAttributes = {
  label: 'Textarea field',
  helperText: 'Helper text',
  required: false,
  placeholder: 'Value here...',
  rows: 3,
};

export const TextAreaFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  designerBtnElement: {
    icon: Text,
    label: 'Textarea field',
  },
  designerComponent: DesignerComponent,
  formCompoonent: FormComponent,
  propertiesComponent: PropertiesComponent,
  validate: (formElement: FormElementInstance, currentValue: string) => {
    const element = formElement as CustomInstance;

    if (element.extraAttributes.required) {
      return currentValue.length > 0;
    }

    return true;
  },
};
