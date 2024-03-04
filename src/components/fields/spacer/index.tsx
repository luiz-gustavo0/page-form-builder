import { SeparatorHorizontal } from 'lucide-react';

import {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '@/components/form-elements';
import { DesignerComponent } from './designer';
import { FormComponent } from './form';
import { PropertiesComponent } from './properties';

const type: ElementsType = 'SpacerField';

export type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

const extraAttributes = {
  height: 20, // px
};

export const SpacerFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  designerBtnElement: {
    icon: SeparatorHorizontal,
    label: 'Spacer field',
  },
  designerComponent: DesignerComponent,
  formCompoonent: FormComponent,
  propertiesComponent: PropertiesComponent,
  validate: () => true,
};
