'use client';

import { Type } from 'lucide-react';
import { ElementsType, FormElement } from '../form-elements';

const type: ElementsType = 'TextField';

export const TextFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: {
      label: 'Text field',
      helperText: 'Helper text',
      required: false,
      placeholder: 'Value here',
    },
  }),
  designerBtnElement: {
    icon: Type,
    label: 'Text field',
  },
  designerComponent: () => <div>Designer component</div>,
  formCompoonent: () => <div>Form component</div>,
  propertiesComponent: () => <div>Properties component</div>,
};
