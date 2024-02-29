import {
  GanttChartSquare,
  MousePointerClick,
  Split,
  ViewIcon,
} from 'lucide-react';

import { CardStats } from './card';

import { GetFormStats } from '@/actions/form';

type StatsCardProps = {
  stats?: Awaited<ReturnType<typeof GetFormStats>>;
  loading: boolean;
};

export const StatsCardGrid = ({ stats, loading }: StatsCardProps) => {
  return (
    <div className='w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
      <CardStats
        title='Total visits'
        icon={<ViewIcon className='text-primary' />}
        helperText='All time form visits'
        value={stats?.visits.toLocaleString() ?? ''}
        loading={loading}
        className='shadow-sm shadow-primary'
      />
      <CardStats
        title='Total submissions'
        icon={<GanttChartSquare className='text-primary' />}
        helperText='All time form submissions'
        value={stats?.submissions.toLocaleString() ?? ''}
        loading={loading}
        className='shadow-sm shadow-primary'
      />
      <CardStats
        title='Submissions rate'
        icon={<MousePointerClick className='text-primary' />}
        helperText='Visits that result in form submission'
        value={stats?.submissionsRate.toLocaleString() + '%' ?? ''}
        loading={loading}
        className='shadow-sm shadow-primary'
      />
      <CardStats
        title='Bounce rate'
        icon={<Split className='text-primary' />}
        helperText='Visits that leave without interaction'
        value={stats?.bounceRate.toLocaleString() + '%' ?? ''}
        loading={loading}
        className='shadow-sm shadow-primary'
      />
    </div>
  );
};
