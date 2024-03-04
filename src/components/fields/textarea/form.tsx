import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import {
  FormElementInstance,
  SubmitFunction,
} from '@/components/form-elements';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

import { CustomInstance, TextAreaFieldFormElement } from '.';
import { Textarea } from '@/components/ui/textarea';

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
    extraAttributes: { helperText, label, placeholder, required, rows },
  } = element;
  return (
    <div className='flex flex-col gap-2 w-full'>
      <Label className={cn(error && 'text-red-500')}>
        {label}
        {required && '*'}
      </Label>
      <Textarea
        rows={rows}
        className={cn(error && 'border-red-500')}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          submitValue?.(id, e.target.value);
        }}
        onBlur={(e) => {
          if (!submitValue) return;

          const valid = TextAreaFieldFormElement.validate(
            element,
            e.target.value
          );
          setError(!valid);
          if (!valid) return;
          submitValue(id, e.target.value);
        }}
      />
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
