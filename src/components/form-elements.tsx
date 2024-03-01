import { TextFieldFormElement } from './fields/text';

export type ElementsType = 'TextField';

export type FormElement = {
  type: ElementsType;
  construct: (id: string) => FormElementInstance;
  designerBtnElement: {
    icon: React.ElementType;
    label: string;
  };
  designerComponent: React.FC<{ elementInstance: FormElementInstance }>;
  formCompoonent: React.FC;
  propertiesComponent: React.FC<{ elementInstance: FormElementInstance }>;
};

export type FormElementInstance = {
  id: string;
  type: ElementsType;
  extraAttributes?: Record<string, any>;
};

type FormElementsType = {
  [key in ElementsType]: FormElement;
};

export const FormElements: FormElementsType = {
  TextField: TextFieldFormElement,
};
