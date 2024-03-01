import { Save } from 'lucide-react';

import { Button } from './ui/button';

export const SaveFormBtn = () => {
  return (
    <Button variant='outline' className='gap-2'>
      <Save size={16} />
      Save
    </Button>
  );
};
