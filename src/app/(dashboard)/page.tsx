import { StatsCardGrid } from '@/components/stats/card-grid';
import { Wrapper as CardStatsWrapper } from '@/components/stats/wrapper';
import { Suspense } from 'react';

const HomePage = () => {
  return (
    <div className='container pt-4'>
      <Suspense fallback={<StatsCardGrid loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
    </div>
  );
};

export default HomePage;
