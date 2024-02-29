'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { FilePlus, Loader2 } from 'lucide-react';
import { toast } from './ui/use-toast';

import { FormValues, formSchema } from '@/schemas/form';
import { CreateForm } from '@/actions/form';

export const CreateFormButton = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const formId = await CreateForm(values);

      toast({
        title: 'Success',
        description: 'Successfully created form',
        variant: 'default',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong, please try again',
        variant: 'destructive',
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='outline'
          className='group border border-primary/20 h-[200px] items-center  justify-center flex flex-col hover:cursor-pointer border-dashed gap-4'
        >
          <FilePlus className='h-8 w-8 text-muted-foreground group-hover:text-primary' />
          <p className='text-xl font-bold text-muted-foreground group-hover:text-primary'>
            Create form
          </p>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Form</DialogTitle>
          <DialogDescription>
            Create a new form to start collecting responses
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={5} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter>
          <Button
            disabled={form.formState.isSubmitting}
            className='w-full mt-4'
            onClick={form.handleSubmit(onSubmit)}
          >
            {!form.formState.isSubmitting && <span>Save</span>}
            {form.formState.isSubmitting && (
              <Loader2 className='animate-spin' size={16} />
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
