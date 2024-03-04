import { Heading } from 'lucide-react';

import {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '@/components/form-elements';
import { DesignerComponent } from './designer';
import { FormComponent } from './form';
import { PropertiesComponent } from './properties';

const type: ElementsType = 'TitleField';

export type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

const extraAttributes = {
  title: 'Title field',
};

export const TitleFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  designerBtnElement: {
    icon: Heading,
    label: 'Title field',
  },
  designerComponent: DesignerComponent,
  formCompoonent: FormComponent,
  propertiesComponent: PropertiesComponent,
  validate: () => true,
};
