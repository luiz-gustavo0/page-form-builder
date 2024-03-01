import { Suspense } from 'react';

import { StatsCardGrid } from '@/components/stats/card-grid';
import { Wrapper as CardStatsWrapper } from '@/components/stats/wrapper';
import { Separator } from '@/components/ui/separator';
import { CreateFormButton } from '@/components/create-form-button';
import { FormCardGrid } from '@/components/form-card-grid';
import { FormCardSkeleton } from '@/components/form-card-skeleton';

const HomePage = () => {
  return (
    <div className='container pt-4'>
      <Suspense fallback={<StatsCardGrid loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
      <Separator className='my-6' />
      <h2 className='text-4xl font-bold col-span-2'>Your forms</h2>
      <Separator className='my-6' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <CreateFormButton />
        <Suspense
          fallback={[1, 2, 3, 4].map((el) => (
            <FormCardSkeleton key={el} />
          ))}
        >
          <FormCardGrid />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;
