import { Heading2 } from 'lucide-react';

import {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '@/components/form-elements';
import { DesignerComponent } from './designer';
import { FormComponent } from './form';
import { PropertiesComponent } from './properties';

const type: ElementsType = 'SubTitleField';

export type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

const extraAttributes = {
  title: 'Subtitle field',
};

export const SubTitleFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  designerBtnElement: {
    icon: Heading2,
    label: 'Subtitle field',
  },
  designerComponent: DesignerComponent,
  formCompoonent: FormComponent,
  propertiesComponent: PropertiesComponent,
  validate: () => true,
};
