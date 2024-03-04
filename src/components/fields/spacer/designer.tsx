import { SeparatorHorizontal } from 'lucide-react';

import { FormElementInstance } from '@/components/form-elements';
import { Label } from '@/components/ui/label';

import { CustomInstance } from '.';

export function DesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const {
    extraAttributes: { height },
  } = elementInstance as CustomInstance;
  return (
    <div className='flex flex-col gap-2 w-full items-center'>
      <Label className='text-muted-foreground'>Spacer field: {height}px</Label>
      <SeparatorHorizontal size={32} />
    </div>
  );
}
