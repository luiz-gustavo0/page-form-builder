import { GetFormStats } from '@/actions/form';

import { StatsCardGrid } from './card-grid';

export const Wrapper = async () => {
  const stats = await GetFormStats();
  return <StatsCardGrid stats={stats} loading={false} />;
};
