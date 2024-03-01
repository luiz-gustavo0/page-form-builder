import { ScanEye } from 'lucide-react';

import { Button } from './ui/button';

export const PreviewDialogBtn = () => {
  return (
    <Button variant='outline' className='gap-2'>
      <ScanEye size={16} />
      Preview
    </Button>
  );
};
