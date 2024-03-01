import { ArrowUpToLine, Save } from 'lucide-react';

import { Button } from './ui/button';

export const PublishFormBtn = () => {
  return (
    <Button className='gap-2'>
      <ArrowUpToLine size={16} />
      Publish
    </Button>
  );
};
