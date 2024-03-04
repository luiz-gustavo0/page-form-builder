import { CustomInstance } from '.';

import { FormElementInstance } from '@/components/form-elements';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CalendarDays } from 'lucide-react';

export function DesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const {
    extraAttributes: { helperText, label, placeholder, required },
  } = elementInstance as CustomInstance;
  return (
    <div className='flex flex-col gap-2 w-full'>
      <Label>
        {label}
        {required && '*'}
      </Label>
      <Button
        variant='outline'
        className='w-full justify-start text-left font-normal'
      >
        <CalendarDays size={16} className='mr-2' />
        <span>Pick a date</span>
      </Button>
      {helperText && (
        <p className='text-muted-foreground text-[0.8rem]'>{helperText}</p>
      )}
    </div>
  );
}
