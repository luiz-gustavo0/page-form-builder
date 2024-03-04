import { GetFormWithSubmissions } from '@/actions/form';
import { ElementsType, FormElementInstance } from './form-elements';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { formatDistance } from 'date-fns';
import { RowCell } from './row-cell';

type Columns = {
  id: string;
  label: string;
  required: boolean;
  type: ElementsType;
};

type Row = {
  [key: string]: string;
} & { submittedAt: Date };

export const SubmissionsTable = async ({ id }: { id: string }) => {
  const form = await GetFormWithSubmissions(id);

  if (!form) throw new Error('Form not found');

  const formElements = JSON.parse(form.content) as FormElementInstance[];

  const columns: Columns[] = [];

  formElements.forEach((element) => {
    switch (element.type) {
      case 'TextField':
      case 'NumberField':
      case 'TextAreaField':
      case 'DateField':
      case 'SelectFiield':
      case 'CheckboxField':
        columns.push({
          id: element.id,
          label: element.extraAttributes?.label,
          required: element.extraAttributes?.required,
          type: element.type,
        });
        break;
      default:
        break;
    }
  });

  const rows: Row[] = [];

  form.FormSubmissions.forEach((submission) => {
    const content = JSON.parse(submission.content);
    rows.push({
      ...content,
      submittedAt: submission.createdAt,
    });
  });

  return (
    <>
      <h1 className='text-2xl font-bold my-4'>Submissions</h1>
      <div className='rounded-md border'>
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.id} className='uppercase'>
                  {column.label}
                </TableHead>
              ))}
              <TableHead className='uppercase text-muted-foreground text-right'>
                Submitted at
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <RowCell
                    key={column.id}
                    type={column.type}
                    value={row[column.id]}
                  />
                ))}
                <TableCell className='text-muted-foreground text-right'>
                  {formatDistance(row.submittedAt, new Date(), {
                    addSuffix: true,
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};
