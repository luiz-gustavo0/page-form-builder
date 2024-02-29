import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

type CardProps = {
  title: string;
  icon: React.ReactNode;
  helperText: string;
  value: string | number;
  loading: boolean;
  className?: string;
};

export const CardStats = ({
  title,
  icon,
  helperText,
  value,
  loading,
  className,
}: CardProps) => {
  return (
    <Card className={className}>
      <CardHeader className='flex flex-row justify-between items-center pb-2'>
        <CardTitle className='text-sm font-medium text-muted-foreground'>
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>
          {loading && (
            <Skeleton>
              <span className='opacity-0'>0</span>
            </Skeleton>
          )}
          {!loading && value}
        </div>
        <p className='text-xs text-muted-foreground pt-1'>{helperText}</p>
      </CardContent>
    </Card>
  );
};
