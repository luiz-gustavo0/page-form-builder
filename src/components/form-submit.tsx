'use client';

import { useCallback, useRef, useState, useTransition } from 'react';
import { Loader2, MousePointerClick } from 'lucide-react';

import { FormElementInstance, FormElements } from './form-elements';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';
import { SubmitForm } from '@/actions/form';

type FormSubmitComponentProps = {
  formUrl: string;
  formContent: FormElementInstance[];
};

export const FormSubmitComponent = ({
  formContent,
  formUrl,
}: FormSubmitComponentProps) => {
  const [renderKey, setRenderKey] = useState(new Date().getTime());
  const [submitted, setSubmitted] = useState(false);

  const formValues = useRef<{ [key: string]: string }>({});
  const formErrors = useRef<{ [key: string]: boolean }>({});

  const [pending, starttransition] = useTransition();

  const validateForm = useCallback(() => {
    for (const field of formContent) {
      const actualValue = formValues.current[field.id] || '';
      const valid = FormElements[field.type].validate(field, actualValue);

      if (!valid) {
        formErrors.current[field.id] = true;
      }
    }

    if (Object.keys(formErrors.current).length > 0) {
      return false;
    }

    return true;
  }, [formContent]);

  const submitValue = (key: string, value: string) => {
    formValues.current[key] = value;
  };

  const submitForm = async () => {
    formErrors.current = {};
    const validForm = validateForm();

    if (!validForm) {
      setRenderKey(new Date().getTime());
      toast({
        title: 'Error',
        description: 'Please check the form errors',
        variant: 'destructive',
      });

      return;
    }

    try {
      const jsonContent = JSON.stringify(formValues.current);

      await SubmitForm(formUrl, jsonContent);
      setSubmitted(true);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong',
        variant: 'destructive',
      });
    }
  };

  if (submitted) {
    return (
      <div className='flex justify-center w-full h-full items-center p-8'>
        <div className='max-w-[620px] flex flex-col gap-4 flex-grow bg-background w-full p-8 overflow-y-auto border shadow-sm shadow-primary rounded'>
          <h1 className='text-2xl font-bold'>Form submitted</h1>
          <p className='text-muted-foreground'>
            Thank you for submitting the form, you can close this page now.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='flex justify-center w-full h-full items-center p-8'>
      <div
        key={renderKey}
        className='max-w-[720px] flex flex-col gap-4 flex-grow bg-background w-full p-8 overflow-y-auto border shadow-sm shadow-primary rounded-lg'
      >
        {formContent.map((element) => {
          const FormElement = FormElements[element.type].formCompoonent;

          return (
            <FormElement
              key={element.id}
              elementInstance={element}
              submitValue={submitValue}
              isInvalid={formErrors.current[element.id]}
              defaultValue={formValues.current[element.id]}
            />
          );
        })}
        <Button
          className='w-full mt-8'
          onClick={() => starttransition(submitForm)}
          disabled={pending}
        >
          {!pending && (
            <>
              <MousePointerClick size={16} className='mr-2' />
              Submit
            </>
          )}
          {pending && <Loader2 size={16} className='animate-spin' />}
        </Button>
      </div>
    </div>
  );
};
