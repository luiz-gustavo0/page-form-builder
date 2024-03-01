import { useTransition } from 'react';
import { Loader2, Save } from 'lucide-react';

import { useDesigner } from '@/hooks/useDesigner';

import { Button } from './ui/button';
import { UpddateFormContent } from '@/actions/form';
import { toast } from './ui/use-toast';

export const SaveFormBtn = ({ id }: { id: string }) => {
  const { elements } = useDesigner();
  const [loading, startTransiton] = useTransition();

  const updateFormContent = async () => {
    try {
      const jsonElements = JSON.stringify(elements);
      await UpddateFormContent(id, jsonElements);
      toast({
        title: 'Succes',
        description: 'Your form as been saved',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong',
        variant: 'destructive',
      });
    }
  };

  return (
    <Button
      variant='outline'
      className='gap-2'
      disabled={loading}
      onClick={updateFormContent}
    >
      {loading ? (
        <Loader2 size={16} className='animate-spin' />
      ) : (
        <Save size={16} />
      )}
      Save
    </Button>
  );
};
