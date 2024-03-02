import Link from 'next/link';
import { formatDistance } from 'date-fns';
import { ExternalLink, GanttChartSquare, Pencil, View } from 'lucide-react';

import { Form } from '@prisma/client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

type FormCardProps = {
  form: Form;
};

export const FormCard = ({ form }: FormCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2 justify-between'>
          <span className='truncate font-bold'>{form.name}</span>
          {form.published && <Badge>Published</Badge>}
          {!form.published && <Badge variant='destructive'>Draft</Badge>}
        </CardTitle>
        <CardDescription className='flex items-center justify-between text-muted-foreground text-sm'>
          {formatDistance(form.createdAt, new Date(), {
            addSuffix: true,
          })}
          {!form.published && (
            <span className='flex items-center gap-2'>
              <View className='text-muted-foreground' size={18} />
              <span>{form.visits.toLocaleString()}</span>
              <GanttChartSquare className='text-muted-foreground' size={18} />
              <span>{form.submissions.toLocaleString()}</span>
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className='h-[20px] truncate text-sm text-muted-foreground'>
        {form.description || 'No description'}
      </CardContent>
      <CardFooter>
        {form.published && (
          <Button asChild className='w-full mt-3 gap-4'>
            <Link href={`/forms/${form.id}`}>
              View submissions
              <ExternalLink size={16} />
            </Link>
          </Button>
        )}
        {!form.published && (
          <Button asChild variant='secondary' className='w-full mt-3 gap-4'>
            <Link href={`/builder/${form.id}`}>
              Edit form
              <Pencil size={16} />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
