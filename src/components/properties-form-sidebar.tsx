import { useDesigner } from '@/hooks/useDesigner';
import { FormElements } from './form-elements';
import { Button } from './ui/button';
import { X as CloseIcon } from 'lucide-react';
import { Separator } from './ui/separator';

export const PropertiesFormSidebar = () => {
  const { selectedElement, setSelectedElement } = useDesigner();

  if (!selectedElement) return null;

  const PropertiesForm =
    FormElements[selectedElement?.type].propertiesComponent;

  return (
    <div className='flex flex-col p-2'>
      <div className='flex justify-between items-center'>
        <p className='text-sm text-foreground/70'>Element properties</p>
        <Button
          size={'icon'}
          variant='ghost'
          onClick={() => setSelectedElement(null)}
        >
          <CloseIcon size={20} />
        </Button>
      </div>
      <Separator className='mb-4' />
      <PropertiesForm elementInstance={selectedElement} />
    </div>
  );
};
