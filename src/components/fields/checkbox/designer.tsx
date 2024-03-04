import { CustomInstance } from '.';

import { FormElementInstance } from '@/components/form-elements';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

export function DesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const {
    extraAttributes: { helperText, label, required },
  } = elementInstance as CustomInstance;
  const id = `checkbox-${elementInstance.id}`;
  return (
    <div className='flex items-start space-x-2'>
      <Checkbox id={id} />
      <div className='grid gap-1.5 leading-none'>
        <Label htmlFor={id}>
          {label}
          {required && '*'}
        </Label>
        {helperText && (
          <p className='text-muted-foreground text-[0.8rem]'>{helperText}</p>
        )}
      </div>
    </div>
  );
}
