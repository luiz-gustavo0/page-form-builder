import { ReactNode } from 'react';

import { ElementsType } from './form-elements';
import { TableCell } from './ui/table';

type RowCellProps = {
  type: ElementsType;
  value: string;
};

export const RowCell = ({ type, value }: RowCellProps) => {
  let node: ReactNode = value;
  return <TableCell>{node}</TableCell>;
};
