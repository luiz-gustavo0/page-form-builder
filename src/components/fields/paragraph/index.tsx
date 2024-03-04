import { ALargeSmall } from 'lucide-react';

import {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '@/components/form-elements';
import { DesignerComponent } from './designer';
import { FormComponent } from './form';
import { PropertiesComponent } from './properties';

const type: ElementsType = 'ParagraphField';

export type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

const extraAttributes = {
  text: 'Text here',
};

export const ParagraphFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  designerBtnElement: {
    icon: ALargeSmall,
    label: 'Paragraph field',
  },
  designerComponent: DesignerComponent,
  formCompoonent: FormComponent,
  propertiesComponent: PropertiesComponent,
  validate: () => true,
};
