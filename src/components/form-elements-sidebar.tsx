import { FormElements } from './form-elements';

import { SidebarBtnElement } from './sidebar-btn-element';

export const FormElementsSidebar = () => {
  return (
    <div>
      Elements
      <SidebarBtnElement formElement={FormElements.TextField} />
    </div>
  );
};
