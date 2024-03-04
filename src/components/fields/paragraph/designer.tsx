import { CustomInstance } from '.';
import { FormElementInstance } from '@/components/form-elements';
import { Label } from '@/components/ui/label';

export function DesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const {
    extraAttributes: { text },
  } = elementInstance as CustomInstance;
  return (
    <div className='flex flex-col gap-2 w-full'>
      <Label className='text-muted-foreground'>Paragraph field</Label>
      <p>{text}</p>
    </div>
  );
}
