'use client';

import { useEffect, useState } from 'react';

import { toast } from './ui/use-toast';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Share2 } from 'lucide-react';

export const FormLinkShare = ({ shareUrl }: { shareUrl: string }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const shareLink = `${window.location.origin}/submit/${shareUrl}`;
  return (
    <div className='flex flex-grow gap-4 items-center'>
      <Input readOnly value={shareLink} />
      <Button
        variant='secondary'
        className='max-w-[250px]'
        onClick={() => {
          navigator.clipboard.writeText(shareLink);
          toast({
            title: 'Copied',
            description: 'Link copied to clipboard',
          });
        }}
      >
        <Share2 size={16} className='mr-2' />
        Share link
      </Button>
    </div>
  );
};
