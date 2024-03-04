import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import {
  FormElementInstance,
  SubmitFunction,
} from '@/components/form-elements';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { CustomInstance, SelectFieldFormElement } from '.';

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
  const [value, setValue] = useState(defaultValue || '');
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(Boolean(isInvalid));
  }, [isInvalid]);

  const element = elementInstance as CustomInstance;
  const {
    id,
    extraAttributes: { helperText, label, placeholder, required, options },
  } = element;
  return (
    <div className='flex flex-col gap-2 w-full'>
      <Label className={cn(error && 'text-red-500')}>
        {label}
        {required && '*'}
      </Label>
      <Select
        defaultValue={value}
        onValueChange={(valueToSelect) => {
          setValue(valueToSelect);
          if (!submitValue) return;

          const valid = SelectFieldFormElement.validate(element, valueToSelect);
          setError(!valid);
          if (!valid) return;
          submitValue(id, valueToSelect);
        }}
      >
        <SelectTrigger className={cn('w-full', error && 'border-red-500')}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
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
  );
}
