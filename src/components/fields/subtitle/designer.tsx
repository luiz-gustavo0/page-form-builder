import { CustomInstance } from '.';
import { FormElementInstance } from '@/components/form-elements';
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
      <Label className='text-muted-foreground'>Subtitle field</Label>
      <p className='text-lg'>{title}</p>
    </div>
  );
}
