import {
  GanttChartSquare,
  MousePointerClick,
  Split,
  ViewIcon,
} from 'lucide-react';

import { GetFormById } from '@/actions/form';

import { FormLinkShare } from '@/components/form-link-share';
import { CardStats } from '@/components/stats/card';
import { SubmissionsTable } from '@/components/submissions-table';

import { VisitButton } from '@/components/visit-button';

const FormsDetailPage = async ({ params }: { params: { id: string } }) => {
  const form = await GetFormById(params.id);

  if (!form) {
    throw new Error('Form not found');
  }

  const { visits, submissions } = form;

  let submissionsRate = 0;

  if (visits > 0) {
    submissionsRate = (submissions / visits) * 100;
  }

  const bounceRate = 100 - submissionsRate;

  return (
    <>
      <div className='py-10 border-b border-muted'>
        <div className='flex justify-between container'>
          <h1 className='text-3xl font-bold truncate'>{form.name}</h1>

          <VisitButton shareUrl={form.shareUrl} />
        </div>
      </div>
      <div className='py-4 border-b border-muted'>
        <div className='container flex gap-2 items-center justify-between'>
          <FormLinkShare shareUrl={form.shareUrl} />
        </div>
      </div>
      <div className='w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container'>
        <CardStats
          title='Total visits'
          icon={<ViewIcon className='text-primary' />}
          helperText='All time form visits'
          value={visits.toLocaleString() ?? ''}
          loading={false}
          className='shadow-sm shadow-primary'
        />
        <CardStats
          title='Total submissions'
          icon={<GanttChartSquare className='text-primary' />}
          helperText='All time form submissions'
          value={submissions.toLocaleString() ?? ''}
          loading={false}
          className='shadow-sm shadow-primary'
        />
        <CardStats
          title='Submissions rate'
          icon={<MousePointerClick className='text-primary' />}
          helperText='Visits that result in form submission'
          value={submissionsRate.toLocaleString() + '%' ?? ''}
          loading={false}
          className='shadow-sm shadow-primary'
        />
        <CardStats
          title='Bounce rate'
          icon={<Split className='text-primary' />}
          helperText='Visits that leave without interaction'
          value={bounceRate.toLocaleString() + '%' ?? ''}
          loading={false}
          className='shadow-sm shadow-primary'
        />
      </div>
      <div className='container pt-10'>
        <SubmissionsTable id={form.id} />
      </div>
    </>
  );
};

export default FormsDetailPage;
