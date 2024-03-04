import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import {
  FormElementInstance,
  SubmitFunction,
} from '@/components/form-elements';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

import { CheckboxFieldFormElement, CustomInstance } from '.';
import { Checkbox } from '@/components/ui/checkbox';

export function FormComponent({
  elementInstance,
  submitValue,
  isInvalid,
  defaultValue,
}: {
  elementInstance: FormElementInstance;
  submitValue?: SubmitFunction;
  isInvalid?: boolean;
  defaultValue?: string;
}) {
  const [value, setValue] = useState<boolean>(
    defaultValue === 'true' ? true : false
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(Boolean(isInvalid));
  }, [isInvalid]);

  const element = elementInstance as CustomInstance;
  const {
    extraAttributes: { helperText, label, placeholder, required },
  } = element;
  const id = `checkbox-${elementInstance.id}`;

  return (
    <div className='flex items-start space-x-2'>
      <Checkbox
        id={id}
        checked={value}
        className={cn(error && 'border-red-500')}
        onCheckedChange={(checked) => {
          let valueToCheck = false;
          if (checked) {
            valueToCheck = true;
          }
          setValue(valueToCheck);
          if (!submitValue) return;
          const stringValue = value ? 'true' : 'false';
          const valid = CheckboxFieldFormElement.validate(element, stringValue);
          setError(!valid);
          submitValue(element.id, stringValue);
        }}
      />
      <div className='grid gap-1.5 leading-none'>
        <Label htmlFor={id} className={cn(error && 'text-red-500')}>
          {label}
          {required && '*'}
        </Label>
        {helperText && (
          <p
            className={cn(
              'text-muted-foreground text-[0.8rem]',
              error && 'text-red-500'
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    </div>
  );
}
