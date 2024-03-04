import { FormElementInstance } from '@/components/form-elements';
import { CustomInstance } from '.';
import { Label } from '@/components/ui/label';

export function DesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const {
    extraAttributes: { title },
  } = elementInstance as CustomInstance;
  return (
    <div className='flex flex-col gap-2 w-full'>
      <Label className='text-muted-foreground'>Title field</Label>
      <p className='text-xl'>{title}</p>
    </div>
  );
}
